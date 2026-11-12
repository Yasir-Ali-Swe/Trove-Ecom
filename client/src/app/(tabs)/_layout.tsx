import { Platform, View } from "react-native";
import { Tabs, usePathname, router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationBar } from "expo-navigation-bar";
import {
    Gesture,
    GestureDetector,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

import {
    House,
    LayoutGrid,
    Heart,
    ShoppingCart,
    UserRound,
} from "lucide-react-native";
import CustomHeader from "@/components/ui/CustomHeader";
import { useTheme } from "@/theme";
import { useAppSelector, selectCartTotalCount } from "@/store";

// Order MUST match the visual tab order
const TAB_ROUTES = [
    "/",
    "/categories",
    "/wishlist",
    "/cart",
    "/account",
] as const;

const SWIPE_THRESHOLD = 80;

export default function TabLayout() {
    const { colors, isDark } = useTheme();
    const cartCount = useAppSelector(selectCartTotalCount);
    const insets = useSafeAreaInsets();
    const pathname = usePathname();
    const currentIndex = TAB_ROUTES.findIndex(
        (route) =>
            pathname === route ||
            pathname === route.replace(/\/$/, "") ||
            (route === "/" && (pathname === "" || pathname === "/"))
    );

    const goToIndex = (index: number) => {
        if (index >= 0 && index < TAB_ROUTES.length) {
            router.navigate(TAB_ROUTES[index]);
        }
    };

    const swipeGesture = Gesture.Pan()
        // Activate only after clear horizontal movement
        .activeOffsetX([-25, 25])
        // Give up if the user starts scrolling vertically
        .failOffsetY([-20, 20])
        .onEnd((event) => {
            const dx = event.translationX;
            if (Math.abs(dx) < SWIPE_THRESHOLD) return;

            // Worklet runs on UI thread — bounce to JS thread for router calls
            if (dx < 0 && currentIndex < TAB_ROUTES.length - 1) {
                runOnJS(goToIndex)(currentIndex + 1);
            } else if (dx > 0 && currentIndex > 0) {
                runOnJS(goToIndex)(currentIndex - 1);
            }
        });

    return (
        <>
            {Platform.OS === "android" && <NavigationBar style={isDark ? "dark" : "light"} />}

            <GestureDetector gesture={swipeGesture}>
                <View style={{ flex: 1 }} collapsable={false}>
                    <Tabs
                        screenOptions={{
                            headerShown: true,
                            header: () => <CustomHeader />,

                            // ⚠️ Disable default animations so swipe feels snappy
                            animation: "none",

                            tabBarActiveTintColor: colors.primary.DEFAULT,
                            tabBarInactiveTintColor: colors.muted.foreground,
                            tabBarShowLabel: true,

                            tabBarLabelStyle: {
                                fontSize: 11,
                                fontWeight: "600",
                                marginTop: 2,
                            },
                            tabBarIconStyle: { marginTop: 4 },

                            tabBarStyle: {
                                backgroundColor: colors.background,
                                borderTopColor: colors.border.DEFAULT,
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
                                    <House
                                        size={22}
                                        color={color}
                                        strokeWidth={focused ? 2.5 : 2}
                                    />
                                ),
                            }}
                        />
                        <Tabs.Screen
                            name="categories"
                            options={{
                                title: "Categories",
                                tabBarIcon: ({ color, focused }) => (
                                    <LayoutGrid
                                        size={22}
                                        color={color}
                                        strokeWidth={focused ? 2.5 : 2}
                                    />
                                ),
                            }}
                        />
                        <Tabs.Screen
                            name="wishlist"
                            options={{
                                title: "Wishlist",
                                tabBarIcon: ({ color, focused }) => (
                                    <Heart
                                        size={22}
                                        color={color}
                                        strokeWidth={focused ? 2.5 : 2}
                                    />
                                ),
                            }}
                        />
                        <Tabs.Screen
                            name="cart"
                            options={{
                                title: "Cart",
                                tabBarBadge: cartCount > 0 ? cartCount : undefined,
                                tabBarBadgeStyle: {
                                    backgroundColor: colors.primary.DEFAULT,
                                    color: colors.primary.foreground,
                                    fontSize: 10,
                                    fontWeight: "bold",
                                },
                                tabBarIcon: ({ color, focused }) => (
                                    <ShoppingCart
                                        size={22}
                                        color={color}
                                        strokeWidth={focused ? 2.5 : 2}
                                    />
                                ),
                            }}
                        />
                        <Tabs.Screen
                            name="account"
                            options={{
                                title: "Account",
                                tabBarIcon: ({ color, focused }) => (
                                    <UserRound
                                        size={22}
                                        color={color}
                                        strokeWidth={focused ? 2.5 : 2}
                                    />
                                ),
                            }}
                        />
                    </Tabs>
                </View>
            </GestureDetector>
        </>
    );
}