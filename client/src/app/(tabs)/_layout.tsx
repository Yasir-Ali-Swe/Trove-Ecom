import { Tabs } from "expo-router";
import {
    Home,
    Compass,
    Heart,
    ShoppingCart,
    User,
} from "lucide-react-native";
import { useColorScheme } from "nativewind";

export default function TabLayout() {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <Tabs
            screenOptions={{
                headerShown: false,

                tabBarActiveTintColor: isDark ? "#60a5fa" : "#2563eb",
                tabBarInactiveTintColor: isDark ? "#9ca3af" : "#6b7280",

                tabBarStyle: {
                    backgroundColor: isDark ? "#030712" : "#ffffff",
                    borderTopColor: isDark ? "#374151" : "#e5e7eb",
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Home size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color, size }) => (
                        <Compass size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="wishlist"
                options={{
                    title: "Wishlist",
                    tabBarIcon: ({ color, size }) => (
                        <Heart size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => (
                        <ShoppingCart size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <User size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}