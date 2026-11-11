import type { AppNotification } from "@/types/notification";

const hoursAgo = (h: number) => new Date(Date.now() - h * 3600 * 1000).toISOString();

// Newest first
export const NOTIFICATIONS: AppNotification[] = [
    {
        id: "n1",
        type: "shipping",
        title: "Your order is on the way",
        message:
            "Order #TRV-10517 has been handed to our delivery partner and is on its way to you. You can expect it within 2 to 3 working days. Keep your phone nearby, as the courier may call before delivery. You can follow every step of the journey from the order details page.",
        createdAt: hoursAgo(1),
        read: false,
        route: "/orders/ord-10517",
        actionLabel: "Track order",
    },
    {
        id: "n2",
        type: "offer",
        title: "Flash sale: up to 40% off",
        message:
            "Our biggest sale of the season is live for the next 24 hours. Enjoy up to 40% off on watches, footwear and electronics. Stock is limited and popular items sell out fast, so don't wait too long. Discounts are applied automatically at checkout, and no code is needed.",
        createdAt: hoursAgo(5),
        read: false,
        route: "/products",
        actionLabel: "Shop the sale",
    },
    {
        id: "n3",
        type: "order",
        title: "Order confirmed",
        message:
            "Thank you for shopping with us. Your order #TRV-10541 has been confirmed and is being prepared. We'll notify you as soon as it ships. If you need to change anything, please do it within the next hour, before the order moves to packing.",
        createdAt: hoursAgo(20),
        read: true,
        route: "/orders/ord-10541",
        actionLabel: "View order",
    },
    {
        id: "n4",
        type: "system",
        title: "Profile updated",
        message:
            "Your profile details were updated successfully. If you didn't make this change, please review your account details right away and contact our support team so we can help you secure your account.",
        createdAt: hoursAgo(30),
        read: true,
        route: "/profile",
        actionLabel: "Review profile",
    },
    {
        id: "n5",
        type: "offer",
        title: "Free delivery this weekend",
        message:
            "Enjoy free express delivery on every order over Rs. 3,000 across Pakistan this weekend. The offer applies automatically at checkout to all eligible products and cannot be combined with other shipping promotions.",
        createdAt: hoursAgo(72),
        read: false,
    },
    {
        id: "n6",
        type: "order",
        title: "Order delivered",
        message:
            "Your order #TRV-10482 was delivered. We hope you love your new items. If something isn't right, you can return it within 30 days for an exchange or a full refund. We'd also really appreciate a review of the products you bought.",
        createdAt: hoursAgo(200),
        read: true,
        route: "/orders/ord-10482",
        actionLabel: "View order",
    },
];