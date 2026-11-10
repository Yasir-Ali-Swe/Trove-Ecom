import { Pressable } from "react-native";
import { Heart } from "lucide-react-native";

interface WishlistHeartButtonProps {
    isWishlisted: boolean;
    onPress: () => void;
}

export default function WishlistHeartButton({
    isWishlisted,
    onPress,
}: WishlistHeartButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            className="h-9 w-9 items-center justify-center rounded-full bg-slate-900/80"
        >
            <Heart
                size={19}
                color={isWishlisted ? "#F97316" : "#FFFFFF"}
                fill={isWishlisted ? "#F97316" : "transparent"}
            />
        </Pressable>
    );
}