/* eslint-disable react-hooks/immutability */
import { Pressable } from "react-native";
import { Heart } from "lucide-react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { colors } from "@/theme";

interface WishlistHeartButtonProps {
  isWishlisted: boolean;
  onPress: () => void;
  size?: number;
}

export default function WishlistHeartButton({
  isWishlisted,
  onPress,
  size = 18,
}: WishlistHeartButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSequence(
      withSpring(1.3, { damping: 4, stiffness: 300 }),
      withSpring(1, { damping: 6, stiffness: 200 })
    );
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={8}
      className="h-8 w-8 items-center justify-center rounded-full bg-background/75 border border-border/80 active:opacity-70"
    >
      <Animated.View style={animatedStyle}>
        <Heart
          size={size}
          color={isWishlisted ? colors.primary.DEFAULT : colors.foreground.DEFAULT}
          fill={isWishlisted ? colors.primary.DEFAULT : "transparent"}
          strokeWidth={2}
        />
      </Animated.View>
    </Pressable>
  );
}
