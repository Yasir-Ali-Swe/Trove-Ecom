import { formatOrderDate } from "@/utils/orders";
import type { AppNotification, NotificationType } from "@/types/notification";

export type NotificationFilterKey = "all" | "new" | "unread";

export const NOTIFICATION_FILTERS: { key: NotificationFilterKey; label: string }[] = [
    { key: "all", label: "All" },
    { key: "new", label: "New" },
    { key: "unread", label: "Unread" },
];

export const TYPE_COLOR: Record<NotificationType, string> = {
    order: "#3B82F6",
    shipping: "#8B5CF6",
    offer: "#F97316",
    system: "#22C55E",
};

const DAY_MS = 24 * 60 * 60 * 1000;

// "New" means received in the last 24 hours
export function isNewNotification(n: AppNotification) {
    return Date.now() - new Date(n.createdAt).getTime() < DAY_MS;
}

export function formatTimeAgo(iso: string) {
    const diff = Date.now() - new Date(iso).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return formatOrderDate(iso);
}