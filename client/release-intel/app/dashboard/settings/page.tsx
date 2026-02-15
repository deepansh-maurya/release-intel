"use client";

import {
  User,
  Settings as SettingsIcon,
  MoreHorizontal,
  ChevronDown,
  AlertTriangle,
  ChevronRight,
  Search,
  Bell,
  Download
} from "lucide-react";

// Mock Data for members matching the screenshot
const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@acme.com',
    role: 'Owner',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Alice Smith',
    email: 'alice.smith@acme.com',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@acme.com',
    role: 'Member',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto font-sans text-slate-900">

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-slate-400 mb-2">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-slate-800">Settings</span>
      </div>

      <h1 className="text-3xl font-bold text-slate-800 mb-6">Settings</h1>

      {/* Organization Settings Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
          <span className="font-semibold text-slate-700">Organization Settings</span>
          <ChevronDown size={16} className="text-slate-400" />
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Org Name</label>
            <input
              type="text"
              defaultValue="Acme Inc"
              className="w-full px-4 py-2 border border-slate-200 rounded-md text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Danger Zone */}
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={20} className="text-orange-500 fill-orange-100" />
              <span className="font-semibold text-orange-900">Danger Zone</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
                Delete Organization
              </button>
              <span className="text-sm text-slate-600">
                Permanently remove this organization and all of its data.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Member Management Section */}
      <div className="pt-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-800">Member Management</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors shadow-sm">
            Invite Members <ChevronRight size={16} />
          </button>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-1 group">
                    Name
                    <ChevronDown size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="flex items-center gap-1 group">
                    Role
                    <ChevronDown size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                  </div>
                </th>
                <th className="px-6 py-3 font-medium w-32"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors px-6">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-200 ring-2 ring-white">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-medium text-slate-700">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{member.email}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center justify-between w-32 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 text-sm transition-colors border border-slate-200">
                      <span>{member.role}</span>
                      <ChevronDown size={14} className="text-slate-500" />
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors">
                        <SettingsIcon size={18} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-end gap-4 text-xs text-slate-500 font-medium">
            <span>1 - 3 of 3 &gt;</span>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>
                <ChevronRight size={14} className="rotate-180 text-slate-400" />
              </button>

              <div className="w-2 h-2 rounded-full bg-slate-400"></div>

              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-800 shadow-sm font-semibold">
                5
              </button>

              <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                <ChevronRight size={14} className="text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
