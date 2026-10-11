"use client";

import React from "react";
import { cn } from "@/app/lib/utils";
import Dropdown from "./Dropdown";

export type StatusTones = Record<string, { pill: string; dot: string }>;

export const LEAD_STATUS_TONES: StatusTones = {
    New: { pill: "bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400/60", dot: "bg-sky-400" },
    Contacted: { pill: "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400/60", dot: "bg-amber-400" },
    "In Progress": { pill: "bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400/60", dot: "bg-violet-400" },
    Converted: { pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/60", dot: "bg-emerald-400" },
    Closed: { pill: "bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500", dot: "bg-slate-500" },
};

export const LISTING_STATUS_TONES: StatusTones = {
    Pending: { pill: "bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400/60", dot: "bg-sky-400" },
    Verified: { pill: "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:border-amber-400/60", dot: "bg-amber-400" },
    Listed: { pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:border-emerald-400/60", dot: "bg-emerald-400" },
    Sold: { pill: "bg-violet-500/10 text-violet-300 border-violet-500/30 hover:border-violet-400/60", dot: "bg-violet-400" },
    Rejected: { pill: "bg-rose-500/10 text-rose-300 border-rose-500/30 hover:border-rose-400/60", dot: "bg-rose-400" },
};

// Row of status filters with live counts ("All" plus one per status)
export function StatusTabs({
    statuses,
    counts,
    value,
    onChange,
    label,
}: {
    statuses: readonly string[];
    counts: Record<string, number>;
    value: string;
    onChange: (status: string) => void;
    label: string;
}) {
    const tabs = [{ value: "", label: "All", count: counts.all }].concat(
        statuses.map((s) => ({ value: s, label: s, count: counts[s] }))
    );

    return (
        <div role="group" aria-label={label} className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
                const isActive = value === tab.value;
                return (
                    <button
                        key={tab.label}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onChange(tab.value)}
                        className={cn(
                            "inline-flex items-center gap-2 h-9 px-3.5 rounded-lg border text-sm font-semibold transition-colors",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                            isActive
                                ? "bg-amber-500 border-amber-500 text-slate-950"
                                : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white"
                        )}
                    >
                        <span>{tab.label}</span>
                        <span
                            className={cn(
                                "min-w-6 px-1.5 rounded-md text-xs tabular-nums",
                                isActive ? "bg-slate-950/15" : "bg-slate-800 text-slate-400"
                            )}
                        >
                            {tab.count ?? 0}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

// Inline status picker for a table row, coloured by the current status
export function StatusSelect({
    value,
    statuses,
    tones,
    onChange,
    label,
}: {
    value: string;
    statuses: readonly string[];
    tones: StatusTones;
    onChange: (status: string) => void;
    label: string;
}) {
    return (
        <Dropdown
            value={value}
            label={label}
            onChange={onChange}
            menuMinWidth={168}
            options={statuses.map((s) => ({ value: s, label: s, dotClassName: tones[s]?.dot }))}
            className={cn(
                "h-8 w-36 px-2.5 rounded-lg text-xs font-bold",
                tones[value]?.pill ?? "bg-slate-800 text-slate-300 border-slate-700"
            )}
        />
    );
}
