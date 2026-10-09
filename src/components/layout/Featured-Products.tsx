import React from "react";
import { Star, Heart, ChevronDown, ShoppingCart } from "lucide-react";

type Product = {
  id: string;
  title: string;
  seller: string;
  rating: number;
  reviewsCount?: number;
  favoriteCount: number;
  currentPrice: string;
  originalPrice?: string;
  imageUrl: string;
  hoverImageUrl: string;
};

const products: Product[] = [
  {
    id: "1",
    title: "Black midi skirt with white flowers",
    seller: "Trendshop",
    rating: 4,
    favoriteCount: 0,
    currentPrice: "$48",
    originalPrice: "$55",
    imageUrl: "https://images.unsplash.com/photo-1583496661160-c588c4c1db36?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&q=80",
  },
  {
    id: "2",
    title: "Handcrafted decorative pillow for a luxurious...",
    seller: "Admin",
    rating: 0,
    favoriteCount: 0,
    currentPrice: "$59",
    originalPrice: "$69",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1574634534894-89d7576c8d59?w=400&q=80",
  },
  {
    id: "3",
    title: "Floral women sundress",
    seller: "Admin",
    rating: 4,
    favoriteCount: 0,
    currentPrice: "$80",
    originalPrice: "$89",
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80",
  },
  {
    id: "4",
    title: "Sun hat for women protection cap",
    seller: "Trendshop",
    rating: 0,
    favoriteCount: 0,
    currentPrice: "$29",
    imageUrl: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80",
  },
  {
    id: "5",
    title: "Sneaker shoes men",
    seller: "Trendshop",
    rating: 0,
    favoriteCount: 0,
    currentPrice: "$89",
    originalPrice: "$100",
    imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
  },
  {
    id: "6",
    title: "Women kipling bailey saddle handbag",
    seller: "Admin",
    rating: 0,
    favoriteCount: 0,
    currentPrice: "$59",
    originalPrice: "$69",
    imageUrl: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&q=80",
  },
  {
    id: "7",
    title: "Cobalt man t-shirt all colors",
    seller: "Admin",
    rating: 0,
    favoriteCount: 1,
    currentPrice: "Request a Quote",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80",
  },
  {
    id: "8",
    title: "Adorable animals photo pack",
    seller: "Admin",
    rating: 0,
    favoriteCount: 1,
    currentPrice: "Free",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=80",
  },
  {
    id: "9",
    title: "Moment of inspiration piano music",
    seller: "Admin",
    rating: 0,
    favoriteCount: 1,
    currentPrice: "$15",
    originalPrice: "$34",
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=400&q=80",
  },
  {
    id: "10",
    title: "Animation of popular vacation spots",
    seller: "Trendshop",
    rating: 5,
    favoriteCount: 1,
    currentPrice: "$10",
    originalPrice: "$15",
    imageUrl: "https://images.unsplash.com/photo-1506744626753-eda81827350f?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80",
  },
  {
    id: "11",
    title: "Light blue women shirt",
    seller: "Trendshop",
    rating: 5,
    favoriteCount: 0,
    currentPrice: "$49",
    originalPrice: "$69",
    imageUrl: "https://images.unsplash.com/photo-1596991771146-519b52c10b78?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1596991771146-17b5f8c85770?w=400&q=80",
  },
  {
    id: "12",
    title: "Summer fashion top lace",
    seller: "Trendshop",
    rating: 5,
    favoriteCount: 1,
    currentPrice: "$65",
    originalPrice: "$79",
    imageUrl: "https://images.unsplash.com/photo-1515347619362-e6d8b9415cb0?w=400&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1434389673669-e08b4cac3105?w=400&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Featured Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group bg-white border border-gray-100 rounded-md overflow-hidden hover:shadow-md transition-all duration-300 relative cursor-pointer">
            <div className="relative aspect-[4/5] bg-gray-100 w-full overflow-hidden">
              {/* Primary Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              
              {/* Secondary (Hover) Image */}
              <img
                src={product.hoverImageUrl}
                alt={`${product.title} alternate view`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
              
              {/* Hover Actions (Cart & Wishlist) */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
                <button className="bg-white rounded-full p-2 text-gray-400 hover:text-green-600 shadow-sm transition-colors flex items-center justify-center w-8 h-8" title="Add to Wishlist">
                  <Heart size={16} />
                </button>
                <button className="bg-white rounded-full p-2 text-gray-400 hover:text-green-600 shadow-sm transition-colors flex items-center justify-center w-8 h-8" title="Add to Cart">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-3">
              <h3 className="text-[13px] font-medium text-gray-800 leading-tight mb-1 line-clamp-2 min-h-[30px] group-hover:text-green-600 transition-colors">
                {product.title}
              </h3>
              
              <div className="text-[11px] text-gray-500 mb-2">
                {product.seller}
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <Heart size={12} className="mr-1" />
                  <span>{product.favoriteCount}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                {product.currentPrice === "Free" ? (
                  <span className="text-sm font-bold text-green-600">{product.currentPrice}</span>
                ) : product.currentPrice === "Request a Quote" ? (
                  <span className="text-sm font-bold text-gray-800">{product.currentPrice}</span>
                ) : (
                  <>
                    <span className="text-sm font-bold text-green-600 mr-2">{product.currentPrice}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
          Load More
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
