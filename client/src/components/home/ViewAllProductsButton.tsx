import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { ArrowRight, ShoppingBag } from "lucide-react-native";

import { useTheme } from "@/theme";

export default function ViewAllProductsButton() {
  const { colors } = useTheme();
  const handlePress = () => {
    router.push({
      pathname: "/products",
      params: { collection: "all" },
    });
  };

  return (
    <View className="px-4">
      {/* Outer view carries the shadow; inner view clips the decoration */}
      <View className="rounded-xl shadow-md">
        <Pressable
          onPress={handlePress}
          accessibilityRole="button"
          accessibilityLabel="View all products"
          className="overflow-hidden rounded-xl border border-border bg-card active:opacity-90 active:scale-[0.98]"
        >
          {/* Decorative accents */}
          <View
            pointerEvents="none"
            className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10"
          />
          <View
            pointerEvents="none"
            className="absolute -bottom-12 right-10 h-24 w-24 rounded-full bg-primary/5"
          />

          <View className="flex-row items-center gap-4 p-5">
            <View className="h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/15">
              <ShoppingBag size={22} color={colors.primary.DEFAULT} strokeWidth={2} />
            </View>

            <View className="flex-1">
              <Text className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Full Catalog
              </Text>
              <Text
                numberOfLines={1}
                className="mt-0.5 text-base font-extrabold tracking-tight text-foreground"
              >
                Explore All Products
              </Text>
              <Text
                numberOfLines={2}
                className="mt-0.5 text-xs leading-4 text-muted-foreground"
              >
                Apparel, tech and lifestyle essentials in one place.
              </Text>
            </View>

            <View className="h-10 w-10 items-center justify-center rounded-full bg-primary">
              <ArrowRight
                size={18}
                color={colors.primary.foreground}
                strokeWidth={2.5}
              />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}