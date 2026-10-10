import React from "react";
import { RotateCcw, Check, X, AlertCircle } from "lucide-react";

export default function AdminRefundRequestsPage() {
  const requests = [
    { id: "REF-102", orderId: "#10034", buyer: "Claire Danes", reason: "Item damaged during transit", amount: "$54.00", status: "Pending", date: "2026-10-09" },
    { id: "REF-101", orderId: "#10012", buyer: "Thomas Hardy", reason: "Wrong size delivered", amount: "$38.00", status: "Approved", date: "2026-10-06" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-[#00a99d]" /> Refund Requests
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Review and resolve buyer dispute refund applications</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Refund ID</th>
                <th className="py-2.5 px-3">Order</th>
                <th className="py-2.5 px-3">Buyer</th>
                <th className="py-2.5 px-3">Reason</th>
                <th className="py-2.5 px-3">Amount</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-bold text-gray-900">{r.id}</td>
                  <td className="py-3 px-3 font-mono font-medium text-gray-600">{r.orderId}</td>
                  <td className="py-3 px-3 font-medium text-gray-800">{r.buyer}</td>
                  <td className="py-3 px-3 text-gray-500 max-w-xs truncate">{r.reason}</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{r.amount}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      r.status === "Approved" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{r.date}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button className="px-2 py-1 bg-green-50 text-green-700 hover:bg-green-100 rounded text-xs font-semibold cursor-pointer">Approve</button>
                    <button className="px-2 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded text-xs font-semibold cursor-pointer">Decline</button>
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
