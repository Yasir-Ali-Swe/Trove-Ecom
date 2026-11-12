import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { ShoppingBag, ArrowRight } from "lucide-react-native";
import { useTheme } from "@/theme";

export default function EmptyCart() {
  const { colors } = useTheme();
  return (
    <View className="flex-1 bg-background items-center justify-center px-8">
      <View className="w-28 h-28 rounded-full bg-surface border border-border items-center justify-center">
        <ShoppingBag size={48} color={colors.primary.DEFAULT} strokeWidth={1.5} />
      </View>

      <Text className="text-foreground text-2xl font-bold mt-7">
        Your cart is empty
      </Text>

      <Text className="text-muted-foreground text-sm text-center leading-6 mt-3">
        You haven&apos;t added anything to your cart yet. Discover our products and find something you love!
      </Text>

      <Pressable
        onPress={() => router.navigate("/products")}
        className="bg-primary rounded-md px-7 py-3.5 mt-8 flex-row items-center active:bg-primary-dark"
      >
        <Text className="text-primary-foreground font-bold mr-2">Start Shopping</Text>
        <ArrowRight size={18} color={colors.primary.foreground} />
      </Pressable>
    </View>
  );
}
