import { View, Text } from "react-native";
import { Check } from "lucide-react-native";

import type { OrderStatus } from "@/types/order";
import { useTheme } from "@/theme";

const STEPS = ["Placed", "Processing", "Shipped", "Completed"];

const CURRENT_STEP: Record<Exclude<OrderStatus, "cancelled">, number> = {
    pending: 0,
    processing: 1,
    shipped: 2,
    completed: 3,
};

const DOT = 24;

export default function OrderTracker({
    status,
}: {
    status: Exclude<OrderStatus, "cancelled">;
}) {
    const { colors } = useTheme();
    const current = CURRENT_STEP[status];

    return (
        <View style={{ flexDirection: "row" }}>
            {STEPS.map((label, index) => {
                const done = index <= current;
                const lineDone = index < current;
                const isLast = index === STEPS.length - 1;

                return (
                    <View key={label} style={{ flex: 1, alignItems: "center" }}>
                        {/* Connector to the next step */}
                        {!isLast && (
                            <View
                                style={{
                                    position: "absolute",
                                    top: DOT / 2 - 1,
                                    left: "50%",
                                    width: "100%",
                                    height: 2,
                                    backgroundColor: lineDone ? colors.primary.DEFAULT : colors.border.strong,
                                }}
                            />
                        )}

                        <View
                            style={{
                                width: DOT,
                                height: DOT,
                                borderRadius: DOT / 2,
                                zIndex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: 2,
                                borderColor: done ? colors.primary.DEFAULT : colors.border.strong,
                                backgroundColor: done ? colors.primary.DEFAULT : colors.surface.DEFAULT,
                            }}
                        >
                            {done && <Check size={13} color={colors.primary.foreground} strokeWidth={3} />}
                        </View>

                        <Text
                            style={{
                                marginTop: 8,
                                fontSize: 11,
                                fontWeight: index === current ? "700" : "500",
                                color: done ? colors.foreground.DEFAULT : colors.muted.subtle,
                            }}
                        >
                            {label}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}