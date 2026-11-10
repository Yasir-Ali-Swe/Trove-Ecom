import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-bold text-orange-500">
          Home Screen
        </Text>
        <Text className="mt-2 text-base text-white">
          Safe Area is working 🚀
        </Text>
      </View>
    </SafeAreaView>
  );
}
