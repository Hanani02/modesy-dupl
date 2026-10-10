import React from "react";
import { MessageSquare, Search, Trash2, Eye } from "lucide-react";

export default function AdminChatMessagesPage() {
  const chats = [
    { id: 1, sender: "Sarah Jenkins (Buyer)", receiver: "Apex Tech (Vendor)", product: "Smart Watch V2", message: "Is the battery rechargeable with USB-C?", date: "2026-10-09 15:40" },
    { id: 2, sender: "Michael Brown (Buyer)", receiver: "Artisan Leather (Vendor)", product: "Vintage Wallet", message: "Can you engrave custom initials on it?", date: "2026-10-09 12:15" },
    { id: 3, sender: "Dwight Schrute (Buyer)", receiver: "Paper Crafts (Vendor)", product: "Cardboard Boxes", message: "Do you offer wholesale bulk pricing?", date: "2026-10-08 09:30" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00a99d]" /> Chat Messages
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Audit live conversations exchanged between buyers and marketplace sellers</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Sender</th>
                <th className="py-2.5 px-3">Receiver</th>
                <th className="py-2.5 px-3">Related Product</th>
                <th className="py-2.5 px-3">Latest Excerpt</th>
                <th className="py-2.5 px-3">Timestamp</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {chats.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{c.sender}</td>
                  <td className="py-3 px-3 text-[#00a99d] font-medium">{c.receiver}</td>
                  <td className="py-3 px-3 text-gray-600">{c.product}</td>
                  <td className="py-3 px-3 text-gray-500 max-w-xs truncate">{c.message}</td>
                  <td className="py-3 px-3 text-gray-400">{c.date}</td>
                  <td className="py-3 px-3 text-right space-x-2">
                    <button className="text-gray-500 hover:text-[#00a99d]"><Eye className="w-3.5 h-3.5 inline" /></button>
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
