import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { router } from "expo-router";
import {
  ShoppingBag,
  ArrowRight,
  Tag,
} from "lucide-react-native";

import CartItem, { CartProduct } from "@/components/CartItem";

const TAX_RATE = 0.02;
const DELIVERY_FEE = 250;
import SwipeableTabScreen from "@/components/SwipeableTabScreen";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: "1",
      name: "Premium Casual Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      price: 4500,
      quantity: 2,
    },
    {
      id: "2",
      name: "Classic Wrist Watch",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      price: 3200,
      quantity: 1,
    },
  ]);
  const [discount, setDiscount] = useState(0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = cartTotal * TAX_RATE;
  const delivery = cartItems.length > 0 ? DELIVERY_FEE : 0;
  const subtotal = cartTotal + tax + delivery - discount;

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
    setDiscount(0);
  };

  const handleCheckout = () => {
    Alert.alert(
      "Checkout",
      `Your order total is Rs. ${subtotal.toLocaleString("en-PK", {
        maximumFractionDigits: 2,
      })}`
    );
  };

  const formatPrice = (amount: number) =>
    `Rs. ${amount.toLocaleString("en-PK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  // Empty cart screen
  if (cartItems.length === 0) {
    return (
      <View className="flex-1 bg-[#020617] items-center justify-center px-8">
        <View className="w-28 h-28 rounded-full bg-[#0F172A] border border-[#1E293B] items-center justify-center">
          <ShoppingBag size={48} color="#F97316" strokeWidth={1.5} />
        </View>

        <Text className="text-white text-2xl font-bold mt-7">
          Your cart is empty
        </Text>

        <Text className="text-slate-400 text-sm text-center leading-6 mt-3">
          You haven't added anything to your cart yet.
          Discover our products and find something you love!
        </Text>

        <Pressable
          onPress={() => router.navigate("/(tabs)")}
          className="bg-orange-500 rounded-xl px-8 py-4 mt-8 flex-row items-center"
        >
          <Text className="text-white font-bold mr-2">
            Start Shopping
          </Text>
          <ArrowRight size={18} color="#FFFFFF" />
        </Pressable>
      </View>
    );
  }

  return (
    <SwipeableTabScreen index={3}>
      <View className="flex-1 bg-[#020617]">
        {/* Product list */}
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
          }}
          ListHeaderComponent={
            <View className="mb-5">
              <Text className="text-2xl font-bold text-white">
                My Cart
              </Text>
              <Text className="text-sm text-slate-400 mt-1">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          )}
        />

        {/* Promo and order summary */}
        <View className="bg-[#0F172A] border-t border-[#1E293B] px-4 pt-4 pb-5">
          {/* Price breakdown */}
          <View className="gap-3">
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

            <View className="flex-row justify-between">
              <Text className="text-slate-400 text-sm">Promo discount</Text>
              <Text className="text-green-400 text-sm font-medium">
                - {formatPrice(discount)}
              </Text>
            </View>
          </View>

          <View className="border-t border-[#334155] mt-4 pt-4 flex-row justify-between items-center">
            <Text className="text-white font-bold text-base">
              Subtotal
            </Text>
            <Text className="text-orange-500 text-xl font-bold">
              {formatPrice(subtotal)}
            </Text>
          </View>

          {/* Checkout button */}
          <Pressable
            onPress={handleCheckout}
            className="bg-orange-500 rounded-xl py-4 mt-5 flex-row items-center justify-center active:opacity-80"
          >
            <Text className="text-white font-bold text-base mr-2">
              Proceed to Checkout
            </Text>
            <ArrowRight size={19} color="#FFFFFF" />
          </Pressable>
        </View>
      </View>
    </SwipeableTabScreen>
  );
}
