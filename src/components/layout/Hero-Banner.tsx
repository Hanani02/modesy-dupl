import React from "react";
export default function HeroBanner() {
  return (
    <div className="w-full bg-gray-100 h-[300px] md:h-[450px] relative overflow-hidden group">
      <img src="https://placehold.co/1920x500/00a99d/ffffff?text=Hero+Slider" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center text-white p-6">
           <h1 className="text-4xl font-bold mb-4">Discover the Best Products</h1>
           <button className="bg-white text-green-600 px-8 py-3 rounded font-bold hover:bg-gray-100">Shop Now</button>
        </div>
      </div>
    </div>
  );
}