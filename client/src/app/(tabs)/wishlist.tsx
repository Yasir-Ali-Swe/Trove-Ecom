import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  View,
} from "react-native";
import { Heart } from "lucide-react-native";

import WishlistItem from "@/components/WishlistItem";
import EmptyWishlist from "@/components/EmptyWishlist";

import { WishlistProduct } from "@/types/wishlist";

const initialProducts: WishlistProduct[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 4500,
  },
  {
    id: "2",
    name: "Smart Watch Series 9",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    price: 8500,
  },
  {
    id: "3",
    name: "Classic Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    price: 6200,
  },
  {
    id: "4",
    name: "Modern Backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    price: 3200,
  },
];

export default function WishlistScreen() {
  const [wishlist, setWishlist] =
    useState<WishlistProduct[]>(initialProducts);

  // Remove product from wishlist
  const handleRemove = (id: string) => {
    setWishlist((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Add product to cart
  const handleAddToCart = (product: WishlistProduct) => {
    Alert.alert(
      "Add to Cart",
      `${product.name} will be added to your cart once connected to your cart functionality.`
    );
  };

  return (
    <View className="flex-1 bg-slate-950">
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 30,
          flexGrow: 1,

        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <View className="mb-6">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-2xl font-bold text-white">
                  My Wishlist
                </Text>

                <Text className="mt-1 text-sm text-slate-400">
                  Your favorite products in one place
                </Text>
              </View>

              <View className="flex-row items-center gap-2 rounded-full bg-orange-500/10 px-3 py-2">
                <Heart
                  size={16}
                  color="#F97316"
                  fill="#F97316"
                />

                <Text className="font-semibold text-orange-500">
                  {wishlist.length}
                </Text>
              </View>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View className="w-[48%]">
            <WishlistItem
              product={item}
              onRemove={handleRemove}
              onAddToCart={handleAddToCart}
            />
          </View>
        )}
        ListEmptyComponent={<EmptyWishlist />}
      />
    </View>
  );
}