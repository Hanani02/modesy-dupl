import { supabase, isSupabaseConfigured } from "./client";
import { DbProduct, DbProductImage } from "./types";

export const CUSTOM_PRODUCTS_STORAGE_KEY = "modesy_custom_products";
export const PRODUCTS_CHANGE_EVENT = "modesy_products_change";

export interface CreateProductInput {
  vendor_id?: string;
  category_id?: string | null;
  category_name?: string;
  category_slug?: string;
  seller_name?: string;
  brand_id?: string | null;
  title: string;
  slug?: string;
  sku?: string;
  short_description?: string;
  description?: string;
  product_type?: "physical" | "digital" | "service";
  listing_type?: "sell_on_site" | "ordinary_listing" | "bidding";
  price: number;
  discount_rate?: number;
  stock?: number;
  is_featured?: boolean;
  is_promoted?: boolean;
  is_special_offer?: boolean;
  images?: string[];
  status?: "active" | "pending_approval" | "draft" | "hidden" | "sold" | "deleted";
}

export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}

// Generate URL slug from title
export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${base}-${Math.floor(1000 + Math.random() * 9000)}`;
}

/**
 * LocalStorage helper to get custom products
 */
export function getCustomProducts(): DbProduct[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CUSTOM_PRODUCTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse custom products", e);
    return [];
  }
}

/**
 * LocalStorage helper to save/update a custom product
 */
export function saveCustomProduct(product: DbProduct): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getCustomProducts();
    const idx = existing.findIndex((p) => p.id === product.id || p.slug === product.slug);
    if (idx >= 0) {
      existing[idx] = product;
    } else {
      existing.unshift(product);
    }
    localStorage.setItem(CUSTOM_PRODUCTS_STORAGE_KEY, JSON.stringify(existing));
    window.dispatchEvent(new CustomEvent(PRODUCTS_CHANGE_EVENT, { detail: product }));
  } catch (e) {
    console.error("Failed to save custom product", e);
  }
}

/**
 * LocalStorage helper to delete a custom product
 */
export function deleteCustomProduct(idOrSlug: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    const existing = getCustomProducts();
    const filtered = existing.filter((p) => p.id !== idOrSlug && p.slug !== idOrSlug);
    localStorage.setItem(CUSTOM_PRODUCTS_STORAGE_KEY, JSON.stringify(filtered));
    window.dispatchEvent(new CustomEvent(PRODUCTS_CHANGE_EVENT, { detail: { id: idOrSlug, deleted: true } }));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Fetch all products (merging custom products with Supabase products)
 */
export async function getProducts(options?: {
  status?: string;
  isFeatured?: boolean;
  isPromoted?: boolean;
  isSpecialOffer?: boolean;
  categorySlug?: string;
  categoryId?: string;
  vendorId?: string;
  search?: string;
  limit?: number;
  offset?: number;
}) {
  // 1. Filter custom products from localStorage
  const customItems = getCustomProducts();
  let filteredCustom = customItems.filter((p) => {
    if (options?.status && p.status !== options.status) return false;
    if (options?.isFeatured !== undefined && p.is_featured !== options.isFeatured) return false;
    if (options?.isPromoted !== undefined && p.is_promoted !== options.isPromoted) return false;
    if (options?.isSpecialOffer !== undefined && p.is_special_offer !== options.isSpecialOffer) return false;
    if (options?.vendorId && p.vendor_id !== options.vendorId) return false;
    if (options?.categorySlug) {
      const pCatSlug = p.categories?.slug || "";
      const pCatName = (p.categories?.name || "").toLowerCase();
      const targetSlug = options.categorySlug.toLowerCase();
      if (!pCatSlug.includes(targetSlug) && !targetSlug.includes(pCatSlug) && !pCatName.includes(targetSlug)) {
        return false;
      }
    }
    if (options?.search) {
      const q = options.search.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !(p.description || "").toLowerCase().includes(q) && !(p.sku || "").toLowerCase().includes(q)) {
        return false;
      }
    }
    return true;
  });

  if (!isSupabaseConfigured()) {
    const limit = options?.limit || 20;
    const offset = options?.offset || 0;
    return { data: filteredCustom.slice(offset, offset + limit), error: null };
  }

  try {
    let query = supabase
      .from("products")
      .select(`
        *,
        product_images ( id, image_url, is_primary, order_index ),
        categories ( id, name, slug ),
        profiles ( username, first_name, last_name, email )
      `)
      .order("created_at", { ascending: false });

    if (options?.status) {
      query = query.eq("status", options.status);
    }
    if (options?.isFeatured !== undefined) {
      query = query.eq("is_featured", options.isFeatured);
    }
    if (options?.isPromoted !== undefined) {
      query = query.eq("is_promoted", options.isPromoted);
    }
    if (options?.isSpecialOffer !== undefined) {
      query = query.eq("is_special_offer", options.isSpecialOffer);
    }
    if (options?.categoryId) {
      query = query.eq("category_id", options.categoryId);
    } else if (options?.categorySlug) {
      const { data: cat } = await supabase
        .from("categories")
        .select("id")
        .eq("slug", options.categorySlug)
        .maybeSingle();

      if (cat) {
        const { data: childCats } = await supabase
          .from("categories")
          .select("id")
          .eq("parent_id", cat.id);

        let grandChildIds: string[] = [];
        if (childCats && childCats.length > 0) {
          const childIds = childCats.map((c) => c.id);
          const { data: grandChildren } = await supabase
            .from("categories")
            .select("id")
            .in("parent_id", childIds);
          grandChildIds = grandChildren?.map((g) => g.id) || [];
        }

        const allIds = [cat.id, ...(childCats?.map((c) => c.id) || []), ...grandChildIds];
        query = query.in("category_id", allIds);
      }
    }
    if (options?.vendorId) {
      query = query.eq("vendor_id", options.vendorId);
    }
    if (options?.search) {
      query = query.ilike("title", `%${options.search}%`);
    }

    const { data: dbProducts, error } = await query;
    const listFromDb = (dbProducts || []) as DbProduct[];

    // Merge: custom items first, then DB items (deduplicated by slug or ID)
    const combined: DbProduct[] = [...filteredCustom];
    const seenIds = new Set(filteredCustom.map((p) => p.id));
    const seenSlugs = new Set(filteredCustom.map((p) => p.slug));

    for (const item of listFromDb) {
      if (!seenIds.has(item.id) && !seenSlugs.has(item.slug)) {
        combined.push(item);
        seenIds.add(item.id);
        seenSlugs.add(item.slug);
      }
    }

    const limit = options?.limit || combined.length;
    const offset = options?.offset || 0;
    return { data: combined.slice(offset, offset + limit), error: null };
  } catch (err) {
    console.error("Error in getProducts:", err);
    return { data: filteredCustom, error: err as Error };
  }
}

/**
 * Fetch single product by slug or ID
 */
export async function getProductBySlugOrId(identifier: string) {
  // 1. First check in custom products from localStorage
  const customItems = getCustomProducts();
  const lowerId = identifier.toLowerCase().trim();
  const foundCustom = customItems.find(
    (p) =>
      p.id === identifier ||
      p.slug.toLowerCase() === lowerId ||
      p.slug.toLowerCase().endsWith(`-${lowerId}`)
  );
  if (foundCustom) {
    return { data: foundCustom, error: null };
  }

  if (!isSupabaseConfigured()) {
    return { data: null, error: new Error("Supabase is not configured yet") };
  }

  try {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(identifier);

    let query = supabase
      .from("products")
      .select(`
        *,
        product_images ( id, image_url, is_primary, order_index ),
        categories ( id, name, slug ),
        profiles ( username, first_name, last_name, email )
      `);

    if (isUuid) {
      query = query.eq("id", identifier);
    } else if (/^\d+$/.test(identifier)) {
      query = query.or(`slug.eq.${identifier},slug.ilike.%-${identifier}`);
    } else {
      query = query.eq("slug", identifier);
    }

    const { data, error } = await query.maybeSingle();
    return { data: data as DbProduct | null, error };
  } catch (err) {
    return { data: null, error: err as Error };
  }
}

/**
 * Create a new product in Supabase & LocalStorage
 */
export async function createProduct(input: CreateProductInput) {
  try {
    // 1. Resolve vendor_id
    let vendorId = input.vendor_id;
    let sellerName = input.seller_name || "Trendshop";

    if (typeof window !== "undefined") {
      try {
        const storedUser = localStorage.getItem("modesy_auth_user");
        if (storedUser) {
          const parsed = JSON.parse(storedUser);
          if (parsed?.id) vendorId = parsed.id;
          if (parsed?.name) sellerName = parsed.name;
        }
      } catch {}
    }

    if (!vendorId) {
      vendorId = "00000000-0000-0000-0000-000000000002";
    }

    const slug = input.slug || generateSlug(input.title);
    const newId = `prod-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const imageList = (input.images && input.images.length > 0)
      ? input.images
      : ["/images/products/midi-skirt.webp"];

    const catName = input.category_name || "General";
    const catSlug = input.category_slug || generateSlug(catName);

    // Build the full DbProduct record
    const newProductRecord: DbProduct = {
      id: newId,
      vendor_id: vendorId,
      category_id: input.category_id || null,
      brand_id: input.brand_id || null,
      title: input.title,
      slug,
      sku: input.sku || `SKU-${Date.now().toString().slice(-6)}`,
      short_description: input.short_description || null,
      description: input.description || null,
      product_type: input.product_type || "physical",
      listing_type: input.listing_type || "sell_on_site",
      price: input.price,
      discount_rate: input.discount_rate || 0,
      stock: input.stock ?? 10,
      is_featured: input.is_featured || false,
      is_promoted: input.is_promoted || false,
      is_special_offer: input.is_special_offer || false,
      views_count: 0,
      rating_avg: 5,
      review_count: 0,
      external_link: null,
      status: input.status || "active",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      product_images: imageList.map((imgUrl, idx) => ({
        id: `img-${Date.now()}-${idx}`,
        product_id: newId,
        image_url: imgUrl,
        is_primary: idx === 0,
        order_index: idx + 1,
      })),
      categories: {
        name: catName,
        slug: catSlug,
      },
      profiles: {
        username: sellerName,
        first_name: "",
        last_name: "",
        email: "vendor@gmail.com",
      },
    };

    // 2. Attempt insert into Supabase if configured
    if (isSupabaseConfigured()) {
      try {
        const { data: dbData, error: dbErr } = await supabase
          .from("products")
          .insert({
            vendor_id: vendorId,
            category_id: input.category_id || null,
            brand_id: input.brand_id || null,
            title: input.title,
            slug,
            sku: newProductRecord.sku,
            short_description: input.short_description || null,
            description: input.description || null,
            product_type: input.product_type || "physical",
            listing_type: input.listing_type || "sell_on_site",
            price: input.price,
            discount_rate: input.discount_rate || 0,
            stock: input.stock ?? 10,
            is_featured: input.is_featured || false,
            is_promoted: input.is_promoted || false,
            is_special_offer: input.is_special_offer || false,
            status: input.status || "active",
          })
          .select()
          .single();

        if (!dbErr && dbData) {
          newProductRecord.id = dbData.id;
          if (imageList.length > 0) {
            const imageRows = imageList.map((imgUrl, idx) => ({
              product_id: dbData.id,
              image_url: imgUrl,
              is_primary: idx === 0,
              order_index: idx + 1,
            }));
            await supabase.from("product_images").insert(imageRows);
          }
        } else if (dbErr) {
          console.warn("Supabase insert notice (using local storage fallback):", dbErr.message);
        }
      } catch (sbErr) {
        console.warn("Supabase insert exception (using local storage fallback):", sbErr);
      }
    }

    // 3. Save to localStorage & notify
    saveCustomProduct(newProductRecord);

    return { data: newProductRecord, error: null };
  } catch (err) {
    console.error("Failed to create product:", err);
    return { data: null, error: err as Error };
  }
}

/**
 * Update an existing product
 */
export async function updateProduct(input: UpdateProductInput) {
  try {
    const { id, images, ...updateFields } = input;

    // 1. Update in custom products
    const customItems = getCustomProducts();
    const existingIdx = customItems.findIndex((p) => p.id === id || p.slug === id);
    if (existingIdx >= 0) {
      const updated = {
        ...customItems[existingIdx],
        ...updateFields,
        updated_at: new Date().toISOString(),
      };
      if (images && images.length > 0) {
        updated.product_images = images.map((imgUrl, idx) => ({
          id: `img-${Date.now()}-${idx}`,
          product_id: id,
          image_url: imgUrl,
          is_primary: idx === 0,
          order_index: idx + 1,
        }));
      }
      saveCustomProduct(updated);
    }

    // 2. Update in Supabase if configured
    if (isSupabaseConfigured()) {
      try {
        await supabase.from("products").update(updateFields).eq("id", id);
        if (images && images.length > 0) {
          await supabase.from("product_images").delete().eq("product_id", id);
          const imageRows = images.map((imgUrl, idx) => ({
            product_id: id,
            image_url: imgUrl,
            is_primary: idx === 0,
            order_index: idx + 1,
          }));
          await supabase.from("product_images").insert(imageRows);
        }
      } catch (e) {
        console.warn("Supabase update notice:", e);
      }
    }

    return { data: customItems[existingIdx] || null, error: null };
  } catch (err) {
    return { data: null, error: err as Error };
  }
}

/**
 * Delete a product
 */
export async function deleteProduct(productId: string) {
  // 1. Delete from custom products
  deleteCustomProduct(productId);

  // 2. Delete from Supabase if configured
  if (isSupabaseConfigured()) {
    try {
      await supabase.from("products").delete().eq("id", productId);
    } catch (e) {
      console.warn("Supabase delete notice:", e);
    }
  }

  return { success: true, error: null };
}
