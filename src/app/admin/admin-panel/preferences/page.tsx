import React from "react";
import { SlidersHorizontal, Save, Check } from "lucide-react";

export default function AdminPreferencesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#00a99d]" /> Preferences
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Toggle marketplace modules, customer registration, guest checkout, and vendor features</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-xs max-w-4xl">
        <form className="space-y-6">
          <div className="divide-y divide-gray-100">
            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Multi-Vendor System</h3>
                <p className="text-xs text-gray-500 mt-0.5">Allow registered users to open vendor shops and sell products</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00a99d] rounded cursor-pointer" />
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Digital Product Downloads</h3>
                <p className="text-xs text-gray-500 mt-0.5">Enable selling downloadable software, files, audio, and graphics</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00a99d] rounded cursor-pointer" />
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Bidding & Quote Requests</h3>
                <p className="text-xs text-gray-500 mt-0.5">Allow buyers to send custom price quotes to vendors</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00a99d] rounded cursor-pointer" />
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Guest Checkout</h3>
                <p className="text-xs text-gray-500 mt-0.5">Allow customers to buy products without creating an account</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00a99d] rounded cursor-pointer" />
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-gray-900">Product Reviews & Ratings</h3>
                <p className="text-xs text-gray-500 mt-0.5">Enable buyers to leave star ratings and reviews on purchased goods</p>
              </div>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#00a99d] rounded cursor-pointer" />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#00a99d] text-white text-xs font-bold rounded hover:bg-[#008f85] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" /> Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
