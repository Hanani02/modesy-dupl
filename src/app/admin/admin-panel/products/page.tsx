import React from "react";
import Link from "next/link";
import { Package, PlusCircle, Edit, Trash2, Eye, Star } from "lucide-react";

export default function AdminPanelProductsPage() {
  const products = [
    { id: 1, title: "Modern Ergonomic Office Chair", sku: "FURN-880", price: "$180.00", stock: 24, category: "Furniture", vendor: "ErgoLiving", status: "Active" },
    { id: 2, title: "Handcrafted Minimalist Ceramic Mug", sku: "HOME-102", price: "$22.00", stock: 85, category: "Home & Kitchen", vendor: "ClayArtisan", status: "Active" },
    { id: 3, title: "Wireless Noise Cancelling Headphones", sku: "ELEC-550", price: "$149.00", stock: 12, category: "Electronics", vendor: "SoundBeat", status: "Active" },
    { id: 4, title: "Genuine Italian Leather Wallet", sku: "ACC-312", price: "$45.00", stock: 50, category: "Accessories", vendor: "ModaCraft", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#00a99d]" /> Products
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Manage marketplace inventory, vendor listings, and physical items</p>
        </div>
        <button
          type="button"
          className="px-3.5 py-1.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer"
        >
          <PlusCircle className="w-3.5 h-3.5" /> Add New Product
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-5 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase">
              <tr>
                <th className="py-2.5 px-3">Product</th>
                <th className="py-2.5 px-3">SKU</th>
                <th className="py-2.5 px-3">Category</th>
                <th className="py-2.5 px-3">Vendor</th>
                <th className="py-2.5 px-3">Price</th>
                <th className="py-2.5 px-3">Stock</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50/70">
                  <td className="py-3 px-3 font-semibold text-gray-900">{p.title}</td>
                  <td className="py-3 px-3 font-mono text-gray-500">{p.sku}</td>
                  <td className="py-3 px-3 text-gray-600">{p.category}</td>
                  <td className="py-3 px-3 text-[#00a99d] font-medium">{p.vendor}</td>
                  <td className="py-3 px-3 font-bold text-gray-900">{p.price}</td>
                  <td className="py-3 px-3 font-medium text-gray-700">{p.stock}</td>
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
