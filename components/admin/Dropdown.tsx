"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";

export interface DropdownOption {
    value: string;
    label: string;
    dotClassName?: string; // optional coloured dot, e.g. for statuses
}

const OPTION_HEIGHT = 36;
const MENU_MAX_HEIGHT = 288;
const GAP = 6;

// Accessible custom select (button + listbox). The menu is portalled to <body>
// with fixed positioning so scroll containers like the tables can't clip it.
export default function Dropdown({
    value,
    options,
    onChange,
    label,
    icon,
    className,
    menuMinWidth = 180,
}: {
    value: string;
    options: DropdownOption[];
    onChange: (value: string) => void;
    label: string;
    icon?: React.ReactNode;
    className?: string;
    menuMinWidth?: number;
}) {
    const id = useId();
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [position, setPosition] = useState<React.CSSProperties>({});

    const selected = options.find((o) => o.value === value) ?? options[0];

    const open = () => {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const menuHeight = Math.min(options.length * OPTION_HEIGHT + 8, MENU_MAX_HEIGHT);
        const spaceBelow = window.innerHeight - rect.bottom;
        const openUp = spaceBelow < menuHeight + GAP && rect.top > spaceBelow;
        const width = Math.max(rect.width, menuMinWidth);
        const left = Math.min(rect.left, window.innerWidth - width - 8);

        setPosition({
            left: Math.max(8, left),
            width,
            ...(openUp
                ? { bottom: window.innerHeight - rect.top + GAP }
                : { top: rect.bottom + GAP }),
        });
        setActiveIndex(Math.max(0, options.findIndex((o) => o.value === value)));
        setIsOpen(true);
    };

    const close = (refocus = true) => {
        setIsOpen(false);
        if (refocus) triggerRef.current?.focus();
    };

    const choose = (index: number) => {
        const option = options[index];
        close();
        if (option && option.value !== value) onChange(option.value);
    };

    // Move focus into the menu when it opens
    useEffect(() => {
        if (isOpen) listRef.current?.focus();
    }, [isOpen]);

    // Close on outside press, scroll or resize while open
    useEffect(() => {
        if (!isOpen) return;

        const onPointerDown = (e: PointerEvent) => {
            const target = e.target as Node;
            if (!listRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
                setIsOpen(false);
            }
        };
        // Close only if the trigger actually moved, so layout shifts (e.g. a table
        // finishing loading) don't dismiss the menu the moment it opens
        const startRect = triggerRef.current?.getBoundingClientRect();
        const onScroll = (e: Event) => {
            if (listRef.current?.contains(e.target as Node)) return;
            const rect = triggerRef.current?.getBoundingClientRect();
            if (!rect || !startRect || Math.abs(rect.top - startRect.top) > 1 || Math.abs(rect.left - startRect.left) > 1) {
                setIsOpen(false);
            }
        };
        const onResize = () => setIsOpen(false);

        document.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("scroll", onScroll, true);
        window.addEventListener("resize", onResize);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("scroll", onScroll, true);
            window.removeEventListener("resize", onResize);
        };
    }, [isOpen]);

    // Keep the active option scrolled into view
    useEffect(() => {
        if (!isOpen) return;
        document.getElementById(`${id}-option-${activeIndex}`)?.scrollIntoView({ block: "nearest" });
    }, [isOpen, activeIndex, id]);

    const onTriggerKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            open();
        }
    };

    const onListKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setActiveIndex((i) => Math.min(options.length - 1, i + 1));
                break;
            case "ArrowUp":
                e.preventDefault();
                setActiveIndex((i) => Math.max(0, i - 1));
                break;
            case "Home":
                e.preventDefault();
                setActiveIndex(0);
                break;
            case "End":
                e.preventDefault();
                setActiveIndex(options.length - 1);
                break;
            case "Enter":
            case " ":
                e.preventDefault();
                choose(activeIndex);
                break;
            case "Escape":
                e.preventDefault();
                close();
                break;
            case "Tab":
                close(false);
                break;
        }
    };

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={isOpen ? `${id}-listbox` : undefined}
                aria-label={`${label}: ${selected?.label ?? ""}`}
                onClick={() => (isOpen ? close() : open())}
                onKeyDown={onTriggerKeyDown}
                className={cn(
                    "inline-flex items-center gap-2 h-10 px-3 rounded-xl border text-sm text-left cursor-pointer transition-colors",
                    "bg-slate-950 border-slate-800 text-slate-100 hover:border-slate-600",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                    isOpen && "border-slate-600",
                    className
                )}
            >
                {icon}
                {selected?.dotClassName && (
                    <span aria-hidden="true" className={cn("w-2 h-2 rounded-full shrink-0", selected.dotClassName)} />
                )}
                <span className="flex-1 truncate">{selected?.label}</span>
                <ChevronDown
                    aria-hidden="true"
                    className={cn("w-4 h-4 shrink-0 opacity-60 transition-transform", isOpen && "rotate-180")}
                />
            </button>

            {isOpen &&
                createPortal(
                    <ul
                        ref={listRef}
                        id={`${id}-listbox`}
                        role="listbox"
                        tabIndex={-1}
                        aria-label={label}
                        aria-activedescendant={`${id}-option-${activeIndex}`}
                        onKeyDown={onListKeyDown}
                        style={{ ...position, maxHeight: MENU_MAX_HEIGHT }}
                        className="fixed z-[70] overflow-y-auto p-1 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/40 focus:outline-none animate-[admin-menu-in_120ms_ease-out] motion-reduce:animate-none"
                    >
                        {options.map((option, index) => {
                            const isSelected = option.value === value;
                            const isActive = index === activeIndex;
                            return (
                                <li
                                    key={option.value}
                                    id={`${id}-option-${index}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    onPointerEnter={() => setActiveIndex(index)}
                                    onClick={() => choose(index)}
                                    className={cn(
                                        "flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-sm cursor-pointer select-none",
                                        isActive ? "bg-slate-800 text-white" : "text-slate-300",
                                        isSelected && "font-semibold text-white"
                                    )}
                                >
                                    {option.dotClassName && (
                                        <span aria-hidden="true" className={cn("w-2 h-2 rounded-full shrink-0", option.dotClassName)} />
                                    )}
                                    <span className="flex-1 truncate">{option.label}</span>
                                    {isSelected && <Check aria-hidden="true" className="w-4 h-4 shrink-0 text-amber-400" />}
                                </li>
                            );
                        })}
                    </ul>,
                    document.body
                )}
        </>
    );
}
