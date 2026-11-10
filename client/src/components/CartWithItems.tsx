import { View, Text, FlatList, Pressable } from "react-native";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import CartItem, { CartProduct } from "@/components/CartItem";

const TAX_RATE = 0.02;
const DELIVERY_FEE = 250;

interface CartWithItemsProps {
    cartItems: CartProduct[];
    discount?: number;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartWithItems({
    cartItems,
    discount = 0,
    onQuantityChange,
    onRemove,
}: CartWithItemsProps) {
    const cartTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const tax = cartTotal * TAX_RATE;
    const delivery = cartItems.length > 0 ? DELIVERY_FEE : 0;
    const subtotal = cartTotal + tax + delivery - discount;
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const formatPrice = (amount: number) =>
        `Rs. ${amount.toLocaleString("en-PK", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;

    return (
        <View className="flex-1 bg-[#020617]">
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 20,
                    paddingBottom: 35,
                }}

                ListHeaderComponent={
                    <View className="mb-5">
                        <Text className="text-2xl font-bold text-white">My Cart</Text>
                        <Text className="text-sm text-slate-400 mt-1">
                            {itemCount} items in your cart
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
                    <View className="mt-3">
                        <Text className="text-white text-lg font-bold mb-5 text-center">
                            Cart Summary
                        </Text>

                        <View className="gap-4">
                            <View className="flex-row justify-between">
                                <Text className="text-slate-400 text-sm">Cart total</Text>
                                <Text className="text-white text-sm font-medium">
                                    {formatPrice(cartTotal)}
                                </Text>
                            </View>

                            <View className="flex-row justify-between">
                                <Text className="text-slate-400 text-sm">Tax (2%)</Text>
                                <Text className="text-white text-sm font-medium">
                                    {formatPrice(tax)}
                                </Text>
                            </View>

                            <View className="flex-row justify-between">
                                <Text className="text-slate-400 text-sm">Delivery</Text>
                                <Text className="text-white text-sm font-medium">
                                    {formatPrice(delivery)}
                                </Text>
                            </View>
                        </View>

                        <View className="border-t border-[#334155] mt-5 pt-5 flex-row justify-between items-center">
                            <Text className="text-white font-bold text-base">Total</Text>
                            <Text className="text-orange-500 text-xl font-bold">
                                {formatPrice(subtotal)}
                            </Text>
                        </View>

                        <Pressable
                            onPress={() => router.push("/checkout" as any)}
                            className="bg-orange-500 rounded-md py-4 mt-6 flex-row items-center justify-center active:opacity-80"
                        >
                            <Text className="text-white font-bold text-base mr-2">
                                Proceed to Checkout
                            </Text>
                            <ArrowRight size={19} color="#FFFFFF" />
                        </Pressable>
                    </View>
                }
            />
        </View>
    );
}