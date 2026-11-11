import { Pressable, Text, View } from "react-native";
import type { CategoryCardProps } from "@/types/category";
import { colors } from "@/theme";

export default function CategoryCard({
  name,
  icon: Icon,
  onPress,
}: CategoryCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-[48%] bg-card border border-border rounded-xl py-5 px-3 mb-4 items-center active:opacity-75"
    >
      <View className="w-13 h-13 rounded-xl bg-surface-elevated items-center justify-center mb-3 border border-border-strong/50">
        <Icon size={26} color={colors.primary.DEFAULT} strokeWidth={2} />
      </View>

      <Text className="text-foreground text-sm font-semibold text-center">
        {name}
      </Text>
    </Pressable>
  );
}
