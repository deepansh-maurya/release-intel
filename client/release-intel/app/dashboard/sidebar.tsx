"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  Box,
  Settings,
} from "lucide-react";

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Services', href: '/dashboard/services', icon: Layers },
  { name: 'Deployments', href: '/dashboard/deployments', icon: Box },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen fixed left-0 top-0 z-10 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
              <path d="M15 6L9 12L15 18" />
            </svg>
          </div>
          <span className="font-bold text-xl text-slate-800">yourlogo</span>
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative
                  ${isActive
                    ? "bg-blue-50/80 text-blue-600 font-medium"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full" />
                )}
                <Icon
                  size={20}
                  className={`
                    ${isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}
                  `}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}