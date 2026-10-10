import React from "react";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f6f9] font-sans text-gray-800 flex">
      {/* 1. SIDEBAR */}
      <AdminPanelSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* NAVBAR */}
        <AdminPanelNavbar
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>

        {/* ADMIN FOOTER */}
        <footer className="bg-white border-t border-gray-200 px-6 py-3 text-xs text-gray-500 flex items-center justify-between">
          <span>Copyright &copy; 2026 <strong>Modesy</strong>. All rights reserved.</span>
          <span className="text-gray-400">Version 2.4.0</span>
        </footer>
      </div>
    </div>
  );
}

