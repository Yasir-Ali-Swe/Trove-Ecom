import { Image, Pressable, Text, View } from "react-native";
import { ShoppingBag } from "lucide-react-native";
import WishlistHeartButton from "./WishlistHeartButton";
import type { WishlistItemProps } from "@/types/wishlist";
import { formatPrice } from "@/utils/format";
import { colors } from "@/theme";

export default function WishlistItem({
  product,
  onRemove,
  onAddToCart,
}: WishlistItemProps) {
  return (
    <View className="mb-4 flex-1 overflow-hidden rounded-xl border border-border bg-card">
      <View className="relative">
        <Image
          source={{ uri: product.image }}
          className="h-44 w-full bg-background"
          resizeMode="cover"
        />
        <View className="absolute right-3 top-3">
          <WishlistHeartButton
            isWishlisted={true}
            onPress={() => onRemove(product.id)}
          />
        </View>
      </View>

      <View className="p-3">
        <Text
          numberOfLines={2}
          className="min-h-10 text-sm font-semibold text-foreground"
        >
          {product.name}
        </Text>

        <Text className="mt-2 text-base font-bold text-primary">
          {formatPrice(product.price)}
        </Text>

        <Pressable
          onPress={() => onAddToCart(product)}
          className="mt-3 flex-row items-center justify-center gap-2 rounded-lg bg-primary py-2.5 active:bg-primary-dark"
        >
          <ShoppingBag size={16} color={colors.primary.foreground} />
          <Text className="text-xs font-bold text-primary-foreground">Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}
