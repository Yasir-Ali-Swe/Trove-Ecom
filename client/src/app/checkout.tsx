import { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { ArrowLeft, ShieldCheck } from "lucide-react-native";

import CheckoutInput from "@/components/CheckoutInput";
import PaymentMethodCard from "@/components/PaymentMethodCard";

const ACTIVE_COLOR = "#F97316";

export default function Checkout() {
    // Demo values: replace these with the authenticated user's profile data.
    const [customerName, setCustomerName] = useState("Yasir Ali");
    const [customerNumber, setCustomerNumber] = useState("+92 300 1234567");
    const [customerAddress, setCustomerAddress] = useState(
        "Faisalabad, Pakistan"
    );

    const [notes, setNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("COD");

    // Demo total: replace with the total from your shared cart state.
    const total = 10;

    const handleConfirmOrder = () => {
        if (!customerName.trim()) {
            Alert.alert("Missing information", "Please enter your name.");
            return;
        }

        if (!customerNumber.trim()) {
            Alert.alert("Missing information", "Please enter your phone number.");
            return;
        }

        if (!customerAddress.trim()) {
            Alert.alert("Missing information", "Please enter your delivery address.");
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

        // TODO: Send the order details to your backend here.
    };

    return (
        <SafeAreaView className="flex-1 bg-slate-950" edges={["top", "bottom"]}>
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
                    contentContainerStyle={{ padding: 20, paddingBottom: 30 }}
                >
                    {/* Customer Information */}
                    <View className="mb-6">
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
                    <View className="mb-7">
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
                    <View className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-6">
                        <Text className="text-white text-lg font-bold mb-4">
                            Order Summary
                        </Text>

                        <View className="flex-row justify-between items-center mb-3">
                            <Text className="text-slate-400 text-sm">Payment Method</Text>
                            <Text className="text-white text-sm font-medium">
                                Cash on Delivery
                            </Text>
                        </View>

                        <View className="h-px bg-slate-800 my-2" />

                        <View className="flex-row justify-between items-center mt-2">
                            <Text className="text-white text-base font-bold">
                                Total Amount
                            </Text>

                            <Text
                                className="text-orange-500 text-2xl font-bold"
                                style={{ color: ACTIVE_COLOR }}
                            >
                                ${total.toFixed(2)}
                            </Text>
                        </View>
                    </View>

                    {/* Confirm Order */}
                    <Pressable
                        onPress={handleConfirmOrder}
                        className="bg-orange-500 h-14 rounded-xl flex-row items-center justify-center active:opacity-80"
                    >
                        <ShieldCheck size={21} color="#FFFFFF" />

                        <Text className="text-white font-bold text-base ml-2">
                            Confirm Order
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