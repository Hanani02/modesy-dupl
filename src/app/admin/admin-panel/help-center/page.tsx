import React from "react";
import { HelpCircle, PlusCircle, Trash2, Edit } from "lucide-react";

export default function AdminHelpCenterPage() {
  const articles = [
    { id: 1, topic: "How to open a vendor seller shop", category: "Vendors", views: 2450, status: "Published" },
    { id: 2, topic: "Tracking your shipping and order delivery", category: "Buyers", views: 3890, status: "Published" },
    { id: 3, topic: "Understanding platform payout schedules", category: "Finance", views: 1120, status: "Published" },
    { id: 4, topic: "Returning a physical item and refund policies", category: "Returns", views: 2980, status: "Published" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#00a99d]" /> Help Center
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage customer support knowledgebase, help topics, and FAQs</p>
        </div>
        <button className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer">
          <PlusCircle className="w-3.5 h-3.5" /> Add Help Article
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Article Title</th>
                <th className="py-2.5 px-3">Help Category</th>
                <th className="py-2.5 px-3">Views</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {articles.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{a.topic}</td>
                  <td className="py-3 px-3 text-gray-600">{a.category}</td>
                  <td className="py-3 px-3 font-bold text-[#00a99d]">{a.views}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-[10px] font-bold">
                      {a.status}
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
