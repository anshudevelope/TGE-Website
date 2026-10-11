"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    Trash2,
    CheckSquare,
    Square,
    MinusSquare,
    RefreshCw,
    Phone,
    Mail,
    MapPin,
    ListFilter,
    ArrowDownUp,
    UserRound,
    Eye,
    ImageIcon,
    X,
} from "lucide-react";
import { cn } from "@/app/lib/utils";
import { LISTING_STATUSES, PROPERTY_TYPES, LISTING_USER_ROLES } from "@/lib/adminOptions";
import { useAdminList, useDebouncedValue } from "@/components/admin/useAdminList";
import { useConfirm, useToast } from "@/components/admin/AdminFeedback";
import { StatusTabs, StatusSelect, LISTING_STATUS_TONES } from "@/components/admin/StatusControls";
import Dropdown from "@/components/admin/Dropdown";
import SearchField from "@/components/admin/SearchField";
import Pagination from "@/components/admin/Pagination";

interface Listing {
    _id: string;
    yourName: string;
    mobileNumber: string;
    email?: string;
    userRole: string;
    propertyType: string;
    locality: string;
    areaSize: number;
    areaUnit: string;
    bedrooms?: string;
    expectedPrice: number;
    priceNegotiable: boolean;
    ownershipType?: string;
    propertyPhotos: string[];
    additionalDetails?: string;
    status: string;
    createdAt: string;
}

const TYPE_OPTIONS = [{ value: "", label: "All property types" }, ...PROPERTY_TYPES.map((t) => ({ value: t, label: t }))];
const ROLE_OPTIONS = [{ value: "", label: "Owners and agents" }, ...LISTING_USER_ROLES.map((r) => ({ value: r, label: r }))];
const SORT_OPTIONS = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
    { value: "price-high", label: "Price: high to low" },
    { value: "price-low", label: "Price: low to high" },
];

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const formatPrice = (value: number) => {
    if (value >= 10000000) return `₹${+(value / 10000000).toFixed(2)} Cr`;
    if (value >= 100000) return `₹${+(value / 100000).toFixed(2)} Lakh`;
    return `₹${value.toLocaleString("en-IN")}`;
};

const COLUMN_COUNT = 8;

export default function AdminListingsPage() {
    const confirm = useConfirm();
    const notify = useToast();

    const [status, setStatus] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [userRole, setUserRole] = useState("");
    const [sort, setSort] = useState("newest");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [busyIds, setBusyIds] = useState<string[]>([]);
    const [detailListing, setDetailListing] = useState<Listing | null>(null);
    const detailsDialogRef = useRef<HTMLDialogElement>(null);

    const debouncedSearch = useDebouncedValue(search.trim());

    const { items: listings, pagination, counts, error, isLoading, reload, setItems } = useAdminList<Listing>(
        "/api/list-property",
        { page, limit, status, propertyType, userRole, sort, search: debouncedSearch }
    );

    useEffect(() => {
        const dialog = detailsDialogRef.current;
        if (!dialog) return;

        if (detailListing && !dialog.open) dialog.showModal();
        else if (!detailListing && dialog.open) dialog.close();
    }, [detailListing]);

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

    const hasFilters = Boolean(status || propertyType || userRole || search || sort !== "newest");
    const clearFilters = () => {
        setStatus("");
        setPropertyType("");
        setUserRole("");
        setSearch("");
        setSort("newest");
        setPage(1);
        setSelectedIds([]);
    };

    const markBusy = (ids: string[], busy: boolean) =>
        setBusyIds((prev) => (busy ? [...prev, ...ids] : prev.filter((id) => !ids.includes(id))));

    // Status change (confirmed)
    const handleStatusChange = async (listing: Listing, newStatus: string) => {
        const ok = await confirm({
            title: `Mark this listing as ${newStatus}?`,
            description: (
                <>
                    <span className="text-slate-200 font-semibold">
                        {listing.propertyType} in {listing.locality}
                    </span>{" "}
                    will move from {listing.status} to {newStatus}.
                </>
            ),
            confirmLabel: `Mark as ${newStatus}`,
            tone: newStatus === "Rejected" ? "danger" : "default",
        });
        if (!ok) return;

        markBusy([listing._id], true);
        try {
            const res = await fetch(`/api/list-property/${listing._id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setItems((prev) => prev.map((l) => (l._id === listing._id ? { ...l, status: newStatus } : l)));
            notify(`Listing marked as ${newStatus}`);
            reload(); // refresh counts and the current filter
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't update the status. Try again.", "error");
        } finally {
            markBusy([listing._id], false);
        }
    };

    // Delete single listing (confirmed)
    const handleDelete = async (listing: Listing) => {
        const ok = await confirm({
            title: "Delete this listing?",
            description: (
                <>
                    The submission from <span className="text-slate-200 font-semibold">{listing.yourName}</span> for{" "}
                    {listing.propertyType} in {listing.locality} will be removed permanently. This can&apos;t be undone.
                </>
            ),
            confirmLabel: "Delete listing",
            tone: "danger",
        });
        if (!ok) return;

        markBusy([listing._id], true);
        try {
            const res = await fetch(`/api/list-property/${listing._id}`, { method: "DELETE" });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setSelectedIds((prev) => prev.filter((id) => id !== listing._id));
            notify("Listing deleted");
            reload();
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't delete the listing. Try again.", "error");
        } finally {
            markBusy([listing._id], false);
        }
    };

    // Bulk delete (confirmed)
    const handleBulkDelete = async () => {
        const count = selectedIds.length;
        if (count === 0) return;

        const noun = count === 1 ? "listing" : "listings";
        const ok = await confirm({
            title: `Delete ${count} ${noun}?`,
            description: "The selected submissions will be removed permanently. This can't be undone.",
            confirmLabel: `Delete ${count} ${noun}`,
            tone: "danger",
        });
        if (!ok) return;

        const ids = [...selectedIds];
        markBusy(ids, true);
        try {
            const res = await fetch("/api/list-property", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ids }),
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);

            setSelectedIds([]);
            notify(`${data.deletedCount} ${data.deletedCount === 1 ? "listing" : "listings"} deleted`);
            // Step back a page if this one is now empty
            if (ids.length === listings.length && page > 1) setPage(page - 1);
            else reload();
        } catch (err) {
            notify(err instanceof Error && err.message ? err.message : "Couldn't delete the listings. Try again.", "error");
        } finally {
            markBusy(ids, false);
        }
    };

    const allSelected = listings.length > 0 && selectedIds.length === listings.length;
    const someSelected = selectedIds.length > 0 && !allSelected;

    const toggleSelectAll = () => setSelectedIds(allSelected ? [] : listings.map((l) => l._id));
    const toggleSelectOne = (id: string) =>
        setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

    const showInitialLoading = isLoading && !pagination;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-white tracking-tight">Property listings</h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Properties that owners and agents submit through the List Property form.
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
                statuses={LISTING_STATUSES}
                counts={counts}
                value={status}
                onChange={updateFilter(setStatus)}
            />

            {/* Search & filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_auto_auto_auto] gap-3">
                <div className="md:col-span-2 xl:col-span-1">
                    <SearchField
                        value={search}
                        onChange={updateFilter(setSearch)}
                        label="Search listings"
                        placeholder="Search name, phone, email or locality"
                    />
                </div>
                <Dropdown
                    value={propertyType}
                    onChange={updateFilter(setPropertyType)}
                    label="Property type"
                    options={TYPE_OPTIONS}
                    icon={<ListFilter className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />}
                    className="w-full xl:w-56"
                    menuMinWidth={240}
                />
                <Dropdown
                    value={userRole}
                    onChange={updateFilter(setUserRole)}
                    label="Submitted by"
                    options={ROLE_OPTIONS}
                    icon={<UserRound className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />}
                    className="w-full xl:w-48"
                    menuMinWidth={200}
                />
                <Dropdown
                    value={sort}
                    onChange={updateFilter(setSort)}
                    label="Sort"
                    options={SORT_OPTIONS}
                    icon={<ArrowDownUp className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />}
                    className="w-full xl:w-48"
                    menuMinWidth={200}
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

            {/* Listings table */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400">
                                <th scope="col" className="py-3.5 px-4 w-12">
                                    <button
                                        type="button"
                                        onClick={toggleSelectAll}
                                        disabled={listings.length === 0}
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
                                <th scope="col" className="py-3.5 px-4">Submitted by</th>
                                <th scope="col" className="py-3.5 px-4">Property</th>
                                <th scope="col" className="py-3.5 px-4 hidden xl:table-cell">Size</th>
                                <th scope="col" className="py-3.5 px-4">Asking price</th>
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
                                        <td colSpan={COLUMN_COUNT} className="py-4 px-4">
                                            <div className="h-10 rounded-lg bg-slate-800/60 animate-pulse motion-reduce:animate-none" />
                                        </td>
                                    </tr>
                                ))
                            ) : error ? (
                                <tr>
                                    <td colSpan={COLUMN_COUNT} className="py-14 px-4 text-center">
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
                            ) : listings.length === 0 ? (
                                <tr>
                                    <td colSpan={COLUMN_COUNT} className="py-14 px-4 text-center">
                                        <p className="text-white font-semibold">
                                            {hasFilters ? "No listings match these filters" : "No listings yet"}
                                        </p>
                                        <p className="text-slate-400 mt-1">
                                            {hasFilters
                                                ? "Try a different status, property type or search term."
                                                : "Properties submitted through the List Property form will show up here."}
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
                                listings.map((listing) => {
                                    const isSelected = selectedIds.includes(listing._id);
                                    const isBusy = busyIds.includes(listing._id);
                                    return (
                                        <React.Fragment key={listing._id}>
                                            <tr
                                                className={cn(
                                                    "transition-colors",
                                                    isSelected ? "bg-amber-500/5" : "hover:bg-slate-800/40",
                                                    isBusy && "opacity-50 pointer-events-none"
                                                )}
                                            >
                                                <td className="py-4 px-4 align-top">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggleSelectOne(listing._id)}
                                                        aria-label={`Select listing from ${listing.yourName}`}
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
                                                    <p className="font-bold text-white">
                                                        {listing.yourName}{" "}
                                                        <span className="ml-1 px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-300 text-xs font-semibold align-middle">
                                                            {listing.userRole}
                                                        </span>
                                                    </p>
                                                    <div className="flex flex-col gap-0.5 text-xs text-slate-400">
                                                        <a href={`tel:${listing.mobileNumber}`} className="inline-flex items-center gap-1.5 hover:text-white w-fit">
                                                            <Phone className="w-3 h-3 text-emerald-400" aria-hidden="true" /> {listing.mobileNumber}
                                                        </a>
                                                        {listing.email && (
                                                            <a href={`mailto:${listing.email}`} className="inline-flex items-center gap-1.5 hover:text-white w-fit">
                                                                <Mail className="w-3 h-3 text-amber-400" aria-hidden="true" /> {listing.email}
                                                            </a>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="py-4 px-4 align-top space-y-1">
                                                    <span className="inline-block px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold rounded-lg text-xs">
                                                        {listing.propertyType}
                                                        {listing.bedrooms ? ` · ${listing.bedrooms}` : ""}
                                                    </span>
                                                    <p className="flex items-center gap-1 text-xs text-slate-300">
                                                        <MapPin className="w-3.5 h-3.5 text-rose-400" aria-hidden="true" /> {listing.locality}
                                                    </p>
                                                    <p className="xl:hidden text-xs text-slate-500 tabular-nums">
                                                        {listing.areaSize.toLocaleString("en-IN")} {listing.areaUnit} · {formatDate(listing.createdAt)}
                                                    </p>
                                                </td>
                                                <td className="py-4 px-4 align-top text-slate-300 whitespace-nowrap tabular-nums hidden xl:table-cell">
                                                    {listing.areaSize.toLocaleString("en-IN")} {listing.areaUnit}
                                                </td>
                                                <td className="py-4 px-4 align-top whitespace-nowrap">
                                                    <p className="font-semibold text-white tabular-nums">{formatPrice(listing.expectedPrice)}</p>
                                                    <p className="text-xs text-slate-500">
                                                        {listing.priceNegotiable ? "Negotiable" : "Fixed price"}
                                                    </p>
                                                </td>
                                                <td className="py-4 px-4 align-top text-slate-400 whitespace-nowrap tabular-nums hidden xl:table-cell">
                                                    {formatDate(listing.createdAt)}
                                                </td>
                                                <td className="py-4 px-4 align-top">
                                                    <StatusSelect
                                                        value={listing.status}
                                                        statuses={LISTING_STATUSES}
                                                        tones={LISTING_STATUS_TONES}
                                                        onChange={(s) => handleStatusChange(listing, s)}
                                                        label={`Status for listing from ${listing.yourName}`}
                                                    />
                                                </td>
                                                <td className="py-4 px-4 align-top text-right whitespace-nowrap">
                                                    <button
                                                        type="button"
                                                        onClick={() => setDetailListing(listing)}
                                                        aria-label={`View details for listing from ${listing.yourName}`}
                                                        title="View details"
                                                        className="p-2 rounded-lg text-slate-500 hover:bg-slate-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                                    >
                                                        <Eye className="w-4 h-4" aria-hidden="true" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDelete(listing)}
                                                        aria-label={`Delete listing from ${listing.yourName}`}
                                                        className="p-2 rounded-lg text-slate-500 hover:bg-rose-600/15 hover:text-rose-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
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
                        itemLabel={pagination.total === 1 ? "listing" : "listings"}
                    />
                )}
            </div>

            <dialog
                ref={detailsDialogRef}
                aria-labelledby="listing-details-title"
                onClose={() => setDetailListing(null)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) setDetailListing(null);
                }}
                className="m-auto p-0 w-[calc(100%-2rem)] max-w-3xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl bg-slate-900 text-slate-100 border border-slate-700 shadow-2xl backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm open:animate-[admin-dialog-in_160ms_ease-out] motion-reduce:open:animate-none"
            >
                {detailListing && (
                    <div className="p-5 sm:p-7">
                        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                            <div className="min-w-0">
                                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                                    Property listing
                                </p>
                                <h2 id="listing-details-title" className="mt-1 text-xl font-bold text-white">
                                    {detailListing.propertyType} in {detailListing.locality}
                                </h2>
                                <p className="mt-1 text-sm text-slate-400">
                                    Submitted by {detailListing.yourName} · {detailListing.userRole}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setDetailListing(null)}
                                aria-label="Close listing details"
                                className="shrink-0 p-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                            >
                                <X className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>

                        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                            <div>
                                <dt className="text-xs text-slate-500">Contact</dt>
                                <dd className="mt-1 text-slate-200">
                                    <a href={`tel:${detailListing.mobileNumber}`} className="hover:text-white">
                                        {detailListing.mobileNumber}
                                    </a>
                                    {detailListing.email && (
                                        <>
                                            <span className="mx-2 text-slate-600">·</span>
                                            <a href={`mailto:${detailListing.email}`} className="break-all hover:text-white">
                                                {detailListing.email}
                                            </a>
                                        </>
                                    )}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Status</dt>
                                <dd className="mt-1 text-slate-200">{detailListing.status}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Area</dt>
                                <dd className="mt-1 text-slate-200">
                                    {detailListing.areaSize.toLocaleString("en-IN")} {detailListing.areaUnit}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Expected price</dt>
                                <dd className="mt-1 text-slate-200">
                                    {formatPrice(detailListing.expectedPrice)} · {detailListing.priceNegotiable ? "Negotiable" : "Fixed price"}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Ownership</dt>
                                <dd className="mt-1 text-slate-200">{detailListing.ownershipType || "Not given"}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Bedrooms</dt>
                                <dd className="mt-1 text-slate-200">{detailListing.bedrooms || "Not given"}</dd>
                            </div>
                            <div>
                                <dt className="text-xs text-slate-500">Submitted</dt>
                                <dd className="mt-1 text-slate-200">{formatDate(detailListing.createdAt)}</dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-xs text-slate-500">Additional details</dt>
                                <dd className="mt-1 text-slate-200 whitespace-pre-line">
                                    {detailListing.additionalDetails || "None provided"}
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6 border-t border-slate-800 pt-5">
                            <p className="text-xs text-slate-500 mb-3">
                                Photos ({detailListing.propertyPhotos.length})
                            </p>
                            {detailListing.propertyPhotos.length === 0 ? (
                                <p className="flex items-center gap-2 text-sm text-slate-500">
                                    <ImageIcon className="w-4 h-4" aria-hidden="true" /> No photos uploaded
                                </p>
                            ) : (
                                <ul className="flex flex-wrap gap-2">
                                    {detailListing.propertyPhotos.map((url, i) => (
                                        <li key={`${url}-${i}`}>
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open photo ${i + 1} in a new tab`}
                                                className="block w-24 h-24 rounded-lg overflow-hidden border border-slate-700 hover:border-amber-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={url} alt={`Property photo ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </dialog>
        </div>
    );
}
