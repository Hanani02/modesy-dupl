"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { jewelryProductsData } from "@/data/products";

export default function JewelrySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full my-6 font-sans">
      {/* Section Header with Clickable Title and View All Link */}
      <div className="flex items-center justify-between mb-3.5">
        <Link href="/products/jewelry-accessories" className="group/title inline-block">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover/title:text-[#00a99d] tracking-tight transition-colors">
            Jewelry &amp; Accessories
          </h2>
        </Link>
        <Link
          href="/products/jewelry-accessories"
          className="text-xs sm:text-sm font-medium text-[#1963d8] hover:underline flex items-center gap-1 transition cursor-pointer"
        >
          View All <span className="text-sm">→</span>
        </Link>
      </div>

      {/* Product Carousel Container */}
      <div className="relative group">
        {/* Navigation Arrow Left */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3.5 top-[35%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition cursor-pointer"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3.5 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {jewelryProductsData.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[180px] sm:w-[195px] md:w-[200px] lg:w-[calc((100%-70px)/6)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3.5 top-[35%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition cursor-pointer"
          aria-label="Next products"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
