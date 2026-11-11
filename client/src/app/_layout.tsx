import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/store";
import { colors } from "@/theme";
import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: colors.background,
              },
            }}
          >
            <Stack.Screen
              name="products"
              options={{
                title: "Products",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="products/[id]"
              options={{
                title: "Product Details",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="search"
              options={{
                title: "Search",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="notifications/index"
              options={{
                title: "Notifications",
                headerShown: true,
                headerBackTitle: "Back",
                headerStyle: {
                  backgroundColor: colors.background,
                },
                headerTintColor: colors.foreground.DEFAULT,
                headerTitleStyle: {
                  color: colors.foreground.DEFAULT,
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
                  backgroundColor: colors.background,
                },
                headerTintColor: colors.foreground.DEFAULT,
                headerTitleStyle: {
                  color: colors.foreground.DEFAULT,
                  fontWeight: "600",
                },
              }}
            />
          </Stack>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
