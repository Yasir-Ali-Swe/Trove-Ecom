import { View, Text, Pressable, Image } from "react-native";
import { Minus, Plus, Trash2 } from "lucide-react-native";
import type { CartItemProps } from "@/types/cart";
import { formatPrice } from "@/utils/format";
import { colors } from "@/theme";

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <View className="flex-row items-center gap-3 py-4 border-b border-border">
      <Image
        source={{ uri: item.image }}
        className="w-19 h-19 rounded-xl bg-surface border border-border"
        resizeMode="cover"
      />

      <View className="flex-1 gap-2">
        <Text
          className="text-foreground font-semibold text-sm"
          numberOfLines={2}
        >
          {item.name}
        </Text>

        <View className="flex-row items-center gap-3">
          <Pressable
            disabled={item.quantity <= 1}
            onPress={() => onQuantityChange(item.id, item.quantity - 1)}
            className={`w-7 h-7 rounded-lg border border-border-strong items-center justify-center ${item.quantity <= 1 ? "opacity-30" : "active:bg-surface-elevated"
              }`}
          >
            <Minus size={14} color={colors.foreground.DEFAULT} />
          </Pressable>

          <Text className="text-foreground font-bold text-sm min-w-4 text-center">
            {item.quantity}
          </Text>

          <Pressable
            onPress={() => onQuantityChange(item.id, item.quantity + 1)}
            className="w-7 h-7 rounded-lg bg-primary items-center justify-center active:bg-primary-dark"
          >
            <Plus size={14} color={colors.primary.foreground} />
          </Pressable>
        </View>
      </View>

      <View className="items-end justify-between self-stretch py-1">
        <Pressable onPress={() => onRemove(item.id)} hitSlop={8}>
          <Trash2 size={16} color={colors.destructive.DEFAULT} />
        </Pressable>

        <Text className="text-foreground font-bold text-sm">
          {formatPrice(item.price * item.quantity)}
        </Text>
      </View>
    </View>
  );
}
