import React from "react";
import { FileCode, PlusCircle, Trash2, Edit } from "lucide-react";

export default function AdminPagesPage() {
  const pages = [
    { id: 1, title: "About Us", slug: "about-us", location: "Quick Links (Footer)", status: "Active" },
    { id: 2, title: "Terms & Conditions", slug: "terms-conditions", location: "Information (Footer)", status: "Active" },
    { id: 3, title: "Privacy Policy", slug: "privacy-policy", location: "Information (Footer)", status: "Active" },
    { id: 4, title: "Help & FAQ", slug: "help-faq", location: "Help Center", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#00a99d]" /> Pages
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage custom CMS static pages, policy documents, and navigational links</p>
        </div>
        <button className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer">
          <PlusCircle className="w-3.5 h-3.5" /> Add New Page
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Page Title</th>
                <th className="py-2.5 px-3">Slug</th>
                <th className="py-2.5 px-3">Location Menu</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pages.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{p.title}</td>
                  <td className="py-3 px-3 font-mono text-gray-500">/{p.slug}</td>
                  <td className="py-3 px-3 text-gray-600">{p.location}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-[10px] font-bold">
                      {p.status}
                    </span>
                  </td>
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
