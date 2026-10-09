"use client";

import React, { useState } from "react";
import ModesyHeader from "@/components/layout/ModesyHeader";
import ModesyFooter from "@/components/layout/ModesyFooter";
import LoginModal from "@/components/auth/LoginModal";
import HeroBanner from "@/components/layout/Hero-Banner";
import ShopByCategory from "@/components/layout/Shop-By-Category";
import SpecialOffers from "@/components/layout/Special-Offers";
import FeaturedProducts from "@/components/layout/Featured-Products";
import NewArrivals from "@/components/layout/New-Arrivals";
import CategoryClothing from "@/components/layout/Category-Clothing";
import CategoryJewelry from "@/components/layout/Category-Jewelry";
import ShopByBrand from "@/components/layout/Shop-By-Brand";
import LatestBlogPosts from "@/components/layout/Latest-Blog-Posts";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-gray-800">
      <ModesyHeader
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        currentUser={currentUser}
        onLogout={() => setCurrentUser(null)}
      />
      
      <main className="flex-1 w-full space-y-8 pb-8">
        <HeroBanner />
        <ShopByCategory />
        <SpecialOffers />
        <FeaturedProducts />
        <NewArrivals />
        <CategoryClothing />
        <CategoryJewelry />
        <ShopByBrand />
        <LatestBlogPosts />
      </main>

      <ModesyFooter />
      
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
        }}
      />
    </div>
  );
}