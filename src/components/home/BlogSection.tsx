"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Folder, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPostsData } from "@/data/blogs";

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full my-8 font-sans">
      {/* Section Header with Clickable Title and View All Link */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/blog" className="group/title inline-block">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover/title:text-[#00a99d] tracking-tight transition-colors">
            Latest Blog Posts
          </h2>
        </Link>
        <Link
          href="/blog"
          className="text-xs sm:text-sm font-medium text-[#1963d8] hover:underline flex items-center gap-1 transition cursor-pointer"
        >
          View All <span className="text-sm">→</span>
        </Link>
      </div>

      {/* Blog Cards Container with Carousel Controls */}
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-3.5 top-[35%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition cursor-pointer"
          aria-label="Previous blog posts"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogPostsData.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[calc((100%-48px)/4)] bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                <Link href={`/blog/${post.categorySlug}/${post.slug}`} className="block w-full h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Article Title */}
                  <Link href={`/blog/${post.categorySlug}/${post.slug}`}>
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 hover:text-[#1963d8] leading-snug transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Meta: Category & Date */}
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-2 mb-2">
                    <Link
                      href={`/blog?category=${encodeURIComponent(post.category)}`}
                      className="flex items-center gap-1 hover:text-[#1963d8] transition"
                    >
                      <Folder className="w-3 h-3 text-gray-400 stroke-[1.5]" />
                      <span>{post.category}</span>
                    </Link>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gray-400 stroke-[1.5]" />
                      <span>{post.time}</span>
                    </div>
                  </div>

                  {/* Snippet / Description */}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-3.5 top-[35%] -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white hover:scale-105 transition cursor-pointer"
          aria-label="Next blog posts"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
