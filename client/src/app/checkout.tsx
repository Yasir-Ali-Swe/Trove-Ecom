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

const ACTIVE_COLOR = "#F97316";

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
        `Rs. ${amount.toLocaleString("en-PK")}`;

    // Confirm Order
    const handleConfirmOrder = () => {
        if (!customerName.trim()) {
            Alert.alert("Missing information", "Please enter your name.");
            return;
        }

        if (!customerNumber.trim()) {
            Alert.alert(
                "Missing information",
                "Please enter your phone number."
            );
            return;
        }

        if (!customerAddress.trim()) {
            Alert.alert(
                "Missing information",
                "Please enter your delivery address."
            );
            return;
        }

        Alert.alert(
            "Order confirmed!",
            "Your order has been submitted successfully.",
            [
                {
                    text: "Continue",
                    onPress: () => router.replace("/(tabs)"),
                },
            ]
        );

        // TODO: Send order details to your backend.
    };

    return (
        <SafeAreaView
            className="flex-1 bg-slate-950"
            edges={["top", "bottom"]}
        >
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                {/* Header */}
                <View className="flex-row items-center px-5 py-4 border-b border-slate-800">

                    <Pressable
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-full bg-slate-900 items-center justify-center"
                    >
                        <ArrowLeft size={22} color="#FFFFFF" />
                    </Pressable>

                    <Text className="text-white text-xl font-bold ml-4">
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

                        <Text className="text-white text-lg font-bold mb-1">
                            Delivery Information
                        </Text>

                        <Text className="text-slate-400 text-sm mb-5">
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

                        <Text className="text-white text-lg font-bold mb-1">
                            Payment Method
                        </Text>

                        <Text className="text-slate-400 text-sm mb-4">
                            Select how you want to pay.
                        </Text>

                        <PaymentMethodCard
                            selected={paymentMethod === "COD"}
                            onPress={() => setPaymentMethod("COD")}
                        />

                    </View>

                    {/* Order Notes */}
                    <View className="mb-8">

                        <Text className="text-white text-lg font-bold mb-1">
                            Additional Notes
                        </Text>

                        <Text className="text-slate-400 text-sm mb-4">
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

                        <Text className="text-white text-lg font-bold mb-5 text-center">
                            Order Summary
                        </Text>

                        {/* Table Header */}
                        <View className="flex-row items-center pb-3 border-b border-slate-700">

                            <Text className="text-slate-400 text-[10px] font-semibold flex-1">
                                Product
                            </Text>

                            <Text className="text-slate-400 text-[10px] font-semibold w-[55px] text-center">
                                Unit Price
                            </Text>

                            <Text className="text-slate-400 text-[10px] font-semibold w-[42px] text-center">
                                Qty
                            </Text>

                            <Text className="text-slate-400 text-[10px] font-semibold w-[88px] text-right">
                                Subtotal
                            </Text>

                        </View>

                        {/* Product Rows */}
                        {orderItems.map((item) => (
                            <View
                                key={item.id}
                                className="flex-row items-center py-4 border-b border-slate-800"
                            >

                                {/* Product Image and Name */}
                                <View className="flex-1 flex-row items-center gap-2 pr-1">

                                    <Image
                                        source={{ uri: item.image }}
                                        className="w-10 h-10 rounded-lg bg-slate-900"
                                        resizeMode="cover"
                                    />

                                    <Text
                                        className="text-white text-[10px] font-medium flex-1"
                                        numberOfLines={2}
                                    >
                                        {item.name}
                                    </Text>

                                </View>

                                {/* Unit Price */}
                                <Text className="text-white text-[10px] w-[55px] text-center">
                                    {formatPrice(item.price)}
                                </Text>

                                {/* Quantity */}
                                <Text className="text-white text-[11px] font-semibold w-[42px] text-center">
                                    {item.quantity}
                                </Text>

                                {/* Subtotal */}
                                <View className="w-[88px] items-end">

                                    <Text className="text-slate-400 text-[9px]">
                                        {item.quantity} × {item.price.toLocaleString("en-PK")}
                                    </Text>

                                    <Text className="text-white text-[11px] font-bold mt-1">
                                        {formatPrice(item.price * item.quantity)}
                                    </Text>

                                </View>

                            </View>
                        ))}

                        {/* Total */}
                        <View className="flex-row justify-between items-center py-5 border-b border-slate-700">

                            <Text className="text-white text-base font-bold">
                                Total
                            </Text>

                            <Text className="text-orange-500 text-xl font-bold">
                                {formatPrice(total)}
                            </Text>

                        </View>

                        {/* Delivery Method */}
                        <View className="flex-row justify-between items-center py-4">

                            <Text className="text-slate-400 text-sm">
                                Delivery
                            </Text>

                            <Text className="text-white text-sm font-semibold">
                                {paymentMethod === "COD"
                                    ? "Cash on Delivery"
                                    : paymentMethod}
                            </Text>

                        </View>

                    </View>

                    {/* Place Order Button */}
                    <Pressable
                        onPress={handleConfirmOrder}
                        className="bg-orange-500 h-14 rounded-md flex-row items-center justify-center active:opacity-80"
                        style={{ backgroundColor: ACTIVE_COLOR }}
                    >

                        <ShieldCheck size={21} color="#FFFFFF" />

                        <Text className="text-white font-bold text-base ml-2">
                            Place Order
                        </Text>

                    </Pressable>

                    <Text className="text-slate-500 text-xs text-center mt-4">
                        Please review your delivery information before confirming.
                    </Text>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
