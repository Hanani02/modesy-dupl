"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BrandItem {
  id: number;
  name: string;
  logo: React.ReactNode;
}

const brands: BrandItem[] = [
  {
    id: 1,
    name: "Armani",
    logo: (
      <div className="flex flex-col items-center justify-center">
        {/* Armani Eagle silhouette SVG */}
        <svg className="w-12 h-9 text-gray-900" viewBox="0 0 100 50" fill="currentColor">
          <path d="M50 8c-3 0-5 2-5 4 0 3 2 5 5 5s5-2 5-5c0-2-2-4-5-4zm-14 8c-6 0-14 3-20 6 3 3 8 7 14 7 3-3 5-8 6-13zm28 0c1 5 3 10 6 13 6 0 11-4 14-7-6-3-14-6-20-6zm-14 8c-3 0-6 3-6 7 2 6 5 11 6 15 1-4 4-9 6-15 0-4-3-7-6-7zm-12 1c-4 5-8 10-14 13 6 2 12 3 18 3-1-5-3-11-4-16zm24 0c-1 5-3 11-4 16 6 0 12-1 18-3-6-3-10-8-14-13z" />
        </svg>
      </div>
    ),
  },
  {
    id: 2,
    name: "Burberry",
    logo: (
      <div className="flex flex-col items-center justify-center text-[#1e3a8a]">
        {/* Burberry Equestrian Knight SVG */}
        <svg className="w-11 h-8" viewBox="0 0 100 70" fill="currentColor">
          <path d="M30 15c2-4 8-8 15-5 3 2 6 6 8 10 3 2 8 2 12 0-2 4-5 8-8 10 3 3 7 4 11 3-3 4-7 7-12 8 4 5 10 7 16 8-8 4-17 5-25 3-4-1-8-3-11-6-2 3-5 5-9 6 3-4 5-9 6-14-5-1-10-3-14-6 5-1 9-3 13-6-4-4-7-9-8-15 4 1 8 3 11 5-1-4-1-8 0-12z" />
          <text x="25" y="65" fontSize="11" fontWeight="bold" letterSpacing="2">PRORSUM</text>
        </svg>
      </div>
    ),
  },
  {
    id: 3,
    name: "Diesel",
    logo: (
      <div className="bg-[#e11d48] text-white font-black px-3.5 py-1 text-sm tracking-wider uppercase border border-red-700 shadow-xs">
        DIESEL
      </div>
    ),
  },
  {
    id: 4,
    name: "Dockers",
    logo: (
      <div className="flex flex-col items-center justify-center text-[#1e293b]">
        {/* Anchor with wings */}
        <div className="flex items-center gap-1 font-black text-xs tracking-widest uppercase">
          <span className="text-[10px]">⚓</span>
          <span>DOCKERS</span>
          <span className="text-[10px]">⚓</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    name: "Gucci",
    logo: (
      <div className="flex flex-col items-center justify-center text-gray-900">
        <span className="text-base font-serif font-black tracking-widest">GUCCI</span>
        {/* Interlocking GG */}
        <div className="flex -space-x-1.5 opacity-80 scale-75">
          <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
          <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "H&M",
    logo: (
      <div className="text-[#dc2626] font-black italic text-2xl tracking-tighter">
        H&amp;M
      </div>
    ),
  },
  {
    id: 7,
    name: "Hugo Boss",
    logo: (
      <div className="flex flex-col items-center justify-center text-gray-900 leading-none">
        <span className="text-[11px] font-bold text-[#b91c1c] tracking-widest uppercase mb-0.5">HUGO</span>
        <span className="text-base font-extrabold tracking-widest uppercase">BOSS</span>
      </div>
    ),
  },
  {
    id: 8,
    name: "Lacoste",
    logo: (
      <div className="flex flex-col items-center justify-center text-gray-900">
        {/* Crocodile icon */}
        <svg className="w-8 h-4 text-[#15803d]" viewBox="0 0 100 40" fill="currentColor">
          <path d="M10 20c10-8 30-12 50-8 10 2 20 6 30 14-8-1-16-1-24 1-5 1-10 4-15 7-12-1-24-4-35-10-2-1-4-2-6-4z" />
        </svg>
        <span className="text-[11px] font-black tracking-widest uppercase text-gray-900 mt-0.5">
          LACOSTE
        </span>
      </div>
    ),
  },
];

export default function BrandSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full my-6 font-sans">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-3.5">
        Shop By Brand
      </h2>

      {/* Brand Box with Navigation */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition cursor-pointer"
          aria-label="Previous brands"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Brand Container with continuous border & vertical separators */}
        <div
          ref={scrollContainerRef}
          className="bg-white border border-gray-200 rounded-sm flex overflow-x-auto scroll-smooth divide-x divide-gray-200 shadow-2xs no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href="/"
              className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/8 h-20 sm:h-22 flex items-center justify-center p-3 hover:bg-gray-50/80 transition-colors group/item"
            >
              <div className="transition-transform duration-200 group-hover/item:scale-105">
                {brand.logo}
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition cursor-pointer"
          aria-label="Next brands"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
