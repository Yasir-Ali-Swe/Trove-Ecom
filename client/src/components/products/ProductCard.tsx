import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Image as ImageIcon } from "lucide-react-native";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";
import { colors } from "@/theme";

interface ProductCardProps {
  product: Product;
  onPress?: (product: Product) => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress(product);
    } else {
      router.push({
        pathname: "/products/[id]",
        params: { id: product.id },
      });
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-card border border-border rounded-md overflow-hidden active:opacity-90"
      accessibilityRole="button"
      accessibilityLabel={`View ${product.name}, price ${formatPrice(product.price)}`}
    >
      {/* Product Image */}
      <View className="relative w-full aspect-square bg-surface items-center justify-center">
        {product.image && !imageError ? (
          <Image
            source={{ uri: product.image }}
            className="w-full h-full"
            resizeMode="cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <View className="items-center justify-center p-4">
            <ImageIcon size={28} color={colors.muted.subtle} strokeWidth={1.5} />
            <Text className="text-[10px] text-muted-subtle mt-1 text-center">
              No image
            </Text>
          </View>
        )}
      </View>

      {/* Product Details (Only Name & Price) */}
      <View className="p-3">
        <Text
          numberOfLines={1}
          className="text-xs font-semibold text-foreground tracking-tight"
        >
          {product.name}
        </Text>

        <Text className="text-sm font-bold text-primary mt-1.5">
          {formatPrice(product.price)}
        </Text>
      </View>
    </Pressable>
  );
}

