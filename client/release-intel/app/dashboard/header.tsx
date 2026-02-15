"use client";

import { Bell, Search, ChevronDown, User } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white border-b border-slate-200 h-16 px-8 flex items-center justify-between sticky top-0 z-10 transition-all duration-300">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold text-slate-800">Welcome, John</h1>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <Search className="h-5 w-5" />
                </button>

                <button className="relative p-1 text-slate-400 hover:text-slate-600 transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="User"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<svg class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <span className="text-sm font-medium text-slate-700">Johdn</span>
                        <ChevronDown className="h-4 w-4 text-slate-400" />
                    </div>
                </div>
            </div>
        </header>
    );
}
