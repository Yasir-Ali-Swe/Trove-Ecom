import { Image, Pressable, Text, View } from "react-native";
import { ShoppingBag } from "lucide-react-native";

import WishlistHeartButton from "./WishlistHeartButton";
import { WishlistProduct } from "@/types/wishlist";

interface WishlistItemProps {
    product: WishlistProduct;
    onRemove: (id: string) => void;
    onAddToCart: (product: WishlistProduct) => void;
}

export default function WishlistItem({
    product,
    onRemove,
    onAddToCart,
}: WishlistItemProps) {
    return (
        <View className="mb-4 flex-1 overflow-hidden rounded-md border border-slate-800 bg-slate-900">
            {/* Product Image */}
            <View className="relative">
                <Image
                    source={{ uri: product.image }}
                    className="h-44 w-full"
                    resizeMode="cover"
                />

                {/* Wishlist Heart */}
                <View className="absolute right-3 top-3">
                    <WishlistHeartButton
                        isWishlisted={true}
                        onPress={() => onRemove(product.id)}
                    />
                </View>
            </View>

            {/* Product Details */}
            <View className="p-3">
                <Text
                    numberOfLines={2}
                    className="min-h-10 text-sm font-semibold text-white"
                >
                    {product.name}
                </Text>

                <Text className="mt-2 text-base font-bold text-orange-500">
                    Rs. {product.price.toLocaleString("en-PK")}
                </Text>

                {/* Add to Cart */}
                <Pressable
                    onPress={() => onAddToCart(product)}
                    className="mt-3 flex-row items-center justify-center gap-2 rounded-md bg-orange-500 py-3 active:bg-orange-600"
                >
                    <ShoppingBag size={17} color="#FFFFFF" />

                    <Text className="text-xs font-bold text-white">
                        Add to Cart
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}