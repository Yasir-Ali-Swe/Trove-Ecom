import { Pressable, Text, View } from "react-native";
import { Heart, ShoppingBag } from "lucide-react-native";
import { router } from "expo-router";

export default function EmptyWishlist() {
    return (
        <View className="flex-1 items-center justify-center px-8 py-20">
            <View className="mb-6 h-28 w-28 items-center justify-center rounded-full bg-orange-500/10">
                <Heart size={52} color="#F97316" />
            </View>

            <Text className="text-xl font-bold text-white">
                Your wishlist is empty
            </Text>

            <Text className="mt-3 text-center text-sm leading-6 text-slate-400">
                You haven't added any products to your wishlist yet.
                Explore our collection and save your favorite items here.
            </Text>

            <Pressable
                onPress={() => router.back()}
                className="mt-7 flex-row items-center gap-2 rounded-md bg-orange-500 px-6 py-4 active:bg-orange-600"
            >
                <ShoppingBag size={18} color="#FFFFFF" />

                <Text className="font-bold text-white">
                    Start Shopping
                </Text>
            </Pressable>
        </View>
    );
}