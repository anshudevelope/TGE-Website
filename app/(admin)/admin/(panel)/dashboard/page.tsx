"use client";

import React, { useState } from "react";
import { Trash2, CheckSquare, Square, MinusSquare, RefreshCw, Phone, Mail, MapPin, ListFilter, ArrowDownUp } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { LEAD_STATUSES, LEAD_QUERY_TYPES } from "@/lib/adminOptions";
import { useAdminList, useDebouncedValue } from "@/components/admin/useAdminList";
import { useConfirm, useToast } from "@/components/admin/AdminFeedback";
import { StatusTabs, StatusSelect, LEAD_STATUS_TONES } from "@/components/admin/StatusControls";
import Dropdown from "@/components/admin/Dropdown";
import SearchField from "@/components/admin/SearchField";
import Pagination from "@/components/admin/Pagination";

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

const REQUIREMENT_OPTIONS = [
    { value: "", label: "All requirements" },
    ...LEAD_QUERY_TYPES.map((t) => ({ value: t, label: t })),
];

const SORT_OPTIONS = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
];

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function AdminLeadsPage() {
    const confirm = useConfirm();
    const notify = useToast();

    const [status, setStatus] = useState("");
    const [queryType, setQueryType] = useState("");
    const [sort, setSort] = useState("newest");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [busyIds, setBusyIds] = useState<string[]>([]);

    const debouncedSearch = useDebouncedValue(search.trim());

    const { items: leads, pagination, counts, error, isLoading, reload, setItems } = useAdminList<Lead>(
        "/api/leads",
        { page, limit, status, queryType, sort, search: debouncedSearch }
    );

    // Any filter change starts again from page 1 with nothing selected
    const updateFilter = <T,>(setter: (v: T) => void) => (value: T) => {
        setter(value);
        setPage(1);
        setSelectedIds([]);
    };

    const goToPage = (next: number) => {
        setPage(next);
        setSelectedIds([]);
    };

    const hasFilters = Boolean(status || queryType || search || sort !== "newest");
    const clearFilters = () => {
        setStatus("");
        setQueryType("");
        setSearch("");
        setSort("newest");
        setPage(1);
        setSelectedIds([]);
    };

    const markBusy = (ids: string[], busy: boolean) =>
        setBusyIds((prev) => (busy ? [...prev, ...ids] : prev.filter((id) => !ids.includes(id))));

    // Status change (confirmed)
    const handleStatusChange = async (lead: Lead, newStatus: string) => {
        const ok = await confirm({
            title: `Mark this lead as ${newStatus}?`,
            description: (
                <>
                    <span className="text-slate-200 font-semibold">{lead.name}</span> will move from {lead.status} to {newStatus}.
                </>
            ),
            confirmLabel: `Mark as ${newStatus}`,
        });
        if (!ok) return;

        markBusy([lead._id], true);
        try {
            const res = await fetch(`/api/leads/${lead._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setItems((prev) => prev.map((l) => (l._id === lead._id ? { ...l, status: newStatus } : l)));
            notify(`${lead.name} marked as ${newStatus}`);
            reload(); // refresh counts and the current filter
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't update the status. Try again.", "error");
        } finally {
            markBusy([lead._id], false);
        }
    };

    // Delete single lead (confirmed)
    const handleDelete = async (lead: Lead) => {
        const ok = await confirm({
            title: "Delete this lead?",
            description: (
                <>
                    The enquiry from <span className="text-slate-200 font-semibold">{lead.name}</span> ({lead.phone}) will be
                    removed permanently. This can&apos;t be undone.
                </>
            ),
            confirmLabel: "Delete lead",
            tone: "danger",
        });
        if (!ok) return;

        markBusy([lead._id], true);
        try {
            const res = await fetch(`/api/leads/${lead._id}`, { method: "DELETE" });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setSelectedIds((prev) => prev.filter((id) => id !== lead._id));
            notify("Lead deleted");
            reload();
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't delete the lead. Try again.", "error");
        } finally {
            markBusy([lead._id], false);
        }
    };

    // Bulk delete (confirmed)
    const handleBulkDelete = async () => {
        const count = selectedIds.length;
        if (count === 0) return;

        const ok = await confirm({
            title: `Delete ${count} ${count === 1 ? "lead" : "leads"}?`,
            description: "The selected enquiries will be removed permanently. This can't be undone.",
            confirmLabel: `Delete ${count} ${count === 1 ? "lead" : "leads"}`,
            tone: "danger",
        });
        if (!ok) return;

        const ids = [...selectedIds];
        markBusy(ids, true);
        try {
            const res = await fetch("/api/leads", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setSelectedIds([]);
            notify(`${data.deletedCount} ${data.deletedCount === 1 ? "lead" : "leads"} deleted`);
            // Step back a page if this one is now empty
            if (ids.length === leads.length && page > 1) setPage(page - 1);
            else reload();
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't delete the leads. Try again.", "error");
        } finally {
            markBusy(ids, false);
        }
    };

    const allSelected = leads.length > 0 && selectedIds.length === leads.length;
    const someSelected = selectedIds.length > 0 && !allSelected;

    const toggleSelectAll = () => setSelectedIds(allSelected ? [] : leads.map((l) => l._id));
    const toggleSelectOne = (id: string) =>
        setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

    const showInitialLoading = isLoading && !pagination;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-white tracking-tight">Leads</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Enquiries from the website forms. Update each one as you follow up.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {selectedIds.length > 0 && (
                        <button
                            type="button"
                            onClick={handleBulkDelete}
                            className="flex items-center gap-2 h-10 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            <Trash2 className="w-4 h-4" aria-hidden="true" />
                            <span>Delete {selectedIds.length} selected</span>
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={reload}
                        className="flex items-center gap-2 h-10 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                        <RefreshCw className={cn("w-4 h-4", isLoading && "animate-spin")} aria-hidden="true" />
                        <span>Refresh</span>
                    </button>
                </div>
            </div>

            {/* Status tabs */}
            <StatusTabs
                label="Filter by status"
                statuses={LEAD_STATUSES}
                counts={counts}
                value={status}
                onChange={updateFilter(setStatus)}
            />

            {/* Search & filters */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_auto_auto] gap-3">
                <SearchField
                    value={search}
                    onChange={updateFilter(setSearch)}
                    label="Search leads"
                    placeholder="Search name, phone, email or city"
                />
                <Dropdown
                    value={queryType}
                    onChange={updateFilter(setQueryType)}
                    label="Requirement"
                    options={REQUIREMENT_OPTIONS}
                    icon={<ListFilter className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />}
                    className="w-full md:w-64"
                    menuMinWidth={256}
                />
                <Dropdown
                    value={sort}
                    onChange={updateFilter(setSort)}
                    label="Sort"
                    options={SORT_OPTIONS}
                    icon={<ArrowDownUp className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />}
                    className="w-full md:w-44"
                />
                {hasFilters && (
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="h-10 px-3 rounded-xl text-sm font-semibold text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                        Clear filters
                    </button>
                )}
            </div>

            {/* Leads table */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                                <th scope="col" className="py-3.5 px-4 w-12">
                                    <button
                                        type="button"
                                        onClick={toggleSelectAll}
                                        disabled={leads.length === 0}
                                        aria-label={allSelected ? "Deselect all on this page" : "Select all on this page"}
                                        className="flex items-center p-1 -m-1 rounded text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                    >
                                        {allSelected ? (
                                            <CheckSquare className="w-4 h-4 text-amber-500" />
                                        ) : someSelected ? (
                                            <MinusSquare className="w-4 h-4 text-amber-500" />
                                        ) : (
                                            <Square className="w-4 h-4" />
                                        )}
                                    </button>
                                </th>
                                <th scope="col" className="py-3.5 px-4">Client</th>
                                <th scope="col" className="py-3.5 px-4">Requirement</th>
                                <th scope="col" className="py-3.5 px-4">City</th>
                                <th scope="col" className="py-3.5 px-4 hidden xl:table-cell">Message</th>
                                <th scope="col" className="py-3.5 px-4 hidden xl:table-cell">Received</th>
                                <th scope="col" className="py-3.5 px-4">Status</th>
                                <th scope="col" className="py-3.5 px-4 text-right"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody
                            className={cn(
                                "divide-y divide-slate-800/70 text-sm transition-opacity",
                                isLoading && !showInitialLoading && "opacity-50"
                            )}
                            aria-busy={isLoading}
                        >
                            {showInitialLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i}>
                                        <td colSpan={8} className="py-4 px-4">
                                            <div className="h-10 rounded-lg bg-slate-800/60 animate-pulse motion-reduce:animate-none" />
                                        </td>
                                    </tr>
                                ))
                            ) : error ? (
                                <tr>
                                    <td colSpan={8} className="py-14 px-4 text-center">
                                        <p className="text-rose-300 font-semibold">{error}</p>
                                        <button
                                            type="button"
                                            onClick={reload}
                                            className="mt-3 text-sm font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                                        >
                                            Try again
                                        </button>
                                    </td>
                                </tr>
                            ) : leads.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="py-14 px-4 text-center">
                                        <p className="text-white font-semibold">
                                            {hasFilters ? "No leads match these filters" : "No leads yet"}
                                        </p>
                                        <p className="text-slate-400 mt-1">
                                            {hasFilters
                                                ? "Try a different status or search term."
                                                : "New enquiries from the website will show up here."}
                                        </p>
                                        {hasFilters && (
                                            <button
                                                type="button"
                                                onClick={clearFilters}
                                                className="mt-3 text-sm font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
                                            >
                                                Clear filters
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead) => {
                                    const isSelected = selectedIds.includes(lead._id);
                                    const isBusy = busyIds.includes(lead._id);
                                    return (
                                        <tr
                                            key={lead._id}
                                            className={cn(
                                                "transition-colors",
                                                isSelected ? "bg-amber-500/5" : "hover:bg-slate-800/40",
                                                isBusy && "opacity-50 pointer-events-none"
                                            )}
                                        >
                                            <td className="py-4 px-4 align-top">
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSelectOne(lead._id)}
                                                    aria-label={`Select ${lead.name}`}
                                                    aria-pressed={isSelected}
                                                    className="p-1 -m-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                                >
                                                    {isSelected ? (
                                                        <CheckSquare className="w-4 h-4 text-amber-500" />
                                                    ) : (
                                                        <Square className="w-4 h-4 text-slate-600" />
                                                    )}
                                                </button>
                                            </td>
                                            <td className="py-4 px-4 align-top space-y-1">
                                                <p className="font-bold text-white">{lead.name}</p>
                                                <div className="flex flex-col gap-0.5 text-xs text-slate-400">
                                                    <a href={`tel:${lead.phone}`} className="inline-flex items-center gap-1.5 hover:text-white w-fit">
                                                        <Phone className="w-3 h-3 text-emerald-400" aria-hidden="true" /> {lead.phone}
                                                    </a>
                                                    {lead.email && (
                                                        <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-1.5 hover:text-white w-fit">
                                                            <Mail className="w-3 h-3 text-amber-400" aria-hidden="true" /> {lead.email}
                                                        </a>
                                                    )}
                                                </div>
                                                {lead.message && (
                                                    <p className="xl:hidden text-xs text-slate-500 line-clamp-2 max-w-64" title={lead.message}>
                                                        {lead.message}
                                                    </p>
                                                )}
                                            </td>
                                            <td className="py-4 px-4 align-top">
                                                <span className="inline-block px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold rounded-lg text-xs">
                                                    {lead.queryType}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 align-top text-slate-300">
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" /> {lead.city}
                                                </span>
                                            </td>
                                            <td className="py-4 px-4 align-top text-slate-400 max-w-xs hidden xl:table-cell">
                                                <p className="line-clamp-2" title={lead.message}>{lead.message || "—"}</p>
                                            </td>
                                            <td className="py-4 px-4 align-top text-slate-400 whitespace-nowrap tabular-nums hidden xl:table-cell">
                                                {formatDate(lead.createdAt)}
                                            </td>
                                            <td className="py-4 px-4 align-top">
                                                <StatusSelect
                                                    value={lead.status}
                                                    statuses={LEAD_STATUSES}
                                                    tones={LEAD_STATUS_TONES}
                                                    onChange={(s) => handleStatusChange(lead, s)}
                                                    label={`Status for ${lead.name}`}
                                                />
                                            </td>
                                            <td className="py-4 px-4 align-top text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(lead)}
                                                    aria-label={`Delete lead from ${lead.name}`}
                                                    className="p-2 rounded-lg text-slate-500 hover:bg-rose-600/15 hover:text-rose-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
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

                {pagination && pagination.total > 0 && (
                    <Pagination
                        pagination={pagination}
                        onPageChange={goToPage}
                        onLimitChange={updateFilter(setLimit)}
                        itemLabel={pagination.total === 1 ? "lead" : "leads"}
                    />
                )}
            </div>
        </div>
    );
}
