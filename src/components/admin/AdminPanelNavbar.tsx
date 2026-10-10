"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  ExternalLink,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  ChevronDown,
  ShieldAlert,
} from "lucide-react";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export default function AdminPanelNavbar({ onToggleSidebar }: NavbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-14 bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 font-sans">
      {/* Left: Sidebar Toggle & Quick Storefront Link */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded cursor-pointer lg:hidden"
          title="Toggle Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#00a99d]/10 hover:bg-[#00a99d]/20 text-[#00a99d] rounded text-xs font-semibold transition"
          title="View Modesy Marketplace Store"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>View Site</span>
        </Link>
      </div>

      {/* Right: Search, Notifications, Admin Profile */}
      <div className="flex items-center gap-4 text-xs">
        {/* Quick Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded px-2.5 py-1.5 w-64 border border-transparent focus-within:border-[#00a99d] focus-within:bg-white transition">
          <Search className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search in admin panel..."
            className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Notifications Icon */}
        <button
          type="button"
          className="p-1.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full relative cursor-pointer"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold hidden sm:inline">admin</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-sm shadow-xl z-50 py-1.5">
              <div className="px-3 py-2 border-b border-gray-100 bg-gray-50/80">
                <p className="font-bold text-gray-900">Administrator</p>
                <p className="text-[11px] text-gray-500 truncate">admin@codingest.com</p>
              </div>
              <Link
                href="/admin/profile-settings"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#00a99d]"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Profile Settings</span>
              </Link>
              <Link
                href="/admin"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#00a99d]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Marketplace Home</span>
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                href="/guest"
                onClick={() => setProfileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
