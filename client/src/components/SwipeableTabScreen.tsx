import { ReactNode } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import {
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";

const TAB_ROUTES = [
    "/",
    "/categories",
    "/wishlist",
    "/cart",
    "/account",
] as const;

interface SwipeableTabScreenProps {
    index: number;
    children: ReactNode;
}

export default function SwipeableTabScreen({
    index,
    children,
}: SwipeableTabScreenProps) {
    const swipeGesture = Gesture.Pan()
        .activeOffsetX([-20, 20])
        .failOffsetY([-15, 15])
        .onEnd((event) => {
            if (Math.abs(event.translationX) < 80) return;

            if (event.translationX < 0) {
                if (index < TAB_ROUTES.length - 1) {
                    router.navigate(TAB_ROUTES[index + 1]);
                }
            } else {
                if (index > 0) {
                    router.navigate(TAB_ROUTES[index - 1]);
                }
            }
        });

    return (
        <GestureDetector gesture={swipeGesture}>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </GestureDetector>
    );
}
