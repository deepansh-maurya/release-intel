"use client";

import { useTabs } from "./use-tabs";

export default function TabBar() {
  const { tabs, pathname, closeTab } = useTabs();

  return (
    <div className="w-full border-b bg-white flex items-center gap-2 px-4 h-12 overflow-x-auto">
      {tabs.length === 0 && (
        <div className="text-sm text-slate-400">No tabs opened</div>
      )}

      {tabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center gap-2 px-3 py-1 rounded cursor-pointer border ${
            pathname === tab ? "bg-blue-50 border-blue-200" : "bg-slate-100"
          }`}
        >
          <button className="text-sm">
            {tab.replace("/dashboard/", "") || "dashboard"}
          </button>

          <button
            onClick={() => closeTab(tab)}
            className="text-xs text-slate-900 hover:text-red-500"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
