"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Heart, ShoppingCart, ChevronLeft } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const hasMultipleImages = Boolean(product.secondaryImage);

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
    >
      {/* ================= THUMBNAIL AREA ================= */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden select-none">
        {/* Featured Badge */}
        {product.isFeatured && (
          <span className="absolute top-2 left-2 z-10 bg-[#00a99d] text-white text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs shadow-xs">
            Featured
          </span>
        )}

        {/* Product Image with smooth hover transition */}
        <Link href={`/product/${product.id}`} className="block w-full h-full relative overflow-hidden">
          {/* Primary / Base Image */}
          <img
            src={product.image}
            alt={product.title}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-105 ${
              hasMultipleImages ? "group-hover:opacity-0" : ""
            }`}
            loading="lazy"
          />

          {/* Secondary / Alternate Image (smooth cross-fade) */}
          {hasMultipleImages && (
            <img
              src={product.secondaryImage}
              alt={`${product.title} alternate view`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </Link>

        {/* Hover Controls (Multiple Images Indicator) */}
        {hasMultipleImages && (
          <div className="absolute left-2.5 bottom-2.5 z-10 w-7 h-7 rounded-full bg-white/90 border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ChevronLeft className="w-4 h-4" />
          </div>
        )}

        {/* Floating Quick Action Buttons (Top Right on hover) */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out">
          {/* Add to Cart button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              alert(`Added "${product.title}" to cart!`);
            }}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#00a99d] hover:border-[#00a99d] transition cursor-pointer hover:scale-110 active:scale-95"
            title="Add to cart"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>

          {/* Add to Wishlist button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-rose-500 hover:border-rose-300 transition cursor-pointer hover:scale-110 active:scale-95"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                isWishlisted ? "fill-rose-500 text-rose-500" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ================= CARD DETAILS ================= */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="text-xs sm:text-[13px] font-medium text-gray-800 line-clamp-2 hover:text-[#1963d8] leading-snug transition-colors">
              {product.title}
            </h3>
          </Link>

          {/* Seller */}
          <div className="mt-1">
            <span className="text-[11px] text-[#1963d8] hover:underline cursor-pointer">
              {product.seller}
            </span>
          </div>
        </div>

        <div className="mt-2.5">
          {/* Stars & Favorite count */}
          <div className="flex items-center justify-between text-gray-400 mb-1.5">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= product.rating
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300 stroke-[1.5]"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
              className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-rose-500 transition-colors cursor-pointer bg-transparent border-0 p-0"
              title={isWishlisted ? "Unlike" : "Like"}
            >
              <Heart
                className={`w-3 h-3 transition-colors ${
                  isWishlisted || product.favorites > 0
                    ? "fill-rose-400 text-rose-400 stroke-none"
                    : "text-gray-300 stroke-[1.5]"
                }`}
              />
              <span className={isWishlisted ? "text-rose-500 font-semibold" : ""}>
                {isWishlisted ? product.favorites + 1 : product.favorites}
              </span>
            </button>
          </div>

          {/* Pricing Logic:
              - Normal price: Black font
              - Discounted: Green bold font + struck-through original price on the right
              - Request a quote: Gray bold font
          */}
          <div className="flex items-center gap-1.5 pt-0.5 min-h-[20px]">
            {product.isQuote ? (
              <span className="text-xs font-bold text-gray-800">
                {product.price}
              </span>
            ) : product.isDiscounted && product.originalPrice ? (
              <>
                <span className="text-sm font-bold text-[#00a99d]">
                  {product.price}
                </span>
                <span className="text-xs text-gray-400 line-through font-normal">
                  {product.originalPrice}
                </span>
              </>
            ) : (
              <span className="text-sm font-bold text-gray-900">
                {product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
