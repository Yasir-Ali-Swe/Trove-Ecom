import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

import { store } from "@/store";
import { ThemeProvider, useTheme } from "@/theme";
import "../global.css";

function RootStack() {
  const { colors, isDark } = useTheme();

  const headerOptions = {
    headerShown: true,
    headerBackTitle: "Back",
    headerStyle: { backgroundColor: colors.background },
    headerTintColor: colors.foreground.DEFAULT,
    headerTitleStyle: {
      color: colors.foreground.DEFAULT,
      fontWeight: "600" as const,
    },
  };

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="products" options={{ title: "Products" }} />
        <Stack.Screen name="products/[id]" options={{ title: "Product Details" }} />
        <Stack.Screen name="search" options={{ title: "Search" }} />
        <Stack.Screen
          name="notifications/index"
          options={{ ...headerOptions, title: "Notifications" }}
        />
        <Stack.Screen
          name="profile/index"
          options={{ ...headerOptions, title: "Profile" }}
        />
        <Stack.Screen
          name="orders/index"
          options={{ ...headerOptions, title: "My Orders" }}
        />
        <Stack.Screen
          name="orders/[id]"
          options={{ ...headerOptions, title: "Order Details" }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ThemeProvider>
            <RootStack />
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}