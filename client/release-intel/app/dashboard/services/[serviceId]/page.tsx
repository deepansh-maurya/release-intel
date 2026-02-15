"use client";

import {
    CheckCircle,
    AlertTriangle,
    Clock,
    MoreHorizontal,
    ChevronDown,
    Flame,
    Filter,
    Activity,
    ArrowRight,
    TrendingUp,
    FileText
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Legend
} from 'recharts';
import { useParams } from "next/navigation";

// Mock Data for chart
const impactData = [
    { time: '9:30', baseline: 342, canary: 342 },
    { time: '9:35', baseline: 345, canary: 344 },
    { time: '9:40', baseline: 348, canary: 352 },
    { time: '9:45', baseline: 347, canary: 353 }, // Deploy happened around here
    { time: '9:50', baseline: 346, canary: 315 },
    { time: '9:55', baseline: 348, canary: 312 },
    { time: '10:00', baseline: 345, canary: 314 },
];

const deployments = [
    {
        status: 'Pending Analysis',
        date: 'Apr 25, 2024 at 9:45 AM',
        version: 'v 2.5.4',
        user: 'John Doe',
        icon: FileText,
        color: 'bg-slate-100 text-slate-500',
        borderColor: 'border-l-4 border-l-slate-400'
    },
    {
        status: 'Safe',
        date: 'Apr 23, 2024 at 10:25 AM',
        version: 'v 2.5.3',
        user: 'John Doe',
        icon: CheckCircle,
        color: 'bg-emerald-50 text-emerald-600',
        borderColor: 'border-l-4 border-l-emerald-500'
    },
    {
        status: 'Moderate Risk',
        date: 'Apr 23, 2024 at 8:37 AM',
        version: 'v 2.5.3',
        user: 'John Doe',
        icon: AlertTriangle,
        color: 'bg-amber-50 text-amber-600',
        borderColor: 'border-l-4 border-l-amber-500'
    },
    {
        status: 'Risky',
        date: 'Apr 23, 2024 at 8:34 AM',
        version: 'v 2.5.3',
        user: 'John Doe',
        icon: AlertTriangle,
        color: 'bg-red-50 text-red-600',
        borderColor: 'border-l-4 border-l-red-500'
    },
];

export default function ServiceDetailPage() {
    const params = useParams();
    const serviceId = params?.serviceId || 'frontend-service';

    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            {/* Width constrained container to match design image centering */}

            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-slate-500 mb-4">
                <span>Dashboard</span>
                <span className="mx-2">/</span>
                <span>Services</span>
                <span className="mx-2">/</span>
                <span className="font-medium text-slate-800">{serviceId}</span>
            </div>

            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-slate-900">{serviceId}</h1>
                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <CheckCircle size={12} /> Healthy
                        </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5 hover:text-slate-700 cursor-pointer">
                            <Flame size={14} className="text-orange-500" /> Prometheus
                        </div>
                        <div className="w-px h-3 bg-slate-300"></div>
                        <div className="flex items-center gap-1.5 hover:text-slate-700 cursor-pointer">
                            <Filter size={14} className="text-blue-500" /> Fluent Bit
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                        Actions <ChevronDown size={14} />
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm shadow-blue-200">
                        Record Deployment
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200 mt-6">
                <div className="flex gap-8">
                    <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">Overview</button>
                    <button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm">Settings</button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

                {/* Left Column: Deployment History */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-0 overflow-hidden h-fit">
                    <div className="p-4 border-b border-slate-100">
                        <h2 className="font-semibold text-slate-800">Deployment History</h2>
                    </div>

                    <div className="p-4 space-y-4">
                        {deployments.map((deploy, index) => (
                            <div key={index} className="flex gap-3 relative pb-6 last:pb-0">
                                {/* Timeline line */}
                                {index !== deployments.length - 1 && (
                                    <div className="absolute left-[5px] top-3 bottom-0 w-px bg-slate-200 -z-10"></div>
                                )}

                                {/* Timeline dot */}
                                <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 flex-shrink-0 z-10 border-2 border-white box-content"></div>

                                {/* Card */}
                                <div className={`flex-1 rounded-lg border border-slate-100 p-3 ${deploy.borderColor} ${deploy.color} bg-opacity-10 border-opacity-50`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="flex items-center gap-2">
                                            <deploy.icon size={16} />
                                            <span className="font-medium text-sm">{deploy.status}</span>
                                        </div>
                                        <button className="text-slate-400 hover:text-slate-600">
                                            <MoreHorizontal size={16} />
                                        </button>
                                    </div>

                                    <p className="text-xs text-slate-500 mb-3">{deploy.date}</p>

                                    <div className="flex items-center justify-between text-xs text-slate-600 border-t border-slate-200/50 pt-2 mt-2">
                                        <span className="font-semibold">{deploy.version}</span>
                                        <span className="text-slate-400">deployed by {deploy.user}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Pagination dots */}
                        <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
                                1 - 5 of 34 <ChevronDown size={12} className="-rotate-90" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Stats & Charts */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Service Health Stats */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-semibold text-slate-800">Service Health</h2>
                            <button className="text-slate-400 hover:text-slate-600">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border-r border-slate-100 last:border-0 pr-6">
                                <p className="text-sm text-slate-500 mb-1">Error Rate</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-slate-900">0.25%</span>
                                </div>
                                <span className="text-xs text-red-500 font-medium">+0.05%</span>
                            </div>

                            <div className="border-r border-slate-100 last:border-0 pr-6">
                                <p className="text-sm text-slate-500 mb-1">Traffic Volume</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-slate-900">4.2K</span>
                                    <span className="text-sm text-slate-400">RPM</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500 mb-1">Latency</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-slate-900">312ms</span>
                                    <span className="text-xs text-emerald-500 font-medium flex items-center">
                                        <TrendingUp size={12} className="mr-0.5" /> 15ms
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deployment Impact Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <div className="mb-6">
                            <h2 className="font-semibold text-slate-800">Deployment Impact: <span className="font-normal text-slate-500">Comparing Baseline vs. Canary</span></h2>
                        </div>

                        <div className="h-64 w-full relative">

                            {/* Custom Legend Overlay */}
                            <div className="absolute right-4 top-0 bg-white/90 p-2 rounded border border-slate-100 shadow-sm z-10 text-xs">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="font-medium text-slate-700">348ms</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="font-medium text-slate-700">312ms</span>
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={impactData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorCanary" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="time"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        domain={['dataMin - 10', 'dataMax + 10']}
                                    />
                                    <Tooltip />

                                    <ReferenceLine x="9:45" stroke="#94a3b8" strokeDasharray="3 3" label={{ value: 'Deploy', position: 'bottom', fill: '#64748b', fontSize: 12 }} />

                                    {/* Annotations for Windows */}
                                    <ReferenceLine x="9:30" stroke="transparent" label={{ value: 'Baseline Window', position: 'top', fill: '#94a3b8', fontSize: 12 }} />
                                    <ReferenceLine x="9:55" stroke="transparent" label={{ value: 'Canary Window', position: 'top', fill: '#94a3b8', fontSize: 12 }} />

                                    <Area
                                        type="monotone"
                                        dataKey="baseline"
                                        stroke="#3b82f6"
                                        fillOpacity={1}
                                        fill="url(#colorBaseline)"
                                        strokeWidth={2}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="canary"
                                        stroke="#10b981"
                                        fillOpacity={1}
                                        fill="url(#colorCanary)"
                                        strokeWidth={2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-1">
                                View Deployment Details <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
