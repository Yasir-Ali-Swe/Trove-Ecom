import { View } from "react-native";
import { router } from "expo-router";

import HomeSectionHeader from "./HomeSectionHeader";
import ProductCard from "@/components/product/ProductCard";
import { NEW_ARRIVALS } from "@/constants/products";
import type { Product } from "@/types/product";

interface NewArrivalsProps {
  products?: Product[];
  onViewAll?: () => void;
}

export default function NewArrivals({
  products = NEW_ARRIVALS,
  onViewAll,
}: NewArrivalsProps) {
  // Exactly 6 products = 3 rows in 2-column grid
  const displayProducts = products.slice(0, 6);

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      router.push({
        pathname: "/products",
        params: { collection: "new-arrivals" },
      });
    }
  };

  return (
    <View className="mb-6">
      {/* Section Header */}
      <HomeSectionHeader
        title="New Arrivals"
        subtitle="Discover the latest products added to Trove."
        viewAllText="View All"
        onViewAll={handleViewAll}
      />

      {/* Two-Column Grid: Exactly 3 rows initially */}
      <View className="flex-row flex-wrap justify-between px-4">
        {displayProducts.map((product) => (
          <View
            key={product.id}
            className="w-[48.2%] mb-3.5"
          >
            <ProductCard product={product} />
          </View>
        ))}
      </View>
    </View>
  );
}
