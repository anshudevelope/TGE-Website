"use client";

import React from "react";
import { Search, X } from "lucide-react";

export default function SearchField({
    value,
    onChange,
    placeholder,
    label,
}: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    label: string;
}) {
    return (
        <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" aria-hidden="true" />
            <input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                aria-label={label}
                className="w-full h-10 pl-10 pr-9 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 hover:border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 [&::-webkit-search-cancel-button]:hidden"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}
