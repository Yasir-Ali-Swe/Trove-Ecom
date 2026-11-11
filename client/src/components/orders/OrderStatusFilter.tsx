import { ScrollView, Pressable, Text, View } from "react-native";

import { useTheme } from "@/theme";
import { FILTERS, type FilterKey } from "@/utils/orders";

interface OrderStatusFilterProps {
    value: FilterKey;
    onChange: (key: FilterKey) => void;
    counts: Record<FilterKey, number>;
}

export default function OrderStatusFilter({
    value,
    onChange,
    counts,
}: OrderStatusFilterProps) {
    const { colors } = useTheme();

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0 }}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        >
            {FILTERS.map((filter) => {
                const selected = filter.key === value;
                return (
                    <Pressable
                        key={filter.key}
                        onPress={() => onChange(filter.key)}
                        accessibilityRole="button"
                        accessibilityState={{ selected }}
                        style={{
                            height: 36,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 14,
                            marginRight: 8,
                            borderRadius: 18,
                            borderWidth: 1,
                            borderColor: selected ? colors.primary.DEFAULT : colors.border.strong,
                            backgroundColor: selected ? colors.primary.DEFAULT : colors.surface.DEFAULT,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "600",
                                color: selected ? colors.primary.foreground : colors.foreground.muted,
                            }}
                        >
                            {filter.label}
                        </Text>
                        <View
                            style={{
                                minWidth: 18,
                                height: 18,
                                marginLeft: 8,
                                paddingHorizontal: 5,
                                borderRadius: 9,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: selected
                                    ? "rgba(255,255,255,0.25)"
                                    : colors.surface.elevated,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontWeight: "700",
                                    color: selected ? colors.primary.foreground : colors.muted.foreground,
                                }}
                            >
                                {counts[filter.key]}
                            </Text>
                        </View>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
}