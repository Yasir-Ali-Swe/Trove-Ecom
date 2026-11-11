import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HeroSlider from "@/components/home/HeroSlider";
import InfiniteCategorySlider from "@/components/home/InfiniteCategorySlider";
import NewArrivals from "@/components/home/NewArrivals";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ViewAllProductsButton from "@/components/home/ViewAllProductsButton";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: Math.max(insets.bottom, 16) + 40,
        }}
        className="flex-1"
      >
        {/* 1. Hero Promotional Slider */}
        <HeroSlider />

        {/* 2. Infinite Auto-Scrolling Categories */}
        <InfiniteCategorySlider />

        {/* 3. New Arrivals (Two-Column Grid, exactly 3 rows / 6 products) */}
        <NewArrivals />

        {/* 4. Featured Products (Horizontal Carousel) */}
        <FeaturedProducts />

        {/* 5. View All Products CTA */}
        <ViewAllProductsButton />
      </ScrollView>
    </View>
  );
}
