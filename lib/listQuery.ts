import type { Model } from "mongoose";

const DEFAULT_LIMIT = 10;
const MAX_LIMIT = 100;

export function parsePagination(searchParams: URLSearchParams) {
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const rawLimit = parseInt(searchParams.get("limit") || String(DEFAULT_LIMIT), 10) || DEFAULT_LIMIT;
    const limit = Math.min(MAX_LIMIT, Math.max(1, rawLimit));
    return { page, limit, skip: (page - 1) * limit };
}

export function escapeRegex(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Records created before the status field existed have no status;
// treat them as the default status so they still show up under it.
export function statusCondition(status: string, defaultStatus: string) {
    return status === defaultStatus
        ? { $or: [{ status }, { status: { $exists: false } }] }
        : { status };
}

// Count documents per status (plus "all") for the filter tabs
export async function countByStatus<T>(
    model: Model<T>,
    match: Record<string, unknown>,
    defaultStatus: string
) {
    const groups: { _id: string; count: number }[] = await model.aggregate([
        { $match: match },
        { $group: { _id: { $ifNull: ["$status", defaultStatus] }, count: { $sum: 1 } } },
    ]);

    const counts: Record<string, number> = { all: 0 };
    for (const { _id, count } of groups) {
        counts[_id] = (counts[_id] || 0) + count;
        counts.all += count;
    }
    return counts;
}
