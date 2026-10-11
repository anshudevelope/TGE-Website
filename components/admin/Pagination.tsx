"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/app/lib/utils";
import type { PaginationInfo } from "./useAdminList";
import Dropdown from "./Dropdown";

const PAGE_SIZES = [10, 20, 50];

// Page numbers to show, with "gap" markers, e.g. 1 … 4 5 6 … 12
function pageWindow(current: number, total: number): (number | "gap")[] {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages = new Set([1, total, current - 1, current, current + 1]);
    const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

    const result: (number | "gap")[] = [];
    sorted.forEach((page, i) => {
        if (i > 0 && page - sorted[i - 1] > 1) result.push("gap");
        result.push(page);
    });
    return result;
}

export default function Pagination({
    pagination,
    onPageChange,
    onLimitChange,
    itemLabel,
}: {
    pagination: PaginationInfo;
    onPageChange: (page: number) => void;
    onLimitChange: (limit: number) => void;
    itemLabel: string;
}) {
    const { page, limit, total, totalPages } = pagination;
    const from = total === 0 ? 0 : (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);

    const buttonBase =
        "inline-flex items-center justify-center h-9 min-w-9 px-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500";

    return (
        <nav
            aria-label="Pagination"
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 border-t border-slate-800"
        >
            <div className="flex items-center gap-3 text-sm text-slate-400">
                <p className="tabular-nums">
                    {from}–{to} of {total} {itemLabel}
                </p>
                <div className="flex items-center gap-2">
                    <span className="hidden sm:inline" aria-hidden="true">Rows</span>
                    <Dropdown
                        value={String(limit)}
                        label="Rows per page"
                        onChange={(v) => onLimitChange(Number(v))}
                        menuMinWidth={88}
                        options={PAGE_SIZES.map((size) => ({ value: String(size), label: String(size) }))}
                        className="h-8 w-20 px-2.5 rounded-lg tabular-nums"
                    />
                </div>
            </div>

            <div className="flex items-center gap-1">
                <button
                    type="button"
                    onClick={() => onPageChange(page - 1)}
                    disabled={page <= 1}
                    aria-label="Previous page"
                    className={cn(buttonBase, "text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent")}
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {pageWindow(page, totalPages).map((item, i) =>
                    item === "gap" ? (
                        <span key={`gap-${i}`} className="px-1 text-slate-600" aria-hidden="true">
                            …
                        </span>
                    ) : (
                        <button
                            key={item}
                            type="button"
                            onClick={() => onPageChange(item)}
                            aria-current={item === page ? "page" : undefined}
                            aria-label={`Page ${item}`}
                            className={cn(
                                buttonBase,
                                "tabular-nums",
                                item === page
                                    ? "bg-amber-500 text-slate-950"
                                    : "text-slate-300 hover:bg-slate-800"
                            )}
                        >
                            {item}
                        </button>
                    )
                )}

                <button
                    type="button"
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages}
                    aria-label="Next page"
                    className={cn(buttonBase, "text-slate-300 hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent")}
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </nav>
    );
}
