import React from "react";
import { FileText, Eye, CheckCircle, Clock } from "lucide-react";

export default function AdminQuoteRequestsPage() {
  const quotes = [
    { id: "QR-301", product: "Bulk Custom Print Hoodies (100 pcs)", requester: "Acme Corp", vendor: "PrintLab", proposedPrice: "$1,200.00", status: "Pending Vendor", date: "2026-10-09" },
    { id: "QR-300", product: "Wholesale Handcrafted Candles (50 pcs)", requester: "Boutique Oasis", vendor: "AromaCo", proposedPrice: "$450.00", status: "Accepted", date: "2026-10-06" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00a99d]" /> Quote Requests
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">B2B and custom bulk order price negotiation requests</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Quote ID</th>
                <th className="py-2.5 px-3">Product / Inquiry</th>
                <th className="py-2.5 px-3">Requester</th>
                <th className="py-2.5 px-3">Target Vendor</th>
                <th className="py-2.5 px-3">Proposed Price</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.map((q) => (
                <tr key={q.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-bold text-gray-900">{q.id}</td>
                  <td className="py-3 px-3 font-semibold text-gray-800">{q.product}</td>
                  <td className="py-3 px-3 text-gray-600">{q.requester}</td>
                  <td className="py-3 px-3 text-[#00a99d] font-medium">{q.vendor}</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{q.proposedPrice}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      q.status === "Accepted" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{q.date}</td>
                  <td className="py-3 px-3 text-right">
                    <button className="px-2.5 py-1 bg-gray-100 hover:bg-[#00a99d] hover:text-white rounded text-[11px] font-medium transition cursor-pointer">
                      View
                    </button>
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
