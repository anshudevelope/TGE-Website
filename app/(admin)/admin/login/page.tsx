"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        // Static credentials check
        setTimeout(() => {
            if (username === "admin" && password === "empire@2026") {
                // Set a simple auth cookie expiring in 1 day
                document.cookie = "tge_admin_auth=true; path=/; max-age=86400; SameSite=Strict";
                router.push("/admin/dashboard");
            } else {
                setError("Invalid username or password. Please try again.");
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden text-slate-100">
            {/* Background glow effects */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">

                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
                        <ShieldCheck className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl font-black text-white tracking-tight">
                        Admin Portal
                    </h1>
                    <p className="text-xs text-slate-400">
                        The Great Empire Group • Prayagraj Management
                    </p>
                </div>

                {/* Error message */}
                {error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Username
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                                <User className="w-4 h-4" />
                            </span>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter admin username"
                                className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                                <Lock className="w-4 h-4" />
                            </span>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Authenticating...</span>
                            </>
                        ) : (
                            <span>Secure Login</span>
                        )}
                    </button>
                </form>

                <div className="pt-4 border-t border-slate-800 text-center">
                    <p className="text-[11px] text-slate-500">
                        Protected area. Unauthorized access is strictly monitored.
                    </p>
                </div>

            </div>
        </div>
    );
}