import React from "react";
import { Share2, Users, DollarSign, CheckCircle } from "lucide-react";

export default function AdminAffiliateProgramPage() {
  const affiliates = [
    { id: 1, user: "Elena Gilbert", referralCode: "ELENA10", referrals: 24, totalSales: "$3,420.00", commissionPaid: "$171.00", status: "Active" },
    { id: 2, user: "Stefan Salvatore", referralCode: "STEFAN99", referrals: 15, totalSales: "$1,890.00", commissionPaid: "$94.50", status: "Active" },
    { id: 3, user: "Damon Salvatore", referralCode: "DAMONVIP", referrals: 8, totalSales: "$940.00", commissionPaid: "$47.00", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#00a99d]" /> Affiliate Program
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage affiliate partner commission tiers, referral cookies, and payouts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 p-4 rounded-sm shadow-xs">
          <span className="text-xs text-gray-400 font-semibold uppercase">Affiliate Commission</span>
          <div className="text-2xl font-bold text-gray-800 mt-1">5.0%</div>
          <span className="text-[11px] text-gray-500">Per successful referral sale</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-sm shadow-xs">
          <span className="text-xs text-gray-400 font-semibold uppercase">Referral Cookie Duration</span>
          <div className="text-2xl font-bold text-[#00a99d] mt-1">30 Days</div>
          <span className="text-[11px] text-gray-500">Tracking duration</span>
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-sm shadow-xs">
          <span className="text-xs text-gray-400 font-semibold uppercase">Total Generated Revenue</span>
          <div className="text-2xl font-bold text-gray-800 mt-1">$6,250.00</div>
          <span className="text-[11px] text-emerald-600 font-medium">From affiliate links</span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Affiliate Partner</th>
                <th className="py-2.5 px-3">Referral Code</th>
                <th className="py-2.5 px-3">Successful Referrals</th>
                <th className="py-2.5 px-3">Referred Gross Sales</th>
                <th className="py-2.5 px-3">Commission Earned</th>
                <th className="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {affiliates.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{a.user}</td>
                  <td className="py-3 px-3 font-mono text-[#00a99d] font-bold">{a.referralCode}</td>
                  <td className="py-3 px-3 font-medium text-gray-700">{a.referrals} orders</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{a.totalSales}</td>
                  <td className="py-3 px-3 font-bold text-emerald-600">{a.commissionPaid}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-[10px] font-bold">
                      {a.status}
                    </span>
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
