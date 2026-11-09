
import { Tabs } from "expo-router";
import {
    House,
    LayoutGrid,
    Heart,
    ShoppingBag,
    UserRound,
} from "lucide-react-native";
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationBar } from "expo-navigation-bar";
import { Platform } from "react-native";
import CustomHeader from "@/components/CustomHeader";

const BG_COLOR = "#020617"; // slate-950
const ACTIVE_COLOR = "#F97316"; // orange-500
const INACTIVE_COLOR = "#94A3B8"; // slate-400

function TabNavigator() {
    const insets = useSafeAreaInsets();
    return (
        <>
            {Platform.OS === "android" && (
                <NavigationBar style="dark" />
            )}
            <Tabs
                screenOptions={{
                    // headerShown: false,
                    headerShown: true,
                    header: () => <CustomHeader />,

                    tabBarActiveTintColor: ACTIVE_COLOR,
                    tabBarInactiveTintColor: INACTIVE_COLOR,

                    tabBarShowLabel: true,

                    tabBarLabelStyle: {
                        fontSize: 11,
                        fontWeight: "600",
                        marginTop: 2,
                    },

                    tabBarIconStyle: {
                        marginTop: 4,
                    },

                    tabBarStyle: {
                        backgroundColor: BG_COLOR,
                        borderTopColor: "#1E293B",
                        borderTopWidth: 1,
                        paddingBottom: Math.max(insets.bottom, 5),
                        height: 50 + insets.bottom,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <House size={22} color={color} strokeWidth={focused ? 2.5 : 2} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="categories"
                    options={{
                        title: "Categories",
                        tabBarIcon: ({ color, focused }) => (
                            <LayoutGrid size={22} color={color} strokeWidth={focused ? 2.5 : 2} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="wishlist"
                    options={{
                        title: "Wishlist",
                        tabBarIcon: ({ color, focused }) => (
                            <Heart size={22} color={color} strokeWidth={focused ? 2.5 : 2} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="cart"
                    options={{
                        title: "Cart",
                        tabBarIcon: ({ color, focused }) => (
                            <ShoppingBag size={22} color={color} strokeWidth={focused ? 2.5 : 2} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="account"
                    options={{
                        title: "Account",
                        tabBarIcon: ({ color, focused }) => (
                            <UserRound size={22} color={color} strokeWidth={focused ? 2.5 : 2} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}

export default function TabLayout() {
    return (
        <SafeAreaProvider>
            <TabNavigator />
        </SafeAreaProvider>
    );
}
