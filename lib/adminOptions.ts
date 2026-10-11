// Shared option lists for models, API validation and the admin UI.
// Kept free of mongoose imports so client components can use them.

export const LEAD_STATUSES = ["New", "Contacted", "In Progress", "Converted", "Closed"] as const;
export type LeadStatus = (typeof LEAD_STATUSES)[number];
export const DEFAULT_LEAD_STATUS: LeadStatus = "New";

export const LISTING_STATUSES = ["Pending", "Verified", "Listed", "Sold", "Rejected"] as const;
export type ListingStatus = (typeof LISTING_STATUSES)[number];
export const DEFAULT_LISTING_STATUS: ListingStatus = "Pending";

// Requirement options offered by the lead forms (LeadModal / HomeLead)
export const LEAD_QUERY_TYPES = [
    "Want to Buy - Plot",
    "Want to Buy - Apartment/Villa",
    "Want to Buy - Commercial Land",
    "Want to Sell Property",
    "Land Management / Construction",
];

// Property types offered by the List Property form
export const PROPERTY_TYPES = [
    "Residential Plot",
    "Flat/Apartment",
    "Independent House/Villa",
    "Commercial Shop/Showroom",
    "Office Space",
    "Agricultural Land",
    "Other",
];

export const LISTING_USER_ROLES = ["Owner", "Authorised Agent"];
