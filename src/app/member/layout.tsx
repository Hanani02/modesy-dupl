"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import MemberHeader from "@/components/layout/member/MemberHeader";
import MemberFooter from "@/components/layout/member/MemberFooter";
import { useAuth } from "@/context/AuthContext";

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isInitialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isInitialized) return;
    const isExplicitLogout =
      typeof window !== "undefined" &&
      sessionStorage.getItem("modesy_explicit_logout") === "true";

    const isAllowed = user && user.role === "member";

    if (isExplicitLogout || !isAllowed) {
      if (typeof window !== "undefined") {
        window.location.href = "/guest";
      } else {
        router.replace("/guest");
      }
    }
  }, [user, isInitialized, router]);

  // While checking auth or if not authorized, do not render member content
  if (!isInitialized || !user || user.role !== "member") {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-[#00a99d] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-gray-800">
      <MemberHeader />
      <div className="flex-1 w-full">{children}</div>
      <MemberFooter />
    </div>
  );
}
