import React from "react";

export interface AdminNavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hasSubmenu?: boolean;
  badge?: string;
}

export interface AdminNavSection {
  heading: string;
  items: AdminNavItem[];
}

export interface AdminUser {
  name: string;
  role: string;
  email: string;
  isOnline: boolean;
  avatarUrl?: string;
}
