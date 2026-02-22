"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
// import TabBar from "./tabbar"; // Removing TabBar for cleaner look as per request

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-20'} min-h-screen flex flex-col transition-all duration-300 ease-in-out`}>
        <Header />

        {/* <TabBar /> */}

        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
