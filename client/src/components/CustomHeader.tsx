
import { View, Text, Pressable } from "react-native";
import { ShoppingCart, Bell } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BG_COLOR = "#020617";
const ACTIVE_COLOR = "#F97316";
const INACTIVE_COLOR = "#94A3B8";
const BORDER_COLOR = "#1E293B";

export default function CustomHeader() {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                backgroundColor: BG_COLOR,
                paddingTop: insets.top,
            }}
        >
            <View
                className="px-5 flex-row items-center justify-between"
                style={{
                    height: 60,
                    borderBottomWidth: 1,
                    borderBottomColor: BORDER_COLOR,
                }}
            >
                {/* App Name */}
                <Text
                    style={{
                        color: ACTIVE_COLOR,
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    Vibeo
                </Text>

                {/* Header Actions */}
                <View className="flex-row items-center gap-5">
                    <Pressable
                        onPress={() => console.log("Notifications pressed")}
                        hitSlop={10}
                    >
                        <Bell
                            size={24}
                            color={INACTIVE_COLOR}
                            strokeWidth={2}
                        />
                    </Pressable>
                    <Pressable
                        onPress={() => console.log("Cart pressed")}
                        hitSlop={10}
                    >
                        <ShoppingCart
                            size={24}
                            color={INACTIVE_COLOR}
                            strokeWidth={2}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
