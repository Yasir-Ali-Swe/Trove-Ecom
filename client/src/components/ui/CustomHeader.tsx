import { View, Text, Pressable } from "react-native";
import { Bell } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import UserAvatar from "react-native-user-avatar";
import { colors } from "@/theme";

export default function CustomHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-background"
      style={{
        paddingTop: insets.top,
      }}
    >
      <View className="px-4 h-[60px] flex-row items-center justify-between border-b border-border">
        {/* App Logo & Name */}
        <Pressable
          onPress={() => router.navigate("/(tabs)")}
          className="flex-row items-center gap-1.5"
        >
          <Text className="text-2xl font-black text-primary tracking-tight">
            Vibeo
          </Text>
          <View className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
        </Pressable>

        {/* Header Actions */}
        <View className="flex-row items-center gap-4">
          {/* Notifications */}
          <Pressable
            onPress={() => router.push("/notifications")}
            hitSlop={10}
            className="w-9 h-9 rounded-full bg-surface border border-border items-center justify-center active:opacity-70"
          >
            <Bell size={18} color={colors.muted.foreground} strokeWidth={2} />
          </Pressable>
          {/* User Profile */}
          <Pressable
            onPress={() => router.push("/profile")}
            hitSlop={10}
            className="active:opacity-80"
          >
            <UserAvatar
              size={30}
              name="Yasir Ali"
              bgColor={colors.surface.elevated}
              textColor={colors.foreground.DEFAULT}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
