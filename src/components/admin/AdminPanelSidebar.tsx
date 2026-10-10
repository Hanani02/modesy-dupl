"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Palette,
  Sliders,
  LayoutTemplate,
  ShoppingBag,
  Download,
  RotateCcw,
  Package,
  FileText,
  FolderTree,
  Tag,
  Bookmark,
  Layers,
  CreditCard,
  DollarSign,
  Banknote,
  FileCode,
  Newspaper,
  MapPin,
  Users,
  Shield,
  HelpCircle,
  Database,
  Search,
  Tv,
  MessageSquare,
  Mail,
  Star,
  MessageCircle,
  Send,
  Share2,
  AlertTriangle,
  Ban,
  SlidersHorizontal,
  Settings,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const ADMIN_PANEL_NAV_SECTIONS = [
  {
    heading: "MAIN NAVIGATION",
    items: [
      { title: "Home", href: "/admin/admin-panel/home", icon: Home },
      { title: "Theme", href: "/admin/admin-panel/theme", icon: Palette },
      { title: "Slider", href: "/admin/admin-panel/slider", icon: Sliders },
      { title: "Homepage Manager", href: "/admin/admin-panel/homepage-manager", icon: LayoutTemplate },
    ],
  },
  {
    heading: "ORDERS & SALES",
    items: [
      { title: "Orders", href: "/admin/admin-panel/orders", icon: ShoppingBag, badge: "8" },
      { title: "Digital Sales", href: "/admin/admin-panel/digital-sales", icon: Download },
      { title: "Refund Request", href: "/admin/admin-panel/refund-requests", icon: RotateCcw },
    ],
  },
  {
    heading: "PRODUCTS & CATALOG",
    items: [
      { title: "Products", href: "/admin/admin-panel/products", icon: Package },
      { title: "Quote Request", href: "/admin/admin-panel/quote-requests", icon: FileText },
      { title: "Categories", href: "/admin/admin-panel/categories", icon: FolderTree },
      { title: "Tags", href: "/admin/admin-panel/tags", icon: Tag },
      { title: "Brands", href: "/admin/admin-panel/brands", icon: Bookmark },
      { title: "Custom Fields", href: "/admin/admin-panel/custom-fields", icon: Layers },
    ],
  },
  {
    heading: "FINANCE & EARNINGS",
    items: [
      { title: "Payments", href: "/admin/admin-panel/payments", icon: CreditCard },
      { title: "Earning", href: "/admin/admin-panel/earnings", icon: DollarSign },
      { title: "Payouts", href: "/admin/admin-panel/payouts", icon: Banknote },
    ],
  },
  {
    heading: "CONTENT MANAGEMENT",
    items: [
      { title: "Pages", href: "/admin/admin-panel/pages", icon: FileCode },
      { title: "Blog", href: "/admin/admin-panel/blog", icon: Newspaper },
      { title: "Location", href: "/admin/admin-panel/location", icon: MapPin },
    ],
  },
  {
    heading: "MEMBERSHIP & ACCESS",
    items: [
      { title: "Membership", href: "/admin/admin-panel/membership", icon: Users },
      { title: "Roles & Permissions", href: "/admin/admin-panel/roles-permissions", icon: Shield },
    ],
  },
  {
    heading: "COMMUNITY & MESSAGES",
    items: [
      { title: "Chat Messages", href: "/admin/admin-panel/chat-messages", icon: MessageSquare },
      { title: "Contact Messages", href: "/admin/admin-panel/contact-messages", icon: Mail },
      { title: "Reviews", href: "/admin/admin-panel/reviews", icon: Star },
      { title: "Comments", href: "/admin/admin-panel/comments", icon: MessageCircle },
      { title: "Newsletter", href: "/admin/admin-panel/newsletter", icon: Send },
    ],
  },
  {
    heading: "MARKETING & ADS",
    items: [
      { title: "Ad Spaces", href: "/admin/admin-panel/ad-spaces", icon: Tv },
      { title: "Affiliate Program", href: "/admin/admin-panel/affiliate-program", icon: Share2 },
    ],
  },
  {
    heading: "SYSTEM & TOOLS",
    items: [
      { title: "Help Center", href: "/admin/admin-panel/help-center", icon: HelpCircle },
      { title: "Cache System", href: "/admin/admin-panel/cache-system", icon: Database },
      { title: "SEO Tools", href: "/admin/admin-panel/seo-tools", icon: Search },
      { title: "Abuse Reports", href: "/admin/admin-panel/abuse-reports", icon: AlertTriangle },
      { title: "Email Blacklist", href: "/admin/admin-panel/email-blacklist", icon: Ban },
      { title: "Preferences", href: "/admin/admin-panel/preferences", icon: SlidersHorizontal },
      { title: "Settings", href: "/admin/admin-panel/settings", icon: Settings },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function AdminPanelSidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 w-64 bg-[#222d32] text-[#b8c7ce] flex flex-col transition-transform duration-300 ease-in-out font-sans ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Brand Header */}
      <div className="h-14 bg-[#1a2226] border-b border-[#10171a] px-5 flex items-center justify-between shrink-0">
        <Link href="/admin/admin-panel/home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-[#00a99d] text-white flex items-center justify-center font-bold text-sm shadow">
            M
          </div>
          <div>
            <span className="text-white font-bold text-base tracking-wide">MODESY</span>
            <span className="text-[10px] text-gray-400 block -mt-1 uppercase tracking-wider font-semibold">
              Admin Panel
            </span>
          </div>
        </Link>
      </div>

      {/* Admin User Mini Card */}
      <div className="px-5 py-4 bg-[#1e282c] border-b border-[#182024] flex items-center gap-3 shrink-0">
        <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow">
          <ShieldAlert className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white truncate">Administrator</p>
          <p className="text-[11px] text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
          </p>
        </div>
      </div>

      {/* Nav List with Scrollbar */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-4 text-xs scrollbar-thin scrollbar-thumb-gray-700">
        {ADMIN_PANEL_NAV_SECTIONS.map((sec, secIdx) => (
          <div key={secIdx}>
            <p className="px-3 text-[10px] font-bold text-[#4b646f] uppercase tracking-wider mb-1">
              {sec.heading}
            </p>
            <ul className="space-y-0.5">
              {sec.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href === "/admin/admin-panel/home" &&
                    (pathname === "/admin/admin-panel" || pathname === "/admin/admin-panel/"));

                return (
                  <li key={itemIdx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-3 py-2 rounded-xs transition-colors ${
                        isActive
                          ? "bg-[#1e282c] text-white font-semibold border-l-3 border-[#00a99d]"
                          : "hover:bg-[#1e282c] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#00a99d]" : "text-gray-400"}`} />
                        <span>{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 bg-red-500 text-white rounded text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer Return Link */}
      <div className="p-3 bg-[#1a2226] border-t border-[#10171a] shrink-0 text-center">
        <Link
          href="/admin"
          className="text-xs text-gray-300 hover:text-white inline-flex items-center gap-1 font-medium"
        >
          <span>← Back to Storefront</span>
        </Link>
      </div>
    </aside>
  );
}
