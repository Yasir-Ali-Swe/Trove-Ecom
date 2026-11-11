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

interface FeaturedProductCardProps {
  product: Product;
  onPress?: (product: Product) => void;
}

export default function FeaturedProductCard({
  product,
  onPress,
}: FeaturedProductCardProps) {
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
      className="w-56 bg-card border border-border rounded-md overflow-hidden active:opacity-95 mr-3.5"
    >
      {/* Product Image */}
      <View className="relative w-full h-40 bg-surface">
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

      {/* Product Details */}
      <View className="p-3.5 justify-between">
        <View>
          <Text
            numberOfLines={1}
            className="text-sm font-bold text-foreground tracking-tight"
          >
            {product.name}
          </Text>
          {/* Pricing */}
          <View className="flex-row items-baseline gap-2 mt-2">
            <Text className="text-base font-extrabold text-foreground">
              {formatPrice(product.price)}
            </Text>
          </View>
        </View>

        {/* Add to Cart Button */}
        <Animated.View style={cartAnimatedStyle} className="mt-3">
          <Pressable
            onPress={handleAddToCart}
            className={`w-full flex-row items-center justify-center gap-2 py-2.5 rounded-xl ${justAdded
              ? "bg-success"
              : "bg-primary active:bg-primary-dark"
              }`}
          >
            {justAdded ? (
              <>
                <Check size={14} color={colors.success.foreground} strokeWidth={2.5} />
                <Text className="text-xs font-bold text-success-foreground">Added to Cart</Text>
              </>
            ) : (
              <>
                <ShoppingBag size={14} color={colors.primary.foreground} strokeWidth={2} />
                <Text className="text-xs font-bold text-primary-foreground">Add to Cart</Text>
              </>
            )}
          </Pressable>
        </Animated.View>
      </View>
    </Pressable>
  );
}
