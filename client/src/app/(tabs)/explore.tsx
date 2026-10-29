import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreScreen() {
    return (
        <SafeAreaView className="h-screen items-center justify-center bg-background">
            <Text className="text-xl font-bold text-foreground text-center">
                Explore Page
            </Text>
        </SafeAreaView>
    );
}