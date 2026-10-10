import React from "react";
import { Newspaper, PlusCircle, Trash2, Edit } from "lucide-react";

export default function AdminBlogPage() {
  const posts = [
    { id: 1, title: "10 Timeless Summer Fashion Trends for 2026", category: "Trends", author: "Modesy Editorial", views: 1420, date: "2026-10-04" },
    { id: 2, title: "How to Support Independent Artisan Sellers", category: "Guides", author: "Community Lead", views: 980, date: "2026-09-28" },
    { id: 3, title: "Top 5 Interior Decor Hacks for Cozy Spaces", category: "Inspiration", author: "Design Team", views: 760, date: "2026-09-15" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[#00a99d]" /> Blog
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Publish articles, marketplace stories, and seller spotlight guides</p>
        </div>
        <button className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer">
          <PlusCircle className="w-3.5 h-3.5" /> Add Post
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Title</th>
                <th className="py-2.5 px-3">Category</th>
                <th className="py-2.5 px-3">Author</th>
                <th className="py-2.5 px-3">Views</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{p.title}</td>
                  <td className="py-3 px-3 text-gray-600">{p.category}</td>
                  <td className="py-3 px-3 text-gray-700">{p.author}</td>
                  <td className="py-3 px-3 font-bold text-[#00a99d]">{p.views}</td>
                  <td className="py-3 px-3 text-gray-500">{p.date}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button className="text-gray-500 hover:text-[#00a99d]"><Edit className="w-3.5 h-3.5 inline" /></button>
                    <button className="text-gray-400 hover:text-red-600"><Trash2 className="w-3.5 h-3.5 inline" /></button>
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
