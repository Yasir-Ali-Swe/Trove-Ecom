import { View, Text, FlatList, Pressable } from "react-native";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import CartItem from "./CartItem";
import type { CartWithItemsProps } from "@/types/cart";
import { formatPrice } from "@/utils/format";
import { useTheme } from "@/theme";
import {
  useAppSelector,
  selectCartSubtotal,
  selectCartTax,
  selectCartDeliveryFee,
  selectCartTotal,
  selectCartTotalCount,
} from "@/store";

export default function CartWithItems({
  cartItems,
  discount = 0,
  onQuantityChange,
  onRemove,
}: CartWithItemsProps) {
  const { colors } = useTheme();
  const cartTotal = useAppSelector(selectCartSubtotal);
  const tax = useAppSelector(selectCartTax);
  const delivery = useAppSelector(selectCartDeliveryFee);
  const subtotal = useAppSelector(selectCartTotal);
  const itemCount = useAppSelector(selectCartTotalCount);

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 40,
        }}
        ListHeaderComponent={
          <View className="mb-4">
            <Text className="text-2xl font-bold text-foreground">My Cart</Text>
            <Text className="text-sm text-muted-foreground mt-1">
              {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        )}
        ListFooterComponent={
          <View className="mt-4">
            <Text className="text-foreground text-lg font-bold mb-4">
              Cart Summary
            </Text>

            <View className="gap-3.5 bg-card p-4 rounded-lg border border-border">
              <View className="flex-row justify-between">
                <Text className="text-muted-foreground text-sm">Cart total</Text>
                <Text className="text-foreground text-sm font-medium">
                  {formatPrice(cartTotal)}
                </Text>
              </View>

              {discount > 0 && (
                <View className="flex-row justify-between">
                  <Text className="text-success text-sm">Discount</Text>
                  <Text className="text-success text-sm font-medium">
                    -{formatPrice(discount)}
                  </Text>
                </View>
              )}

              <View className="flex-row justify-between">
                <Text className="text-muted-foreground text-sm">Tax (2%)</Text>
                <Text className="text-foreground text-sm font-medium">
                  {formatPrice(tax)}
                </Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-muted-foreground text-sm">Delivery</Text>
                <Text className="text-foreground text-sm font-medium">
                  {formatPrice(delivery)}
                </Text>
              </View>

              <View className="border-t border-border pt-3 flex-row justify-between items-center">
                <Text className="text-foreground font-bold text-base">Total</Text>
                <Text className="text-primary text-xl font-bold">
                  {formatPrice(subtotal)}
                </Text>
              </View>
            </View>

            <Pressable
              onPress={() => router.push("/checkout")}
              className="bg-primary rounded-md py-4 mt-6 flex-row items-center justify-center active:bg-primary-dark"
            >
              <Text className="text-primary-foreground font-bold text-base mr-2">
                Proceed to Checkout
              </Text>
              <ArrowRight size={18} color={colors.primary.foreground} />
            </Pressable>
          </View>
        }
      />
    </View>
  );
}
