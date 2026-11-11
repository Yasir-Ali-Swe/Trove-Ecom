import type { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import { ChevronRight, type LucideIcon } from "lucide-react-native";

import { useTheme } from "@/theme";
import { withAlpha } from "@/utils/orders";

interface AccountMenuItemProps {
    icon: LucideIcon;
    title: string;
    subtitle?: string;
    badge?: number;
    onPress?: () => void;
    right?: ReactNode;
    isLast?: boolean;
}

export default function AccountMenuItem({
    icon: Icon,
    title,
    subtitle,
    badge,
    onPress,
    right,
    isLast,
}: AccountMenuItemProps) {
    const { colors } = useTheme();

    return (
        <Pressable
            onPress={onPress}
            disabled={!onPress}
            accessibilityRole={onPress ? "button" : undefined}
            accessibilityLabel={title}
            android_ripple={{ color: withAlpha(colors.primary.DEFAULT, 0.12) }}
            style={({ pressed }) => ({
                backgroundColor: pressed ? colors.surface.elevated : "transparent",
            })}
        >
            {/* Layout lives in a plain View: Icon | Title + subtitle | badge / chevron */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 16,
                    paddingRight: 14,
                    paddingVertical: 14,
                }}
            >
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: withAlpha(colors.primary.DEFAULT, 0.14),
                        marginRight: 14,
                    }}
                >
                    <Icon size={19} color={colors.primary.DEFAULT} strokeWidth={2} />
                </View>

                <View style={{ flex: 1, marginRight: 8 }}>
                    <Text
                        style={{
                            color: colors.foreground.DEFAULT,
                            fontSize: 15,
                            fontWeight: "600",
                        }}
                    >
                        {title}
                    </Text>
                    {subtitle ? (
                        <Text
                            style={{
                                color: colors.muted.foreground,
                                fontSize: 12,
                                marginTop: 2,
                            }}
                        >
                            {subtitle}
                        </Text>
                    ) : null}
                </View>

                {badge !== undefined && badge > 0 ? (
                    <View
                        style={{
                            minWidth: 22,
                            height: 22,
                            paddingHorizontal: 7,
                            borderRadius: 11,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: colors.primary.DEFAULT,
                            marginRight: 8,
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primary.foreground,
                                fontSize: 11,
                                fontWeight: "800",
                            }}
                        >
                            {badge}
                        </Text>
                    </View>
                ) : null}

                {right ??
                    (onPress ? (
                        <ChevronRight size={18} color={colors.muted.subtle} strokeWidth={2} />
                    ) : null)}

                {/* Inset divider that starts after the icon */}
                {!isLast && (
                    <View
                        pointerEvents="none"
                        style={{
                            position: "absolute",
                            left: 70,
                            right: 0,
                            bottom: 0,
                            height: 1,
                            backgroundColor: colors.border.DEFAULT,
                        }}
                    />
                )}
            </View>
        </Pressable>
    );
}