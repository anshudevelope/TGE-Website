"use client";

import { useEffect, useState } from "react";

export interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

interface ListState<T> {
    key: string;
    items: T[];
    pagination: PaginationInfo | null;
    counts: Record<string, number>;
    error: string;
}

// Fetches a paginated admin list endpoint and refetches when the query changes.
// `isLoading` stays true until the response for the current query arrives,
// so the previous rows can stay on screen (dimmed) while the next page loads.
export function useAdminList<T>(
    endpoint: string,
    query: Record<string, string | number | undefined>
) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== "") params.set(key, String(value));
    }
    const url = params.size ? `${endpoint}?${params}` : endpoint;

    const [reloadToken, setReloadToken] = useState(0);
    const requestKey = `${url}#${reloadToken}`;

    const [state, setState] = useState<ListState<T>>({
        key: "",
        items: [],
        pagination: null,
        counts: {},
        error: "",
    });

    useEffect(() => {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal, cache: "no-store" })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setState({
                        key: requestKey,
                        items: data.data,
                        pagination: data.pagination,
                        counts: data.counts ?? {},
                        error: "",
                    });
                } else {
                    setState((prev) => ({
                        ...prev,
                        key: requestKey,
                        error: data.message || "The server couldn't load this list. Refresh to try again.",
                    }));
                }
            })
            .catch((err) => {
                if (err.name === "AbortError") return;
                setState((prev) => ({
                    ...prev,
                    key: requestKey,
                    error: "Couldn't reach the server. Check your connection, then refresh.",
                }));
            });

        return () => controller.abort();
    }, [url, requestKey]);

    return {
        items: state.items,
        pagination: state.pagination,
        counts: state.counts,
        error: state.error,
        isLoading: state.key !== requestKey,
        reload: () => setReloadToken((t) => t + 1),
        setItems: (update: (items: T[]) => T[]) =>
            setState((prev) => ({ ...prev, items: update(prev.items) })),
    };
}

// Delays a fast-changing value (e.g. a search box) before it triggers a fetch
export function useDebouncedValue<T>(value: T, delay = 350) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounced;
}
