import React from "react";
import { Banknote, CheckCircle, Clock, PlusCircle } from "lucide-react";

export default function AdminPayoutsPage() {
  const payouts = [
    { id: "PO-701", vendor: "Apex Tech Store", method: "Bank Wire Transfer", amount: "$1,450.00", status: "Completed", date: "2026-10-08" },
    { id: "PO-700", vendor: "Artisan Leather Co", method: "PayPal", amount: "$380.00", status: "Completed", date: "2026-10-06" },
    { id: "PO-699", vendor: "Vintage Pottery Studio", method: "Stripe Connect", amount: "$620.00", status: "Pending", date: "2026-10-05" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Banknote className="w-5 h-5 text-[#00a99d]" /> Payouts
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage vendor withdrawals, payment disbursement requests, and wire transfers</p>
        </div>
        <button className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer">
          <PlusCircle className="w-3.5 h-3.5" /> New Payout Batch
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Payout ID</th>
                <th className="py-2.5 px-3">Vendor / Seller</th>
                <th className="py-2.5 px-3">Disbursement Method</th>
                <th className="py-2.5 px-3">Amount</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payouts.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-bold text-gray-900">{p.id}</td>
                  <td className="py-3 px-3 font-semibold text-gray-800">{p.vendor}</td>
                  <td className="py-3 px-3 text-gray-600">{p.method}</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{p.amount}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      p.status === "Completed" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                    }`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500">{p.date}</td>
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
