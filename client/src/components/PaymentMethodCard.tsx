import { Pressable, Text, View } from "react-native";
import { Banknote, CheckCircle2 } from "lucide-react-native";

interface PaymentMethodCardProps {
    selected: boolean;
    onPress: () => void;
}

export default function PaymentMethodCard({
    selected,
    onPress,
}: PaymentMethodCardProps) {
    return (
        <Pressable
            onPress={onPress}
            className={`flex-row items-center rounded-md border p-4 ${selected
                ? "bg-orange-500/10 border-orange-500"
                : "bg-slate-900 border-slate-800"
                }`}
        >
            <View className="w-12 h-12 rounded-md bg-slate-800 items-center justify-center">
                <Banknote size={25} color="#F97316" />
            </View>

            <View className="flex-1 ml-3">
                <Text className="text-white font-semibold text-base">
                    Cash on Delivery
                </Text>

                <Text className="text-slate-400 text-xs mt-1">
                    Pay when your order arrives
                </Text>
            </View>

            <CheckCircle2
                size={23}
                color={selected ? "#F97316" : "#64748B"}
                fill={selected ? "#F97316" : "transparent"}
            />
        </Pressable>
    );
}