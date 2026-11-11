import { View, Text } from "react-native";

import type { OrderStatus } from "@/types/order";
import { STATUS_META, withAlpha } from "@/utils/orders";

export default function StatusBadge({ status }: { status: OrderStatus }) {
    const { label, color } = STATUS_META[status];

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 999,
                backgroundColor: withAlpha(color, 0.15),
            }}
        >
            <View
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: color,
                    marginRight: 6,
                }}
            />
            <Text style={{ color, fontSize: 11, fontWeight: "700", letterSpacing: 0.2 }}>
                {label}
            </Text>
        </View>
    );
}