import { Image, Pressable, Text, View } from "react-native";
import { Minus, Plus, X } from "lucide-react-native";

export interface CartProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
}

interface CartItemProps {
    item: CartProduct;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
}

export default function CartItem({
    item,
    onQuantityChange,
    onRemove,
}: CartItemProps) {
    return (
        <View className="flex-row items-center bg-[#0F172A] border border-[#1E293B] rounded-xl p-3 mb-3">
            {/* Quantity controls */}
            <View className="items-center justify-between bg-[#020617] border border-[#334155] rounded-xl w-10 h-[76px] py-1">
                <Pressable
                    onPress={() =>
                        onQuantityChange(item.id, item.quantity + 1)
                    }
                    hitSlop={5}
                >
                    <Plus size={14} color="#94A3B8" />
                </Pressable>

                <Text className="text-white font-semibold text-sm">
                    {item.quantity}
                </Text>

                <Pressable
                    onPress={() =>
                        onQuantityChange(
                            item.id,
                            Math.max(1, item.quantity - 1)
                        )
                    }
                    hitSlop={5}
                >
                    <Minus size={14} color="#94A3B8" />
                </Pressable>
            </View>

            {/* Product image */}
            <Image
                source={{ uri: item.image }}
                className="w-[76px] h-[76px] rounded-xl mx-3 bg-[#1E293B]"
                resizeMode="cover"
            />

            {/* Product details */}
            <View className="flex-1 justify-center">
                <Text
                    className="text-white font-semibold text-sm"
                    numberOfLines={2}
                >
                    {item.name}
                </Text>

                <Text className="text-orange-500 font-bold text-sm mt-1">
                    Rs. {item.price.toLocaleString()}
                </Text>

                <Text className="text-slate-400 text-xs mt-2">
                    {item.quantity} × Rs. {item.price.toLocaleString()}
                </Text>
            </View>

            {/* Remove button */}
            <Pressable
                onPress={() => onRemove(item.id)}
                className="w-7 h-7 rounded-lg bg-red-500/10 items-center justify-center self-start"
                hitSlop={5}
            >
                <X size={15} color="#F87171" />
            </Pressable>
        </View>
    );
}
