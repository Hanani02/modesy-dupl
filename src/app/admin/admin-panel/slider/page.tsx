import React from "react";
import Link from "next/link";
import { Sliders, PlusCircle, Trash2, Edit } from "lucide-react";

export default function AdminSliderPage() {
  const slides = [
    { id: 1, title: "Summer Fashion Collection", subtitle: "Up to 50% off select styles", link: "/products/clothing", order: 1 },
    { id: 2, title: "Handcrafted Elegant Jewelry", subtitle: "Exclusive designs by artisan creators", link: "/products/jewelry-accessories", order: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Sliders className="w-5 h-5 text-[#00a99d]" /> Slider Manager
        </h1>
        <button
          type="button"
          className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded-xs hover:bg-[#008f85] transition flex items-center gap-1.5"
        >
          <PlusCircle className="w-3.5 h-3.5" /> Add Slider Item
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-6">
        <h2 className="text-sm font-bold text-gray-800 pb-3 border-b border-gray-100 mb-4">
          Homepage Hero Sliders
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200">
              <tr>
                <th className="py-2.5 px-3">Order</th>
                <th className="py-2.5 px-3">Title</th>
                <th className="py-2.5 px-3">Subtitle</th>
                <th className="py-2.5 px-3">Target Link</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {slides.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 font-bold text-gray-500">#{s.order}</td>
                  <td className="py-3 px-3 font-semibold text-gray-900">{s.title}</td>
                  <td className="py-3 px-3 text-gray-500">{s.subtitle}</td>
                  <td className="py-3 px-3 text-[#00a99d]">{s.link}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button type="button" className="text-gray-500 hover:text-[#00a99d]"><Edit className="w-3.5 h-3.5 inline" /></button>
                    <button type="button" className="text-gray-400 hover:text-red-600"><Trash2 className="w-3.5 h-3.5 inline" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
