import { View, Text, Pressable } from "react-native";
import {
    Package,
    Truck,
    Tag,
    Bell,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    type LucideIcon,
} from "lucide-react-native";

import type { AppNotification, NotificationType } from "@/types/notification";
import { useTheme } from "@/theme";
import { withAlpha } from "@/utils/orders";
import { TYPE_COLOR, formatTimeAgo } from "@/utils/notifications";

const TYPE_ICON: Record<NotificationType, LucideIcon> = {
    order: Package,
    shipping: Truck,
    offer: Tag,
    system: Bell,
};

interface NotificationCardProps {
    notification: AppNotification;
    expanded: boolean;
    onToggle: () => void;
    onAction?: () => void;
}

export default function NotificationCard({
    notification,
    expanded,
    onToggle,
    onAction,
}: NotificationCardProps) {
    const { colors } = useTheme();
    const { type, title, message, createdAt, read, actionLabel } = notification;

    const Icon = TYPE_ICON[type];
    const accent = TYPE_COLOR[type];
    const Chevron = expanded ? ChevronUp : ChevronDown;

    return (
        <View
            style={{
                borderRadius: 16,
                borderWidth: 1,
                borderColor: read ? colors.border.DEFAULT : withAlpha(colors.primary.DEFAULT, 0.45),
                backgroundColor: colors.card.DEFAULT,
                overflow: "hidden",
            }}
        >
            <Pressable
                onPress={onToggle}
                accessibilityRole="button"
                accessibilityState={{ expanded }}
                accessibilityLabel={`${title}, ${read ? "read" : "unread"}`}
                android_ripple={{ color: withAlpha(colors.primary.DEFAULT, 0.12) }}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? colors.surface.elevated : "transparent",
                })}
            >
                <View style={{ flexDirection: "row", padding: 16 }}>
                    {/* Type icon */}
                    <View
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 14,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: withAlpha(accent, 0.15),
                            marginRight: 14,
                        }}
                    >
                        <Icon size={20} color={accent} strokeWidth={2} />
                    </View>

                    {/* Text */}
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text
                                numberOfLines={expanded ? undefined : 1}
                                style={{
                                    flex: 1,
                                    color: colors.foreground.DEFAULT,
                                    fontSize: 15,
                                    fontWeight: read ? "600" : "800",
                                }}
                            >
                                {title}
                            </Text>
                            {!read && (
                                <View
                                    style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        marginLeft: 8,
                                        backgroundColor: colors.primary.DEFAULT,
                                    }}
                                />
                            )}
                        </View>

                        <Text
                            numberOfLines={expanded ? undefined : 2}
                            style={{
                                color: colors.muted.foreground,
                                fontSize: 13,
                                lineHeight: 19,
                                marginTop: 4,
                            }}
                        >
                            {message}
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ color: colors.muted.subtle, fontSize: 12 }}>
                                {formatTimeAgo(createdAt)}
                            </Text>
                            <Chevron size={18} color={colors.muted.subtle} strokeWidth={2} />
                        </View>
                    </View>
                </View>
            </Pressable>

            {/* Action, shown only when expanded */}
            {expanded && onAction && actionLabel ? (
                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={{ height: 1, backgroundColor: colors.border.DEFAULT, marginBottom: 14 }} />
                    <Pressable
                        onPress={onAction}
                        accessibilityRole="button"
                        accessibilityLabel={actionLabel}
                        style={({ pressed }) => ({
                            height: 44,
                            borderRadius: 12,
                            backgroundColor: pressed ? colors.primary.dark : colors.primary.DEFAULT,
                        })}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.primary.foreground,
                                    fontSize: 14,
                                    fontWeight: "700",
                                    marginRight: 8,
                                }}
                            >
                                {actionLabel}
                            </Text>
                            <ArrowRight size={16} color={colors.primary.foreground} strokeWidth={2.5} />
                        </View>
                    </Pressable>
                </View>
            ) : null}
        </View>
    );
}