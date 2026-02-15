"use client";

import { useRouter } from "next/navigation";
import {
  MoreHorizontal,
  Plus,
  ChevronDown,
  Building2,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  AlertTriangle
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const deploymentData = [
  { name: 'Mon', value: 3 },
  { name: 'Tue', value: 3.5 },
  { name: 'Wed', value: 3 },
  { name: 'Thu', value: 4 },
  { name: 'Fri', value: 3.5 },
  { name: 'Sat', value: 4.5 },
  { name: 'Sun', value: 5 },
];

const errorRateData = [
  { value: 40 }, { value: 35 }, { value: 45 }, { value: 30 }, { value: 50 }, { value: 45 }, { value: 60 }
];

const cpuData = [
  { value: 20 }, { value: 40 }, { value: 30 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 50 }
];

const latencyData = [
  { value: 300 }, { value: 350 }, { value: 320 }, { value: 400 }, { value: 380 }, { value: 450 }, { value: 420 }
];

const services = [
  { name: 'billing-service', status: 'Healthy', lastDep: 'Apr 23, 10:25 AM', deps: 23, risk: 'Safe' },
  { name: 'frontend-service', status: 'Moderate Risk', lastDep: 'Apr 23, 8:37 PM', deps: 23, risk: 'Low' },
  { name: 'auth-service', status: 'Low Risk', lastDep: 'Apr 23, 8:334 AM', deps: 23, risk: 'Moderate' },
  { name: 'api-gateway', status: 'At Risk', lastDep: 'Apr 23, 8:334 PM', deps: 23, risk: 'High' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    'Healthy': 'bg-emerald-100 text-emerald-700',
    'Moderate Risk': 'bg-amber-100 text-amber-700',
    'Low Risk': 'bg-yellow-100 text-yellow-700',
    'At Risk': 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${styles[status as keyof typeof styles] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
};

const RiskBadge = ({ risk }: { risk: string }) => {
  const styles = {
    'Safe': 'bg-emerald-500 text-white',
    'Low': 'bg-amber-500 text-white',
    'Moderate': 'bg-orange-500 text-white',
    'High': 'bg-red-500 text-white',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center w-fit ${styles[risk as keyof typeof styles]}`}>
      {/* Simple icon representation */}
      {risk === 'Safe' && <span className="mr-1">↻</span>}
      {risk !== 'Safe' && <span className="mr-1">⚠</span>}
      {risk}
    </span>
  );
};

const Sparkline = ({ data, color }: { data: any[], color: string }) => (
  <div className="h-10 w-24">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <Area type="monotone" dataKey="value" stroke={color} fill="none" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Deployments */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between">
          <div>
            <h3 className="text-slate-500 font-medium mb-1">Deployments</h3>
            <div className="flex items-center gap-2 mt-4">
              <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded">1w Daily</span>
              <span className="text-emerald-500 text-xs font-medium">+6 this week</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-3xl font-semibold text-slate-800">172</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
        </div>

        {/* Active Services */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
          <h3 className="text-slate-500 font-medium">Active Services</h3>
          <span className="text-3xl font-semibold text-slate-800">8</span>
        </div>

        {/* Org Name */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Building2 size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
              Org Name
              <span className="bg-slate-800 text-white text-[10px] px-1 py-0.5 rounded rotate-12">/</span>
            </h3>
            <p className="text-xs text-slate-400">workspace (You)</p>
          </div>
          <ChevronDown className="text-slate-400 w-5 h-5" />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Deployment Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Deployment Activity</h3>
              <p className="text-sm text-slate-400">Deployments This Week</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deploymentData}>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4, stroke: '#fff' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-50 flex justify-center">
            <button className="text-sm text-blue-600 font-medium flex items-center hover:underline">
              View All Deployments <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Right: Metrics Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-800">Metrics Summary</h3>
            <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
              View All Report ▾
            </button>
          </div>

          <div className="space-y-6">
            {/* Error Rate */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Error Rate</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-800">0.35%</span>
                </div>
                <span className="text-xs text-red-500 font-medium">+2.1%</span>
              </div>
              <Sparkline data={errorRateData} color="#ef4444" />
            </div>

            {/* CPU Usage */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">CPU Usage</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-800">42%</span>
                </div>
                <span className="text-xs text-red-500 font-medium">+5%</span>
              </div>
              <Sparkline data={cpuData} color="#eab308" />
            </div>

            {/* Latency */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Latency</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-800">378ms</span>
                </div>
              </div>
              <Sparkline data={latencyData} color="#10b981" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">Services</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
            Add Service <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Name ≡</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Last Deployment ▾</th>
                <th className="px-6 py-4 font-medium">Deployments ≡</th>
                <th className="px-6 py-4 font-medium">Risk Score</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {services.map((service) => (
                <tr
                  key={service.name}
                  onClick={() => router.push(`/dashboard/services/${service.name}`)}
                  className="hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4 font-semibold text-slate-800">{service.name}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={service.status} />
                  </td>
                  <td className="px-6 py-4 text-slate-500">{service.lastDep}</td>
                  <td className="px-6 py-4 text-slate-500">{service.deps}</td>
                  <td className="px-6 py-4">
                    <RiskBadge risk={service.risk} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-end gap-3 text-xs text-slate-500">
            <span>1 - 5 of 8</span>
            <div className="flex gap-1">
              <button className="p-1 rounded hover:bg-slate-200 disabled:opacity-50" disabled>
                <ChevronDown className="w-3 h-3 rotate-90" />
              </button>
              <button className="p-1 rounded hover:bg-slate-200">
                <span className="font-medium">1 - 6 - 8</span>
                <ChevronDown className="w-3 h-3 -rotate-90 inline ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}