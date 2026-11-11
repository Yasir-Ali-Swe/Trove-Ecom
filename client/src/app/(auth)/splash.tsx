import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-primary">
          Splash Screen
        </Text>
        <Text className="mt-2 text-base text-foreground">
          Safe Area is working 🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}
