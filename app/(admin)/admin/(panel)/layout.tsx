import React from "react";
import "../admin.css";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { AdminFeedbackProvider } from "@/components/admin/AdminFeedback";

export default function AdminPanelLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminFeedbackProvider>
            <div className="min-h-screen bg-slate-950 text-slate-100">
                <AdminSidebar />
                <div className="lg:pl-64">
                    <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">{children}</main>
                </div>
            </div>
        </AdminFeedbackProvider>
    );
}
