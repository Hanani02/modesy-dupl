import ModesyHeader from "@/components/layout/ModesyHeader";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopCategory/ShopByCategory";
import SpecialOffers from "@/components/home/SpecialOffers";
import FeaturedProducts from "@/components/layout/Featured-Products";
import NewArrivals from "@/components/NewArrivals";
import ClothingSection from "@/components/ClothingSection";
import JewelrySection from "@/components/home/JewelrySection";
import BrandSection from "@/components/home/BrandSection";
import BlogSection from "@/components/home/BlogSection";
import ModesyFooter from "@/components/layout/ModesyFooter";

export default function Home() {
  return (
    <><main className="min-h-screen bg-[#f8f9fa]">
      <Hero />
      <NewArrivals />
      <ClothingSection />
    </main><div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-gray-800">
        {/* Modesy Header (Guest View) */}
        <ModesyHeader />

        <main className="flex-1 w-full space-y-6 pb-12">
          {/* 1. Hero Carousel Slider Banner */}
          <Hero />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            {/* 2. Shop By Category */}
            <ShopByCategory />

            {/* 3. Special Offers + Promo Banners */}
            <SpecialOffers />

            {/* 4. Featured Products */}
            <FeaturedProducts />

            {/* 5. New Arrivals + Promo Banners */}
            <NewArrivals />

            {/* 6. Clothing Section with Subcategory Filters */}
            <ClothingSection />

            {/* 7. Jewelry & Accessories Carousel */}
            <JewelrySection />

            {/* 8. Shop By Brand */}
            <BrandSection />

            {/* 9. Latest Blog Posts */}
            <BlogSection />
          </div>
        </main>

        {/* Modesy Footer */}
        <ModesyFooter />
      </div></>
  );
}