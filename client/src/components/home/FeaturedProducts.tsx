import { View, FlatList } from "react-native";
import { router } from "expo-router";

import HomeSectionHeader from "./HomeSectionHeader";
import FeaturedProductCard from "@/components/product/FeaturedProductCard";
import { FEATURED_PRODUCTS } from "@/constants/products";
import type { Product } from "@/types/product";

interface FeaturedProductsProps {
  products?: Product[];
  onViewAll?: () => void;
}

export default function FeaturedProducts({
  products = FEATURED_PRODUCTS,
  onViewAll,
}: FeaturedProductsProps) {
  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      router.push({
        pathname: "/products",
        params: { collection: "featured" },
      });
    }
  };

  return (
    <View className="mb-6">
      {/* Section Header */}
      <HomeSectionHeader
        title="Featured Products"
        subtitle="Handpicked products worth exploring."
        viewAllText="View All"
        onViewAll={handleViewAll}
      />

      {/* Horizontal Carousel */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeaturedProductCard product={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 2,
        }}
        decelerationRate="fast"
      />
    </View>
  );
}
