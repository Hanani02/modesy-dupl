import React from "react";
import Link from "next/link";
import { LayoutTemplate, CheckCircle2, GripVertical } from "lucide-react";

export default function AdminHomepageManagerPage() {
  const sections = [
    { name: "Hero Banner Slider", enabled: true },
    { name: "Shop By Category", enabled: true },
    { name: "Special Offers & Promo Banners", enabled: true },
    { name: "Featured Products", enabled: true },
    { name: "New Arrivals", enabled: true },
    { name: "Clothing Section (Tabbed Filters)", enabled: true },
    { name: "Jewelry & Accessories Carousel", enabled: true },
    { name: "Shop By Brand", enabled: true },
    { name: "Latest Blog Posts", enabled: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <LayoutTemplate className="w-5 h-5 text-[#00a99d]" /> Homepage Manager
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-6 max-w-3xl">
        <h2 className="text-sm font-bold text-gray-800 pb-3 border-b border-gray-100 mb-4">
          Homepage Sections &amp; Display Order
        </h2>
        <div className="space-y-2">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-xs text-xs"
            >
              <div className="flex items-center gap-3">
                <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
                <span className="font-semibold text-gray-800">{sec.name}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                <CheckCircle2 className="w-4 h-4" /> Enabled
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
