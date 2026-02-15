"use client";

import Sidebar from "./sidebar";
import Header from "./header";
// import TabBar from "./tabbar"; // Removing TabBar for cleaner look as per request

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />

      <div className="ml-64 min-h-screen flex flex-col">
        <Header />

        {/* <TabBar /> */}

        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
