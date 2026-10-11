"use client";

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { cn } from "@/app/lib/utils";

type ConfirmTone = "danger" | "default";

interface ConfirmOptions {
    title: string;
    description?: React.ReactNode;
    confirmLabel: string;
    cancelLabel?: string;
    tone?: ConfirmTone;
}

type ToastTone = "success" | "error";

interface Toast {
    id: number;
    message: string;
    tone: ToastTone;
}

interface AdminFeedbackContextValue {
    confirm: (options: ConfirmOptions) => Promise<boolean>;
    notify: (message: string, tone?: ToastTone) => void;
}

const AdminFeedbackContext = createContext<AdminFeedbackContextValue | null>(null);

export function useConfirm() {
    const ctx = useContext(AdminFeedbackContext);
    if (!ctx) throw new Error("useConfirm must be used inside AdminFeedbackProvider");
    return ctx.confirm;
}

export function useToast() {
    const ctx = useContext(AdminFeedbackContext);
    if (!ctx) throw new Error("useToast must be used inside AdminFeedbackProvider");
    return ctx.notify;
}

export function AdminFeedbackProvider({ children }: { children: React.ReactNode }) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [request, setRequest] = useState<{
        options: ConfirmOptions;
        resolve: (result: boolean) => void;
    } | null>(null);
    const [toasts, setToasts] = useState<Toast[]>([]);

    const confirm = useCallback(
        (options: ConfirmOptions) =>
            new Promise<boolean>((resolve) => setRequest({ options, resolve })),
        []
    );

    const dismissToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const notify = useCallback(
        (message: string, tone: ToastTone = "success") => {
            const id = Date.now() + Math.random();
            setToasts((prev) => [...prev.slice(-2), { id, message, tone }]);
            setTimeout(() => dismissToast(id), 4000);
        },
        [dismissToast]
    );

    // Open the native modal dialog (focus trap, Escape, top layer) when a request arrives
    useEffect(() => {
        if (request && !dialogRef.current?.open) dialogRef.current?.showModal();
    }, [request]);

    const settle = (result: boolean) => {
        request?.resolve(result);
        setRequest(null);
        dialogRef.current?.close();
    };

    const options = request?.options;
    const isDanger = options?.tone === "danger";

    return (
        <AdminFeedbackContext.Provider value={{ confirm, notify }}>
            {children}

            <dialog
                ref={dialogRef}
                aria-labelledby="admin-confirm-title"
                aria-describedby={options?.description ? "admin-confirm-description" : undefined}
                onCancel={(e) => {
                    e.preventDefault();
                    settle(false);
                }}
                onClick={(e) => {
                    // Clicking the backdrop (the dialog element itself) cancels
                    if (e.target === e.currentTarget) settle(false);
                }}
                className="m-auto p-0 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-slate-900 text-slate-100 border border-slate-700 shadow-2xl backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm open:animate-[admin-dialog-in_160ms_ease-out] motion-reduce:open:animate-none"
            >
                {options && (
                    <div className="p-6">
                        <div className="flex gap-4">
                            <div
                                className={cn(
                                    "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
                                    isDanger ? "bg-rose-500/15 text-rose-300" : "bg-amber-500/15 text-amber-300"
                                )}
                                aria-hidden="true"
                            >
                                {isDanger ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
                            </div>
                            <div className="min-w-0 space-y-1.5">
                                <h2 id="admin-confirm-title" className="text-base font-bold text-white">
                                    {options.title}
                                </h2>
                                {options.description && (
                                    <div id="admin-confirm-description" className="text-sm text-slate-400 leading-relaxed">
                                        {options.description}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
                            <button
                                type="button"
                                autoFocus
                                onClick={() => settle(false)}
                                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                            >
                                {options.cancelLabel ?? "Cancel"}
                            </button>
                            <button
                                type="button"
                                onClick={() => settle(true)}
                                className={cn(
                                    "px-4 py-2.5 rounded-xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
                                    isDanger
                                        ? "bg-rose-600 hover:bg-rose-500 text-white focus-visible:ring-rose-400"
                                        : "bg-amber-500 hover:bg-amber-400 text-slate-950 focus-visible:ring-amber-400"
                                )}
                            >
                                {options.confirmLabel}
                            </button>
                        </div>
                    </div>
                )}
            </dialog>

            {/* Toasts */}
            <div
                aria-live="polite"
                className="fixed bottom-4 right-4 left-4 sm:left-auto z-[60] flex flex-col items-stretch sm:items-end gap-2 pointer-events-none"
            >
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        role={toast.tone === "error" ? "alert" : "status"}
                        className={cn(
                            "pointer-events-auto flex items-start gap-3 w-full sm:w-96 px-4 py-3 rounded-xl border shadow-xl bg-slate-900 text-sm",
                            toast.tone === "error" ? "border-rose-500/40" : "border-emerald-500/40"
                        )}
                    >
                        {toast.tone === "error" ? (
                            <XCircle className="w-5 h-5 shrink-0 text-rose-400" aria-hidden="true" />
                        ) : (
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" aria-hidden="true" />
                        )}
                        <p className="flex-1 text-slate-100">{toast.message}</p>
                        <button
                            type="button"
                            onClick={() => dismissToast(toast.id)}
                            aria-label="Dismiss"
                            className="-m-1 p-1 rounded-md text-slate-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </AdminFeedbackContext.Provider>
    );
}
