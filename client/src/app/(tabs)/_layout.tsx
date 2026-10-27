
import { Tabs } from "expo-router";
import {
    Home,
    Search,
    ShoppingCart,
    Package,
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
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <Search size={size} color={color} />
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
                name="orders"
                options={{
                    title: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <Package size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <User size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
