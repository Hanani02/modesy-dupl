"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
    { id: 1, name: "NIKE", logo: "https://placehold.co/200x80/ffffff/333333?text=NIKE" },
    { id: 2, name: "Puma", logo: "https://placehold.co/200x80/ffffff/333333?text=PUMA" },
    { id: 3, name: "Tommy Hilfiger", logo: "https://placehold.co/200x80/ffffff/333333?text=TOMMY+HILFIGER" },
    { id: 4, name: "U.S. Polo Assn.", logo: "https://placehold.co/200x80/ffffff/333333?text=U.S.+POLO" },
    { id: 5, name: "Adidas", logo: "https://placehold.co/200x80/ffffff/333333?text=ADIDAS" },
    { id: 6, name: "GA", logo: "https://placehold.co/200x80/ffffff/333333?text=ARMANI" },
    { id: 7, name: "Burberry", logo: "https://placehold.co/200x80/ffffff/333333?text=BURBERRY" },
    { id: 8, name: "Diesel", logo: "https://placehold.co/200x80/ffffff/333333?text=DIESEL" },
    { id: 9, name: "Dockers", logo: "https://placehold.co/200x80/ffffff/333333?text=DOCKERS" },
    { id: 10, name: "Gucci", logo: "https://placehold.co/200x80/ffffff/333333?text=GUCCI" },
    { id: 11, name: "H&M", logo: "https://placehold.co/200x80/ffffff/333333?text=H%26M" },
    { id: 12, name: "Hugo Boss", logo: "https://placehold.co/200x80/ffffff/333333?text=HUGO+BOSS" },
    { id: 13, name: "Lacoste", logo: "https://placehold.co/200x80/ffffff/333333?text=LACOSTE" },
    { id: 14, name: "Lee Cooper", logo: "https://placehold.co/200x80/ffffff/333333?text=LEE+COOPER" },
    { id: 15, name: "Levi's", logo: "https://placehold.co/200x80/ffffff/333333?text=LEVI'S" },
    { id: 16, name: "Mango", logo: "https://placehold.co/200x80/ffffff/333333?text=MANGO" },
];

export default function ShopByBrand() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of container width
            scrollContainerRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Shop By Brand</h2>

            <div className="relative group px-1">
                <div
                    className="flex border border-gray-200 overflow-x-auto no-scrollbar scroll-smooth"
                    ref={scrollContainerRef}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {brands.map((brand, index) => (
                        <div
                            key={brand.id}
                            className={`flex-none w-1/2 sm:w-1/4 md:w-1/6 lg:w-[12.5%] h-24 sm:h-28 flex items-center justify-center p-4 sm:p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer ${index !== brands.length - 1 ? 'border-r border-gray-200' : ''
                                }`}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-600 hover:text-gray-900 z-10 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronLeft size={20} />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-600 hover:text-gray-900 z-10 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Hide scrollbar styles for Webkit */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
        </div>
    );
}
