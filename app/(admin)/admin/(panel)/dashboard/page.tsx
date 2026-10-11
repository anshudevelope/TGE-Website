"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Users,
    Trash2,
    CheckSquare,
    Square,
    LogOut,
    RefreshCw,
    Search,
    Filter,
    Phone,
    Mail,
    MapPin,
    Building,
} from "lucide-react";

interface Lead {
    _id: string;
    name: string;
    city: string;
    phone: string;
    email?: string;
    queryType: string;
    message?: string;
    status: string;
    createdAt: string;
}

export default function AdminDashboardPage() {
    const router = useRouter();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [statusFilter, setStatusFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch Leads on Load
    const fetchLeads = async () => {
        setIsLoading(true);
        try {
            const url = statusFilter ? `/api/leads?status=${statusFilter}` : "/api/leads";
            const res = await fetch(url);
            const data = await res.json();
            if (data.success) {
                setLeads(data.data);
            }
        } catch (err) {
            console.error("Failed to fetch leads:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, [statusFilter]);

    // Handle Logout
    const handleLogout = () => {
        document.cookie = "tge_admin_auth=; path=/; max-age=0;";
        router.push("/admin/login");
    };

    // Status Change Handler
    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                setLeads((prev) =>
                    prev.map((lead) => (lead._id === id ? { ...lead, status: newStatus } : lead))
                );
            }
        } catch (err) {
            console.error("Failed to update status:", err);
        }
    };

    // Delete Single Lead
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this lead?")) return;
        try {
            const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                setLeads((prev) => prev.filter((lead) => lead._id !== id));
                setSelectedIds((prev) => prev.filter((item) => item !== id));
            }
        } catch (err) {
            console.error("Failed to delete lead:", err);
        }
    };

    // Bulk Delete
    const handleBulkDelete = async () => {
        if (selectedIds.length === 0) return;
        if (!confirm(`Are you sure you want to delete ${selectedIds.length} lead(s)?`)) return;

        try {
            const res = await fetch("/api/leads", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids: selectedIds }),
            });
            const data = await res.json();
            if (data.success) {
                setLeads((prev) => prev.filter((lead) => !selectedIds.includes(lead._id)));
                setSelectedIds([]);
            }
        } catch (err) {
            console.error("Failed to bulk delete:", err);
        }
    };

    // Toggle Selection
    const toggleSelectAll = () => {
        if (selectedIds.length === filteredLeads.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredLeads.map((l) => l._id));
        }
    };

    const toggleSelectOne = (id: string) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Filtered Leads
    const filteredLeads = leads.filter(
        (l) =>
            l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.phone.includes(searchQuery) ||
            l.queryType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

            {/* Top Navbar */}
            <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                        GE
                    </div>
                    <div>
                        <h1 className="text-base font-extrabold text-white">The Great Empire Group</h1>
                        <p className="text-xs text-slate-400">Admin Control Center • Prayagraj</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-rose-600/20 hover:text-rose-400 text-slate-300 text-xs font-bold transition-all border border-slate-700 hover:border-rose-500/40"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                </button>
            </header>

            {/* Main Container */}
            <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

                {/* Header Title & Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
                            <Users className="w-6 h-6 text-amber-500" />
                            <span>Lead & Inquiry Management</span>
                        </h2>
                        <p className="text-xs text-slate-400 mt-0.5">
                            Manage client valuation requests, plot bookings, and inquiries in real-time.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={fetchLeads}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-bold transition-all"
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
                            <span>Refresh</span>
                        </button>

                        {selectedIds.length > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-lg shadow-rose-600/20"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Delete Selected ({selectedIds.length})</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Filters & Search Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800 backdrop-blur-md">

                    {/* Search Box */}
                    <div className="sm:col-span-7 relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                            <Search className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by client name, phone or requirement..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="sm:col-span-5 relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                            <Filter className="w-4 h-4" />
                        </span>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            <option value="">All Statuses</option>
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Converted">Converted</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>

                </div>

                {/* Leads Table */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-950/80 border-b border-slate-800 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                                    <th className="py-4 px-4 w-10">
                                        <button onClick={toggleSelectAll} className="flex items-center text-slate-400 hover:text-white">
                                            {selectedIds.length > 0 && selectedIds.length === filteredLeads.length ? (
                                                <CheckSquare className="w-4 h-4 text-amber-500" />
                                            ) : (
                                                <Square className="w-4 h-4" />
                                            )}
                                        </button>
                                    </th>
                                    <th className="py-4 px-4">Client Details</th>
                                    <th className="py-4 px-4">Requirement</th>
                                    <th className="py-4 px-4">Locality / City</th>
                                    <th className="py-4 px-4">Message</th>
                                    <th className="py-4 px-4">Status</th>
                                    <th className="py-4 px-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan={7} className="py-12 text-center text-slate-500">
                                            Loading leads from database...
                                        </td>
                                    </tr>
                                ) : filteredLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-12 text-center text-slate-500">
                                            No leads found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredLeads.map((lead) => {
                                        const isSelected = selectedIds.includes(lead._id);
                                        return (
                                            <tr key={lead._id} className="hover:bg-slate-800/40 transition-colors">
                                                <td className="py-4 px-4">
                                                    <button onClick={() => toggleSelectOne(lead._id)}>
                                                        {isSelected ? (
                                                            <CheckSquare className="w-4 h-4 text-amber-500" />
                                                        ) : (
                                                            <Square className="w-4 h-4 text-slate-600" />
                                                        )}
                                                    </button>
                                                </td>
                                                <td className="py-4 px-4 space-y-0.5">
                                                    <p className="font-bold text-white">{lead.name}</p>
                                                    <div className="flex items-center gap-2 text-xs text-slate-400">
                                                        <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> {lead.phone}</span>
                                                        {lead.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-amber-400" /> {lead.email}</span>}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4">
                                                    <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold rounded-lg text-xs">
                                                        {lead.queryType}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-slate-300">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3.5 h-3.5 text-rose-400" /> {lead.city}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-4 text-slate-400 max-w-xs truncate">
                                                    {lead.message || "—"}
                                                </td>
                                                <td className="py-4 px-4">
                                                    <select
                                                        value={lead.status}
                                                        onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                                                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border outline-none cursor-pointer ${lead.status === "New"
                                                                ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                                                : lead.status === "Contacted"
                                                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                                                    : lead.status === "Converted"
                                                                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                                                        : "bg-slate-800 text-slate-400 border-slate-700"
                                                            }`}
                                                    >
                                                        <option value="New" className="bg-slate-900 text-white">New</option>
                                                        <option value="Contacted" className="bg-slate-900 text-white">Contacted</option>
                                                        <option value="In Progress" className="bg-slate-900 text-white">In Progress</option>
                                                        <option value="Converted" className="bg-slate-900 text-white">Converted</option>
                                                        <option value="Closed" className="bg-slate-900 text-white">Closed</option>
                                                    </select>
                                                </td>
                                                <td className="py-4 px-4 text-right">
                                                    <button
                                                        onClick={() => handleDelete(lead._id)}
                                                        className="p-2 rounded-lg bg-slate-800 hover:bg-rose-600/20 text-slate-400 hover:text-rose-400 transition-colors"
                                                        title="Delete Lead"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
}