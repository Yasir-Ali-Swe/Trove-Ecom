import { memo } from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";

import StatusBadge from "./StatusBadge";
import type { Order } from "@/types/order";
import { useTheme, radius } from "@/theme";
import { formatOrderDate } from "@/utils/date";
import { formatPrice } from "@/utils/format";

const THUMB = 56;
const MAX_THUMBS = 3;

function OrderCard({
    order,
    onPress,
}: {
    order: Order;
    onPress: () => void;
}) {
    const { colors } = useTheme();

    const itemCount = order.items.reduce((sum, i) => sum + i.quantity, 0);
    const visible = order.items.slice(0, MAX_THUMBS);
    const extra = order.items.length - MAX_THUMBS;

    return (
        <Pressable
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={`Order ${order.orderNumber}, ${order.status}`}
            style={({ pressed }) => ({
                padding: 16,
                borderRadius: radius.lg,
                borderWidth: 1,
                borderColor: colors.border.DEFAULT,
                backgroundColor: colors.card.DEFAULT,
                opacity: pressed ? 0.85 : 1,
            })}
        >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flex: 1, marginRight: 12 }}>
                    <Text style={{ color: colors.foreground.DEFAULT, fontSize: 15, fontWeight: "700" }}>
                        #{order.orderNumber}
                    </Text>
                    <Text style={{ color: colors.muted.foreground, fontSize: 12, marginTop: 3 }}>
                        Placed on {formatOrderDate(order.placedAt)}
                    </Text>
                </View>
                <StatusBadge status={order.status} />
            </View>

            <View style={{ height: 1, backgroundColor: colors.border.DEFAULT, marginVertical: 14 }} />

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {visible.map((item) => (
                        <Image
                            key={item.id}
                            source={{ uri: item.image }}
                            contentFit="cover"
                            style={{
                                width: THUMB,
                                height: THUMB,
                                marginRight: 8,
                                borderRadius: radius.sm,
                                backgroundColor: colors.surface.elevated,
                            }}
                        />
                    ))}
                    {extra > 0 && (
                        <View
                            style={{
                                width: THUMB,
                                height: THUMB,
                                borderRadius: radius.sm,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: colors.surface.elevated,
                            }}
                        >
                            <Text style={{ color: colors.foreground.muted, fontSize: 13, fontWeight: "700" }}>
                                +{extra}
                            </Text>
                        </View>
                    )}
                </View>

                <View style={{ alignItems: "flex-end" }}>
                    <Text style={{ color: colors.muted.foreground, fontSize: 12 }}>
                        {itemCount} {itemCount === 1 ? "item" : "items"}
                    </Text>
                    <Text style={{ color: colors.foreground.DEFAULT, fontSize: 16, fontWeight: "800", marginTop: 3 }}>
                        {formatPrice(order.total)}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default memo(OrderCard);