import React from "react";
import { AlertTriangle, Trash2, CheckCircle, Shield } from "lucide-react";

export default function AdminAbuseReportsPage() {
  const reports = [
    { id: 1, targetType: "Product Listing", targetItem: "Counterfeit Designer Bag", reporter: "AuthenticBrand Rep", reason: "Intellectual Property Infringement", date: "2026-10-09", status: "Under Review" },
    { id: 2, targetType: "User Profile", targetItem: "@spammer_bot99", reporter: "Community Member", reason: "Phishing links in bio", date: "2026-10-07", status: "Resolved (Banned)" },
    { id: 3, targetType: "Product Comment", targetItem: "Comment #4092", reporter: "Store Vendor", reason: "Abusive language / harassment", date: "2026-10-05", status: "Resolved (Removed)" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#00a99d]" /> Abuse Reports
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Community flags, spam reports, and copyrighted material infringement complaints</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Type</th>
                <th className="py-2.5 px-3">Target Item</th>
                <th className="py-2.5 px-3">Reported By</th>
                <th className="py-2.5 px-3">Violation Reason</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reports.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-800">{r.targetType}</td>
                  <td className="py-3 px-3 text-red-600 font-medium">{r.targetItem}</td>
                  <td className="py-3 px-3 text-gray-600">{r.reporter}</td>
                  <td className="py-3 px-3 text-gray-700 max-w-xs truncate">{r.reason}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      r.status.startsWith("Resolved") ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-400">{r.date}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button className="px-2.5 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded text-[11px] font-semibold cursor-pointer">
                      Take Action
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
