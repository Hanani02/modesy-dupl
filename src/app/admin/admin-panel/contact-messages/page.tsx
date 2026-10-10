import React from "react";
import { Mail, Trash2, Eye, Reply } from "lucide-react";

export default function AdminContactMessagesPage() {
  const inquiries = [
    { id: 1, name: "Liam Anderson", email: "liam@example.com", subject: "Partnership Opportunity", message: "We would like to discuss a brand sponsorship program with Modesy.", status: "New", date: "2026-10-09" },
    { id: 2, name: "Sophia Taylor", email: "sophia@webmail.org", subject: "Question regarding vendor payout", message: "How long does direct wire transfer take to European bank accounts?", status: "Replied", date: "2026-10-07" },
    { id: 3, name: "Ethan Wright", email: "ethan@designhub.io", subject: "Report bug in checkout form", message: "Zip code validation showed an error on Irish postal codes.", status: "Replied", date: "2026-10-04" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#00a99d]" /> Contact Messages
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Customer feedback and help queries submitted via the public Contact Us page</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Sender</th>
                <th className="py-2.5 px-3">Email</th>
                <th className="py-2.5 px-3">Subject</th>
                <th className="py-2.5 px-3">Message Excerpt</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inquiries.map((i) => (
                <tr key={i.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{i.name}</td>
                  <td className="py-3 px-3 text-gray-600">{i.email}</td>
                  <td className="py-3 px-3 font-medium text-gray-800">{i.subject}</td>
                  <td className="py-3 px-3 text-gray-500 max-w-xs truncate">{i.message}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      i.status === "New" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"
                    }`}>
                      {i.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-400">{i.date}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button className="text-gray-500 hover:text-[#00a99d]"><Reply className="w-3.5 h-3.5 inline" /></button>
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
