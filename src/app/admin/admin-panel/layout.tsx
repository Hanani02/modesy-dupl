import React from "react";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f6f9] p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      {children}
    </div>
  );
}

