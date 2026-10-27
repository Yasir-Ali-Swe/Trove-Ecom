import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-bold text-foreground">Sign In</Text>
            </View>
        </SafeAreaView>
    );
}