"use client";

import {
  Building2,
  ChevronDown,
  Search,
  LayoutGrid,
  Clock,
  Filter,
  Download,
  MoreVertical,
  CheckCircle,
  AlertTriangle,
  FileSearch,
  ArrowRight,
  TrendingDown,
  Loader2,
  Calendar
} from "lucide-react";

// Mock Data matching the screenshot
const deployments = [
  {
    id: '#86',
    service: 'Billing-service',
    serviceId: 'billing-service',
    version: 'v2.5.4',
    status: 'Pending Analysis',
    risk: 'Pending Analysis',
    statusStyle: 'bg-slate-100 text-slate-600',
    riskStyle: 'bg-slate-50 text-slate-500 border border-slate-200'
  },
  {
    id: '#85',
    service: 'frontend-service',
    serviceId: 'frontend-service',
    version: 'v2.5.3',
    status: 'Safe',
    risk: 'Safe',
    statusStyle: 'bg-emerald-600 text-white',
    riskStyle: 'bg-emerald-600 text-white'
  },
  {
    id: '#84',
    service: 'auth-service',
    serviceId: 'auth-service',
    version: 'v2.5.3',
    status: 'Moderate Risk',
    risk: 'Moderate',
    statusStyle: 'bg-amber-100 text-amber-700',
    riskStyle: 'bg-amber-400 text-white'
  },
  {
    id: '#83',
    service: 'frontend-service',
    serviceId: 'frontend-service',
    version: 'v2.5.3',
    status: 'Risky',
    risk: 'High',
    statusStyle: 'bg-red-500 text-white',
    riskStyle: 'bg-red-500 text-white'
  },
  {
    id: '#82',
    service: 'billing-service',
    serviceId: 'billing-service',
    version: 'v2.5.3',
    status: 'Moderate Risk',
    risk: 'Moderate',
    statusStyle: 'bg-amber-100 text-amber-700',
    riskStyle: 'bg-amber-400 text-white'
  },
  {
    id: '#81',
    service: 'billing-service',
    serviceId: 'billing-service',
    version: 'v2.5.3',
    status: 'Safe',
    risk: 'Safe',
    statusStyle: 'bg-emerald-500 text-white',
    riskStyle: 'bg-emerald-500 text-white'
  },
];

export default function DeploymentsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans">

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-slate-400 mb-1">
        <span>Dashboard</span>
        <span className="mx-2">/</span>
        <span>Services</span>
        <span className="mx-2">/</span>
        <span className="font-medium text-slate-800">Deployments</span>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Deployments</h1>
        <button className="bg-slate-100 p-1 rounded hover:bg-slate-200 text-slate-500">
          <ArrowRight size={14} className="rotate-90" />
        </button>
      </div>

      {/* Controls Bar & Filters */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-1.5 shadow-sm text-sm text-slate-600 cursor-pointer hover:bg-slate-50">
            <Building2 size={16} className="text-slate-400" />
            <span className="font-medium">Org Name</span>
            <span className="text-slate-400">/</span>
            <span>workspace (You)</span>
            <ChevronDown size={14} className="text-slate-400 ml-2" />
          </div>

          <button className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 shadow-sm">
            <Download size={16} />
            Export CSV
          </button>
        </div>

        {/* Filter Row */}
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search deployments..."
              className="w-full pl-10 pr-4 py-2 text-sm focus:outline-none text-slate-700 placeholder:text-slate-400"
            />
          </div>

          <div className="h-6 w-px bg-slate-200"></div>

          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 rounded-md text-sm text-slate-600">
            <LayoutGrid size={16} className="text-slate-400" />
            <span>All Services</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          <div className="h-6 w-px bg-slate-200"></div>

          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 rounded-md text-sm text-slate-800 font-medium">
            <div className="flex -space-x-1">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-500 border border-white"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300 border border-white"></div>
            </div>
            <span>All Statuses</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          <div className="h-6 w-px bg-slate-200"></div>

          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 rounded-md text-sm text-slate-600">
            <Calendar size={16} className="text-slate-400" />
            <span>Apr 2024</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          <div className="h-6 w-px bg-slate-200"></div>

          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-50 rounded-md text-sm text-slate-600">
            <Filter size={16} className="text-slate-400" />
            <span>Filters</span>
          </button>
        </div>

        <div className="text-sm text-slate-500 pt-1">
          <span className="font-semibold text-blue-600">6</span> Deployments in period; <span className="font-medium">10 - 20</span> last month • <span className="font-medium">33</span> total
        </div>
      </div>

      {/* Deployments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-1 group">
                  Deployment ID
                  <TrendingDown size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </th>
              <th className="px-6 py-3 font-medium">Service</th>
              <th className="px-6 py-3 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-1 group">
                  Version
                  <TrendingDown size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                </div>
              </th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-1 group">
                  Risk Score
                  <TrendingDown size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {deployments.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <span className="font-bold text-slate-700 text-lg mr-6">{item.id}</span>
                  <span className="text-slate-500">{item.service}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-medium text-slate-700">
                    {item.status === 'Safe' && <CheckCircle size={16} className="text-emerald-500 fill-emerald-100" />}
                    {item.status === 'Pending Analysis' && <LayoutGrid size={16} className="text-slate-400" />}
                    {item.status === 'Moderate Risk' && <FileSearch size={16} className="text-amber-500" />}
                    {item.status === 'Risky' && <AlertTriangle size={16} className="text-red-500" />}
                    {item.serviceId}
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 font-medium">{item.version}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-md w-fit text-xs font-semibold flex items-center gap-1.5 ${item.statusStyle}`}>
                    {item.status === 'Safe' && <CheckCircle size={14} />}
                    {item.status === 'Moderate Risk' && <AlertTriangle size={14} />}
                    {item.status === 'Risky' && <AlertTriangle size={14} />}
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1.5 rounded-full w-fit text-xs font-semibold flex items-center gap-1.5 ${item.riskStyle}`}>
                    {item.risk === 'Pending Analysis' && <Loader2 size={14} className="animate-spin" />}
                    {item.risk === 'Safe' && <CheckCircle size={14} />}
                    {item.risk === 'Moderate' && <AlertTriangle size={14} />}
                    {item.risk === 'High' && <AlertTriangle size={14} />}
                    {item.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-end gap-3 text-xs text-slate-500 font-medium">
          <span className="mr-2">1 - 6 of 34 &gt;</span>

          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>
            <ChevronDown size={14} className="rotate-90" />
          </button>

          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
              <MoreVertical size={14} className="rotate-90 text-slate-400" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-800 font-semibold shadow-sm">
              5
            </button>
          </div>

          <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
            <ChevronDown size={14} className="-rotate-90" />
          </button>
        </div>
      </div>

    </div>
  );
}