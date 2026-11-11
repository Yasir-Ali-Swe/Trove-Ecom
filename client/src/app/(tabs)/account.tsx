import type { ReactNode } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  User,
  ShoppingBag,
  Bell,
  Moon,
  Sun,
  Pencil,
} from "lucide-react-native";

import AccountMenuItem from "@/components/account/AccountMenuItem";
import { ORDERS } from "@/constants/orders";
import { useTheme, type ThemeMode } from "@/theme";
import { withAlpha } from "@/utils/orders";

// TODO: replace with your real user data (store / API)
const USER = {
  name: "Yasir Ali",
  phone: "+92 300 1234567",
  photo: null as string | null,
};

const ACTIVE_STATUSES = ["pending", "processing", "shipped"];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const { colors } = useTheme();

  return (
    <View style={{ marginTop: 28 }}>
      <Text
        style={{
          color: colors.muted.foreground,
          fontSize: 12,
          fontWeight: "700",
          letterSpacing: 0.8,
          textTransform: "uppercase",
          marginBottom: 10,
          marginLeft: 4,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          borderRadius: 18,
          borderWidth: 1,
          borderColor: colors.border.DEFAULT,
          backgroundColor: colors.card.DEFAULT,
          overflow: "hidden",
        }}
      >
        {children}
      </View>
    </View>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 16 }}>
      <Text
        style={{
          color: colors.foreground.DEFAULT,
          fontSize: 22,
          fontWeight: "800",
          letterSpacing: -0.5,
        }}
      >
        {value}
      </Text>
      <Text style={{ color: colors.muted.foreground, fontSize: 12, marginTop: 2 }}>
        {label}
      </Text>
    </View>
  );
}

function ThemeOption({
  mode,
  label,
  icon: Icon,
}: {
  mode: ThemeMode;
  label: string;
  icon: typeof Sun;
}) {
  const { colors, mode: current, setMode } = useTheme();
  const selected = current === mode;

  return (
    <Pressable
      onPress={() => setMode(mode)}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={`${label} theme`}
      style={{
        flex: 1,
        height: 42,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 11,
        backgroundColor: selected ? colors.primary.DEFAULT : "transparent",
      }}
    >
      <Icon
        size={16}
        strokeWidth={2.25}
        color={selected ? colors.primary.foreground : colors.muted.foreground}
      />
      <Text
        style={{
          marginLeft: 8,
          fontSize: 14,
          fontWeight: "700",
          color: selected ? colors.primary.foreground : colors.muted.foreground,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function Account() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const totalOrders = ORDERS.length;
  const activeOrders = ORDERS.filter((o) => ACTIVE_STATUSES.includes(o.status)).length;
  const completedOrders = ORDERS.filter((o) => o.status === "completed").length;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: insets.top + 20,
        paddingBottom: 40,
      }}
    >
      {/* Title */}
      <Text
        style={{
          color: colors.foreground.DEFAULT,
          fontSize: 30,
          fontWeight: "800",
          letterSpacing: -0.8,
        }}
      >
        Account
      </Text>

      {/* Profile card */}
      <View
        style={{
          marginTop: 20,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: colors.border.DEFAULT,
          overflow: "hidden",
          backgroundColor: colors.card.DEFAULT,
        }}
      >
        <LinearGradient
          pointerEvents="none"
          colors={[withAlpha(colors.primary.DEFAULT, 0.2), withAlpha(colors.primary.DEFAULT, 0)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <View style={{ padding: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Avatar with accent ring */}
            <View
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                padding: 3,
                borderWidth: 2,
                borderColor: colors.primary.DEFAULT,
                marginRight: 16,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderRadius: 33,
                  overflow: "hidden",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.surface.elevated,
                }}
              >
                {USER.photo ? (
                  <Image
                    source={{ uri: USER.photo }}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                ) : getInitials(USER.name) ? (
                  <Text
                    style={{
                      color: colors.foreground.DEFAULT,
                      fontSize: 22,
                      fontWeight: "800",
                    }}
                  >
                    {getInitials(USER.name)}
                  </Text>
                ) : (
                  <User size={28} color={colors.muted.subtle} strokeWidth={1.75} />
                )}
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={1}
                style={{
                  color: colors.foreground.DEFAULT,
                  fontSize: 20,
                  fontWeight: "800",
                  letterSpacing: -0.3,
                }}
              >
                {USER.name}
              </Text>
              <Text
                numberOfLines={1}
                style={{ color: colors.muted.foreground, fontSize: 13, marginTop: 4 }}
              >
                {USER.phone}
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => router.push("/profile")}
            accessibilityRole="button"
            accessibilityLabel="Edit profile"
            style={({ pressed }) => ({
              height: 44,
              marginTop: 18,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border.strong,
              backgroundColor: pressed ? colors.surface.elevated : colors.surface.DEFAULT,
            })}
          >
            <Pencil size={15} color={colors.foreground.DEFAULT} strokeWidth={2.25} />
            <Text
              style={{
                color: colors.foreground.DEFAULT,
                fontSize: 14,
                fontWeight: "700",
                marginLeft: 8,
              }}
            >
              Edit profile
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Stats */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 14,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: colors.border.DEFAULT,
          backgroundColor: colors.card.DEFAULT,
        }}
      >
        <Stat value={totalOrders} label="Orders" />
        <View style={{ width: 1, marginVertical: 14, backgroundColor: colors.border.DEFAULT }} />
        <Stat value={activeOrders} label="In progress" />
        <View style={{ width: 1, marginVertical: 14, backgroundColor: colors.border.DEFAULT }} />
        <Stat value={completedOrders} label="Delivered" />
      </View>

      {/* Menu */}
      <Section title="Shopping">
        <AccountMenuItem
          icon={ShoppingBag}
          title="My Orders"
          subtitle="Track, view and manage orders"
          badge={activeOrders}
          onPress={() => router.push("/orders")}
        />
        <AccountMenuItem
          icon={User}
          title="My Profile"
          subtitle="Name, phone and address"
          onPress={() => router.push("/profile")}
        />
        <AccountMenuItem
          icon={Bell}
          title="Notifications"
          subtitle="Offers and order updates"
          onPress={() => router.push("/notifications")}
          isLast
        />
      </Section>

      {/* Appearance */}
      <Section title="Appearance">
        <View style={{ padding: 14 }}>
          <View
            style={{
              flexDirection: "row",
              padding: 4,
              borderRadius: 15,
              backgroundColor: colors.surface.elevated,
            }}
          >
            <ThemeOption mode="light" label="Light" icon={Sun} />
            <ThemeOption mode="dark" label="Dark" icon={Moon} />
          </View>
        </View>
      </Section>
    </ScrollView>
  );
}