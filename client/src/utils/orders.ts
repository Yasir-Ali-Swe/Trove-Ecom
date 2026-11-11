import type { OrderStatus } from "../types/order";

export type FilterKey = "all" | OrderStatus;

export const STATUS_META: Record<OrderStatus, { label: string; color: string }> = {
    pending: { label: "Pending", color: "#F59E0B" },
    processing: { label: "Processing", color: "#3B82F6" },
    shipped: { label: "Shipped", color: "#8B5CF6" },
    completed: { label: "Completed", color: "#22C55E" },
    cancelled: { label: "Cancelled", color: "#EF4444" },
};

export const FILTERS: { key: FilterKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "pending", label: "Pending" },
    { key: "processing", label: "Processing" },
    { key: "shipped", label: "Shipped" },
    { key: "completed", label: "Completed" },
    { key: "cancelled", label: "Cancelled" },
];

const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatOrderDate(iso: string) {
    const d = new Date(iso);
    return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Adds transparency to a 6-digit hex color, e.g. withAlpha("#22C55E", 0.15)
export function withAlpha(hex: string, alpha: number) {
    const a = Math.round(alpha * 255).toString(16).padStart(2, "0");
    return `${hex}${a}`;
}