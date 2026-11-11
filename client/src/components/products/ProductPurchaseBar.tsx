import { View, Text, Pressable } from "react-native";
import { Check } from "lucide-react-native";

import { colors } from "@/theme";

interface ProductPurchaseBarProps {
  inStock?: boolean;
  isAdded: boolean;
  onAddToCart: () => void;
  onBuyNow: () => void;
  bottomInset: number;
}

export default function ProductPurchaseBar({
  inStock = true,
  isAdded,
  onAddToCart,
  onBuyNow,
  bottomInset,
}: ProductPurchaseBarProps) {
  return (
    <View
      style={{ paddingBottom: Math.max(bottomInset, 12) }}
      className="border-t border-border bg-background px-4 pt-3"
    >
      {inStock ? (
        <View className="flex-row gap-3">
          <Pressable
            onPress={onAddToCart}
            accessibilityRole="button"
            accessibilityLabel={isAdded ? "Added to cart" : "Add to cart"}
            className={`h-12 flex-1 flex-row items-center justify-center gap-2 rounded-xl border ${isAdded
              ? "border-success bg-success"
              : "border-border-strong bg-card active:bg-surface-elevated"
              }`}
          >
            {isAdded && (
              <Check size={17} color={colors.success.foreground} strokeWidth={3} />
            )}
            <Text
              className={`text-sm font-bold ${isAdded ? "text-success-foreground" : "text-foreground"
                }`}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </Text>
          </Pressable>

          <Pressable
            onPress={onBuyNow}
            accessibilityRole="button"
            accessibilityLabel="Buy now"
            className="h-12 flex-1 items-center justify-center rounded-xl bg-primary active:bg-primary-dark"
          >
            <Text className="text-sm font-bold text-primary-foreground">Buy Now</Text>
          </Pressable>
        </View>
      ) : (
        <View className="h-12 items-center justify-center rounded-xl border border-border bg-card opacity-60">
          <Text className="text-sm font-bold text-muted-foreground">Out of Stock</Text>
        </View>
      )}
    </View>
  );
}
