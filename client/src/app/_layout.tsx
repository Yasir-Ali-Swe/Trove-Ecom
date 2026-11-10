import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

const BG_COLOR = "#020617";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: BG_COLOR }}>
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: BG_COLOR,
            },
          }}
        >
          <Stack.Screen
            name="notifications/index"
            options={{
              title: "Notifications",
              headerShown: true,
              headerBackTitle: "Back",
              headerStyle: {
                backgroundColor: BG_COLOR,
              },
              headerTintColor: "#ffffff",
              headerTitleStyle: {
                color: "#ffffff",
                fontWeight: "600",
              },
            }}
          />

          <Stack.Screen
            name="profile/index"
            options={{
              title: "Profile",
              headerShown: true,
              headerBackTitle: "Back",
              headerStyle: {
                backgroundColor: BG_COLOR,
              },
              headerTintColor: "#ffffff",
              headerTitleStyle: {
                color: "#ffffff",
                fontWeight: "600",
              },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
