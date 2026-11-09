import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SwipeableTabScreen from "@/components/SwipeableTabScreen";


export default function Account() {
  return (
    <SwipeableTabScreen index={4}>
      <SafeAreaView className="flex-1 bg-slate-950">
        <View className="flex-1 items-center justify-center">
          <Text className="text-3xl font-bold text-orange-500">
            Account Screen
          </Text>
          <Text className="mt-2 text-base text-white">
            Safe Area is working 🚀
          </Text>
        </View>
      </SafeAreaView>
    </SwipeableTabScreen>
  );
}
