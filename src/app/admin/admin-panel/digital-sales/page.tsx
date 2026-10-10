import React from "react";
import { Download, FileText, CheckCircle, ExternalLink } from "lucide-react";

export default function AdminDigitalSalesPage() {
  const sales = [
    { id: "DS-901", product: "Dashboard UI Kit Pro (Figma)", buyer: "alex@design.io", seller: "PixelCraft", price: "$49.00", downloads: 3, date: "2026-10-09" },
    { id: "DS-900", product: "Minimalist E-Commerce Next.js Theme", buyer: "kevin@startup.co", seller: "CodeSphere", price: "$65.00", downloads: 1, date: "2026-10-08" },
    { id: "DS-899", product: "Vector Icon Pack (1500+ Icons)", buyer: "linda@agency.net", seller: "IconStudio", price: "$19.00", downloads: 5, date: "2026-10-07" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Download className="w-5 h-5 text-[#00a99d]" /> Digital Sales
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Track downloadable digital products, software licenses & instant assets</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Sale ID</th>
                <th className="py-2.5 px-3">Digital Product</th>
                <th className="py-2.5 px-3">Buyer</th>
                <th className="py-2.5 px-3">Seller</th>
                <th className="py-2.5 px-3">Price</th>
                <th className="py-2.5 px-3">Downloads</th>
                <th className="py-2.5 px-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sales.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-bold text-gray-900">{s.id}</td>
                  <td className="py-3 px-3 font-semibold text-gray-800">{s.product}</td>
                  <td className="py-3 px-3 text-gray-600">{s.buyer}</td>
                  <td className="py-3 px-3 text-[#00a99d] font-medium">{s.seller}</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{s.price}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-[10px] font-bold">
                      {s.downloads} downloads
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{s.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
