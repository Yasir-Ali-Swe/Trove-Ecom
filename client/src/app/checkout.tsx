import { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
    ArrowLeft,
    ShieldCheck,
} from "lucide-react-native";

import CheckoutInput from "@/components/CheckoutInput";
import PaymentMethodCard from "@/components/PaymentMethodCard";
import { colors } from "@/theme";

// Demo order items - replace with your shared cart state
const orderItems = [
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
];

export default function Checkout() {
    // Customer Information
    const [customerName, setCustomerName] = useState("Yasir Ali");
    const [customerNumber, setCustomerNumber] = useState(
        "+92 300 1234567"
    );
    const [customerAddress, setCustomerAddress] = useState(
        "Faisalabad, Pakistan"
    );

    const [notes, setNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    // Price Calculations
    const total = orderItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const formatPrice = (amount: number) =>
        `Rs. ${amount.toLocaleString("en-PK", {
            maximumFractionDigits: 2,
        })}`;

    // Confirm Order Handler
    const handleConfirmOrder = () => {
        if (!customerName.trim()) {
            Alert.alert("Missing Info", "Please enter your full name.");
            return;
        }

        if (!customerNumber.trim()) {
            Alert.alert("Missing Info", "Please enter your phone number.");
            return;
        }

        if (!customerAddress.trim()) {
            Alert.alert("Missing Info", "Please enter your complete address.");
            return;
        }

        Alert.alert(
            "Order Confirmed!",
            `Thank you ${customerName}! Your order has been placed successfully.\n\nTotal: ${formatPrice(
                total
            )}\nPayment: ${paymentMethod === "COD" ? "Cash on Delivery" : paymentMethod
            }`,
            [
                {
                    text: "Done",
                    onPress: () => router.navigate("/(tabs)"),
                },
            ]
        );
    };

    return (
        <SafeAreaView
            className="flex-1 bg-background"
            edges={["top", "bottom"]}
        >
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                {/* Header */}
                <View className="flex-row items-center px-5 py-4 border-b border-border">
                    <Pressable
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-full bg-surface items-center justify-center active:opacity-75"
                    >
                        <ArrowLeft size={22} color={colors.foreground.DEFAULT} />
                    </Pressable>

                    <Text className="text-foreground text-xl font-bold ml-4">
                        Checkout
                    </Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        padding: 20,
                        paddingBottom: 35,
                    }}
                >
                    {/* Delivery Information */}
                    <View className="mb-7">
                        <Text className="text-foreground text-lg font-bold mb-1">
                            Delivery Information
                        </Text>

                        <Text className="text-muted-foreground text-sm mb-5">
                            Where should we deliver your order?
                        </Text>

                        <CheckoutInput
                            label="Customer Name"
                            value={customerName}
                            onChangeText={setCustomerName}
                            placeholder="Enter your full name"
                        />

                        <CheckoutInput
                            label="Customer Number"
                            value={customerNumber}
                            onChangeText={setCustomerNumber}
                            placeholder="Enter your phone number"
                            keyboardType="phone-pad"
                        />

                        <CheckoutInput
                            label="Customer Address"
                            value={customerAddress}
                            onChangeText={setCustomerAddress}
                            placeholder="Enter your complete address"
                            multiline
                        />
                    </View>

                    {/* Payment Method */}
                    <View className="mb-7">
                        <Text className="text-foreground text-lg font-bold mb-1">
                            Payment Method
                        </Text>

                        <Text className="text-muted-foreground text-sm mb-4">
                            Select how you want to pay.
                        </Text>

                        <PaymentMethodCard
                            selected={paymentMethod === "COD"}
                            onPress={() => setPaymentMethod("COD")}
                        />
                    </View>

                    {/* Order Notes */}
                    <View className="mb-8">
                        <Text className="text-foreground text-lg font-bold mb-1">
                            Additional Notes
                        </Text>

                        <Text className="text-muted-foreground text-sm mb-4">
                            Any special instructions for your order?
                        </Text>

                        <CheckoutInput
                            label="Order Notes (Optional)"
                            value={notes}
                            onChangeText={setNotes}
                            placeholder="Write your delivery instructions here..."
                            multiline
                        />
                    </View>

                    {/* Order Summary */}
                    <View className="mb-7">
                        <Text className="text-foreground text-lg font-bold mb-5 text-center">
                            Order Summary
                        </Text>

                        {/* Table Header */}
                        <View className="flex-row items-center pb-3 border-b border-border-strong">
                            <Text className="text-muted-foreground text-[10px] font-semibold flex-1">
                                Product
                            </Text>

                            <Text className="text-muted-foreground text-[10px] font-semibold w-[55px] text-center">
                                Unit Price
                            </Text>

                            <Text className="text-muted-foreground text-[10px] font-semibold w-[42px] text-center">
                                Qty
                            </Text>

                            <Text className="text-muted-foreground text-[10px] font-semibold w-[88px] text-right">
                                Subtotal
                            </Text>
                        </View>

                        {/* Product Rows */}
                        {orderItems.map((item) => (
                            <View
                                key={item.id}
                                className="flex-row items-center py-4 border-b border-border"
                            >
                                {/* Product Image and Name */}
                                <View className="flex-1 flex-row items-center gap-2 pr-1">
                                    <Image
                                        source={{ uri: item.image }}
                                        className="w-10 h-10 rounded-lg bg-surface"
                                        resizeMode="cover"
                                    />

                                    <Text
                                        className="text-foreground text-[10px] font-medium flex-1"
                                        numberOfLines={2}
                                    >
                                        {item.name}
                                    </Text>
                                </View>

                                {/* Unit Price */}
                                <Text className="text-foreground text-[10px] w-[55px] text-center">
                                    {formatPrice(item.price)}
                                </Text>

                                {/* Quantity */}
                                <Text className="text-foreground text-[11px] font-semibold w-[42px] text-center">
                                    {item.quantity}
                                </Text>

                                {/* Subtotal */}
                                <View className="w-[88px] items-end">
                                    <Text className="text-muted-foreground text-[9px]">
                                        {item.quantity} × {item.price.toLocaleString("en-PK")}
                                    </Text>

                                    <Text className="text-foreground text-[11px] font-bold mt-1">
                                        {formatPrice(item.price * item.quantity)}
                                    </Text>
                                </View>
                            </View>
                        ))}

                        {/* Total */}
                        <View className="flex-row justify-between items-center py-5 border-b border-border-strong">
                            <Text className="text-foreground text-base font-bold">
                                Total
                            </Text>

                            <Text className="text-primary text-xl font-bold">
                                {formatPrice(total)}
                            </Text>
                        </View>

                        {/* Delivery Method */}
                        <View className="flex-row justify-between items-center py-4">
                            <Text className="text-muted-foreground text-sm">
                                Delivery
                            </Text>

                            <Text className="text-foreground text-sm font-semibold">
                                {paymentMethod === "COD"
                                    ? "Cash on Delivery"
                                    : paymentMethod}
                            </Text>
                        </View>
                    </View>

                    {/* Place Order Button */}
                    <Pressable
                        onPress={handleConfirmOrder}
                        className="bg-primary h-14 rounded-md flex-row items-center justify-center active:bg-primary-dark"
                    >
                        <ShieldCheck size={21} color={colors.primary.foreground} />

                        <Text className="text-primary-foreground font-bold text-base ml-2">
                            Place Order
                        </Text>
                    </Pressable>

                    <Text className="text-muted-subtle text-xs text-center mt-4">
                        Please review your delivery information before confirming.
                    </Text>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
