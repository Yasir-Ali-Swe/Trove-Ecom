/* eslint-disable react-hooks/immutability */
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useFrameCallback,
} from "react-native-reanimated";

import { CATEGORIES } from "@/constants/categories";
import type { Category } from "@/types/category";
import { useTheme } from "@/theme";

const ITEM_WIDTH = 86;
const ITEM_MARGIN = 10;
const ITEM_TOTAL_WIDTH = ITEM_WIDTH + ITEM_MARGIN;
const SPEED = 42; // pixels per second

export default function InfiniteCategorySlider() {
  const { colors } = useTheme();
  const offset = useSharedValue(0);
  const paused = useSharedValue(false);

  const singleSequenceWidth = CATEGORIES.length * ITEM_TOTAL_WIDTH;

  // Two copies are enough as long as one copy is wider than the screen.
  // If you have few categories, use three copies instead.
  const displayCategories = [...CATEGORIES, ...CATEGORIES];

  useFrameCallback((frame) => {
    if (paused.value) return;
    const dt = frame.timeSincePreviousFrame ?? 16;
    // Move right-to-left and wrap seamlessly
    offset.value = (offset.value + (SPEED * dt) / 1000) % singleSequenceWidth;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  const handleCategoryPress = (category: Category) => {
    router.push({
      pathname: "/products",
      params: { categoryId: category.id, category: category.name },
    });
  };

  const handleAllCategoriesPress = () => {
    router.push({ pathname: "/products" });
  };

  return (
    <View className="mb-6 overflow-hidden">
      <View className="flex-row items-center justify-between px-4 mb-2.5">
        <Text className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Explore by Category
        </Text>
        <Pressable
          onPress={handleAllCategoriesPress}
          hitSlop={8}
          className="active:opacity-70"
          accessibilityRole="button"
          accessibilityLabel="View All Categories and Products"
        >
          <Text className="text-xs font-semibold text-primary">
            All Categories
          </Text>
        </Pressable>
      </View>

      <View
        className="py-1"
        onTouchStart={() => { paused.value = true; }}
        onTouchEnd={() => { paused.value = false; }}
        onTouchCancel={() => { paused.value = false; }}
      >
        <Animated.View
          style={[
            animatedStyle,
            { flexDirection: "row", width: singleSequenceWidth * 2 },
          ]}
        >
          {displayCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Pressable
                key={`${category.id}-${index}`}
                onPress={() => handleCategoryPress(category)}
                style={{ width: ITEM_WIDTH, marginRight: ITEM_MARGIN }}
                className="items-center bg-card border border-border rounded-lg py-3 px-1 active:opacity-75 active:scale-95 shadow-sm"
              >
                <View className="w-11 h-11 rounded-full bg-surface-elevated/90 items-center justify-center mb-1.5 border border-border-strong/60 shadow-inner">
                  <Icon size={20} color={colors.primary.DEFAULT} strokeWidth={2} />
                </View>
                <Text
                  numberOfLines={1}
                  className="text-foreground text-[11px] font-semibold text-center"
                >
                  {category.name}
                </Text>
              </Pressable>
            );
          })}
        </Animated.View>
      </View>
    </View>
  );
}