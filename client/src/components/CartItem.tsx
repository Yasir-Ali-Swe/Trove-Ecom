import { View, Text, Pressable, Image } from "react-native";
import { Minus, Plus, Trash2 } from "lucide-react-native";

export type CartProduct = {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

type Props = {
    item: CartProduct;
    onQuantityChange: (id: string, quantity: number) => void;
    onRemove: (id: string) => void;
};

export default function CartItem({
    item,
    onQuantityChange,
    onRemove,
}: Props) {
    const formatPrice = (amount: number) =>
        `Rs. ${amount.toLocaleString("en-PK", {
            maximumFractionDigits: 2,
        })}`;

    return (
        <View className="flex-row items-center gap-3 py-4 border-b border-[#1E293B]">

            {/* Product Image */}
            <Image
                source={{ uri: item.image }}
                className="w-[76px] h-[76px] rounded-xl bg-[#0F172A]"
                resizeMode="cover"
            />

            {/* Product Details */}
            <View className="flex-1 gap-2">
                <Text
                    className="text-white font-semibold text-sm"
                    numberOfLines={2}
                >
                    {item.name}
                </Text>

                {/* Quantity Controls */}
                <View className="flex-row items-center gap-3">

                    <Pressable
                        disabled={item.quantity <= 1}
                        onPress={() =>
                            onQuantityChange(item.id, item.quantity - 1)
                        }
                        className={`w-8 h-8 rounded-lg border border-[#334155] items-center justify-center ${item.quantity <= 1 ? "opacity-40" : ""
                            }`}
                    >
                        <Minus size={15} color="#FFFFFF" />
                    </Pressable>

                    <Text className="text-white font-bold text-sm min-w-4 text-center">
                        {item.quantity}
                    </Text>

                    <Pressable
                        onPress={() =>
                            onQuantityChange(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 rounded-lg bg-orange-500 items-center justify-center active:opacity-80"
                    >
                        <Plus size={15} color="#FFFFFF" />
                    </Pressable>

                </View>
            </View>

            {/* Price and Remove */}
            <View className="items-end justify-between self-stretch py-1">

                <Pressable
                    onPress={() => onRemove(item.id)}
                    hitSlop={8}
                >
                    <Trash2 size={17} color="#EF4444" />
                </Pressable>

                <Text className="text-white font-bold text-sm">
                    {formatPrice(item.price * item.quantity)}
                </Text>

            </View>
        </View>
    );
}
