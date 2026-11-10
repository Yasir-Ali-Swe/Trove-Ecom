import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { ShoppingBag, ArrowRight } from "lucide-react-native";

export default function EmptyCart() {
    return (
        <View className="flex-1 bg-[#020617] items-center justify-center px-8">
            <View className="w-28 h-28 rounded-full bg-[#0F172A] border border-[#1E293B] items-center justify-center">
                <ShoppingBag size={48} color="#F97316" strokeWidth={1.5} />
            </View>

            <Text className="text-white text-2xl font-bold mt-7">
                Your cart is empty
            </Text>

            <Text className="text-slate-400 text-sm text-center leading-6 mt-3">
                You haven't added anything to your cart yet. Discover our products and
                find something you love!
            </Text>

            <Pressable
                onPress={() => router.navigate("/(tabs)")}
                className="bg-orange-500 rounded-xl px-8 py-4 mt-8 flex-row items-center active:opacity-80"
            >
                <Text className="text-white font-bold mr-2">Start Shopping</Text>
                <ArrowRight size={18} color="#FFFFFF" />
            </Pressable>
        </View>
    );
}