"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Users, Building2, ExternalLink, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navItems = [
    { href: "/admin/dashboard", label: "Leads", icon: Users },
    { href: "/admin/listings", label: "Property listings", icon: Building2 },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape and lock page scroll while the drawer is open
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleLogout = () => {
        document.cookie = "tge_admin_auth=; path=/; max-age=0;";
        router.push("/admin/login");
    };

    const activeItem = navItems.find((item) => pathname.startsWith(item.href));

    return (
        <>
            {/* Mobile top bar */}
            <header className="lg:hidden sticky top-0 z-30 flex items-center justify-between gap-3 h-14 px-4 bg-slate-900/95 backdrop-blur border-b border-slate-800">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open navigation"
                    aria-expanded={isOpen}
                    aria-controls="admin-sidebar"
                    className="-ml-2 p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <p className="flex-1 text-sm font-bold text-white truncate">
                    {activeItem?.label ?? "Admin"}
                </p>
            </header>

            {/* Backdrop for mobile drawer */}
            <div
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
                className={cn(
                    "lg:hidden fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-200",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            />

            {/* Sidebar */}
            <aside
                id="admin-sidebar"
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-slate-900 border-r border-slate-800",
                    "transition-transform duration-200 ease-out motion-reduce:transition-none",
                    isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                {/* Brand */}
                <div className="flex items-center gap-3 h-16 px-5 border-b border-slate-800">
                    <Image
                        src="/tge-favicon.jpeg"
                        alt=""
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-lg object-cover ring-1 ring-amber-500/30"
                    />
                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-extrabold text-white leading-tight truncate">
                            The Great Empire
                        </p>
                        <p className="text-xs text-slate-400 leading-tight">Admin console</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close navigation"
                        className="lg:hidden -mr-2 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Primary navigation */}
                <nav aria-label="Admin" className="flex-1 overflow-y-auto px-3 py-5">
                    <ul className="space-y-1">
                        {navItems.map(({ href, label, icon: Icon }) => {
                            const isActive = pathname.startsWith(href);
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        aria-current={isActive ? "page" : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                                            isActive
                                                ? "bg-amber-500/10 text-amber-300"
                                                : "text-slate-400 hover:text-white hover:bg-slate-800/70"
                                        )}
                                    >
                                        {isActive && (
                                            <span
                                                aria-hidden="true"
                                                className="absolute -left-3 top-1.5 bottom-1.5 w-1 rounded-r-full bg-amber-500"
                                            />
                                        )}
                                        <Icon className="w-4.5 h-4.5 shrink-0" aria-hidden="true" />
                                        <span>{label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer actions */}
                <div className="px-3 py-4 border-t border-slate-800 space-y-1">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                        <ExternalLink className="w-4.5 h-4.5 shrink-0" aria-hidden="true" />
                        <span>View website</span>
                    </a>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                    >
                        <LogOut className="w-4.5 h-4.5 shrink-0" aria-hidden="true" />
                        <span>Log out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
