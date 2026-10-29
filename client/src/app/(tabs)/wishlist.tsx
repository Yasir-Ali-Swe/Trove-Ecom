import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WishlistScreen() {
    return (
        <SafeAreaView className="h-screen items-center justify-center bg-background">
            <Text className="text-xl font-bold text-foreground text-center">
                Wishlist Page
            </Text>
        </SafeAreaView>
    );
}