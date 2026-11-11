/* eslint-disable react-hooks/immutability */
import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { ShoppingBag, Check } from "lucide-react-native";
import { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
} from "react-native-reanimated";

import WishlistHeartButton from "@/components/wishlist/WishlistHeartButton";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";
import {
  useAppDispatch,
  useAppSelector,
  selectIsInWishlist,
} from "@/store";
import { toggleWishlist } from "@/store/wishlistSlice";
import { addToCart } from "@/store/cartSlice";
import { colors } from "@/theme";

interface ProductCardProps {
  product: Product;
  onPress?: (product: Product) => void;
  variant?: "grid" | "carousel";
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsInWishlist(product.id));
  const [justAdded, setJustAdded] = useState(false);
  const cartScale = useSharedValue(1);

  const cartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: cartScale.value }],
  }));

  const handleProductPress = () => {
    if (onPress) {
      onPress(product);
    } else {
      router.push({
        pathname: "/products/[id]",
        params: { id: product.id },
      });
    }
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));

    // Animate button and show feedback
    cartScale.value = withSequence(
      withSpring(1.15, { damping: 4, stiffness: 300 }),
      withSpring(1, { damping: 6, stiffness: 200 })
    );

    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  };

  return (
    <Pressable
      onPress={handleProductPress}
      className="flex-1 bg-card border border-border rounded-xl overflow-hidden active:opacity-95"
    >
      {/* Product Image Container */}
      <View className="relative w-full aspect-square bg-surface">
        <Image
          source={{ uri: product.image }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Wishlist Button */}
        <View className="absolute top-2.5 right-2.5 z-10">
          <WishlistHeartButton
            isWishlisted={isWishlisted}
            onPress={handleToggleWishlist}
            size={16}
          />
        </View>
      </View>

      {/* Product Information */}
      <View className="p-3 justify-between flex-1">
        <View>
          {/* Product Name */}
          <Text
            numberOfLines={2}
            className="text-xs font-semibold text-foreground leading-4 min-h-[32px]"
          >
            {product.name}
          </Text>

          {/* Price Row */}
          <View className="flex-row items-baseline gap-1.5 mt-1.5">
            <Text className="text-sm font-bold text-primary">
              {formatPrice(product.price)}
            </Text>
          </View>
        </View>

        {/* Add To Cart Button */}
        <Animated.View style={cartAnimatedStyle} className="mt-2.5">
          <Pressable
            onPress={handleAddToCart}
            className={`w-full flex-row items-center justify-center gap-1.5 py-2 rounded-lg ${justAdded
              ? "bg-success"
              : "bg-primary active:bg-primary-dark"
              }`}
          >
            {justAdded ? (
              <>
                <Check size={14} color={colors.success.foreground} strokeWidth={2.5} />
                <Text className="text-xs font-bold text-success-foreground">Added</Text>
              </>
            ) : (
              <>
                <ShoppingBag size={13} color={colors.primary.foreground} strokeWidth={2} />
                <Text className="text-xs font-bold text-primary-foreground">Add</Text>
              </>
            )}
          </Pressable>
        </Animated.View>
      </View>
    </Pressable>
  );
}
