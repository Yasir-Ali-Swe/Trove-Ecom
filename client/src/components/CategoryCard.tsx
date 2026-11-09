
import { Pressable, Text, View } from "react-native";
import type { LucideIcon } from "lucide-react-native";

interface CategoryCardProps {
    name: string;
    icon: LucideIcon;
    onPress: () => void;
}

const ACTIVE_COLOR = "#F97316";

export default function CategoryCard({
    name,
    icon: Icon,
    onPress,
}: CategoryCardProps) {
    return (
        <Pressable
            onPress={onPress}
            className="w-[48%] bg-[#0F172A] border border-[#1E293B] rounded-2xl py-6 px-3 mb-4 items-center active:opacity-70"
        >
            <View className="w-14 h-14 rounded-2xl bg-[#1E293B] items-center justify-center mb-3">
                <Icon size={28} color={ACTIVE_COLOR} strokeWidth={2} />
            </View>

            <Text className="text-white text-[15px] font-semibold text-center">
                {name}
            </Text>
        </Pressable>
    );
}
