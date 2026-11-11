import { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { router, type Href } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BellOff } from "lucide-react-native";

import NotificationCard from "@/components/notifications/NotificationCard";
import NotificationFilter from "@/components/notifications/NotificationFilter";
import { NOTIFICATIONS } from "@/constants/notifications";
import type { AppNotification } from "@/types/notification";
import { useTheme } from "@/theme";
import { isNewNotification, type NotificationFilterKey } from "@/utils/notifications";

// Needed for LayoutAnimation on older Android architectures
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const EMPTY_COPY: Record<NotificationFilterKey, { title: string; text: string }> = {
  all: { title: "No notifications yet", text: "Order updates and offers will show up here." },
  new: { title: "Nothing new", text: "You have no notifications from the last 24 hours." },
  unread: { title: "You're all caught up", text: "There are no unread notifications." },
};

export default function NotificationsScreen() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  const [items, setItems] = useState<AppNotification[]>(NOTIFICATIONS);
  const [filter, setFilter] = useState<NotificationFilterKey>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const counts = useMemo(
    () => ({
      all: items.length,
      new: items.filter(isNewNotification).length,
      unread: items.filter((n) => !n.read).length,
    }),
    [items]
  );

  const data = useMemo(() => {
    if (filter === "new") return items.filter(isNewNotification);
    if (filter === "unread") return items.filter((n) => !n.read);
    return items;
  }, [items, filter]);

  const animate = () =>
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  const handleToggle = useCallback((id: string) => {
    animate();
    setExpandedId((prev) => (prev === id ? null : id));
    // Opening a notification marks it as read
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const handleMarkAllRead = () => {
    animate();
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleFilterChange = (key: NotificationFilterKey) => {
    animate();
    setFilter(key);
    setExpandedId(null);
  };

  const empty = EMPTY_COPY[filter];

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NotificationFilter value={filter} onChange={handleFilterChange} counts={counts} />

      {/* Summary row */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingBottom: 8,
        }}
      >
        <Text style={{ color: colors.muted.foreground, fontSize: 13 }}>
          {counts.unread > 0 ? `${counts.unread} unread` : "All caught up"}
        </Text>
        {counts.unread > 0 && (
          <Pressable
            onPress={handleMarkAllRead}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Mark all notifications as read"
          >
            <Text style={{ color: colors.primary.DEFAULT, fontSize: 13, fontWeight: "700" }}>
              Mark all as read
            </Text>
          </Pressable>
        )}
      </View>

      <FlatList
        data={data}
        keyExtractor={(n) => n.id}
        extraData={expandedId}
        renderItem={({ item }) => (
          <NotificationCard
            notification={item}
            expanded={expandedId === item.id}
            onToggle={() => handleToggle(item.id)}
            onAction={
              item.route ? () => router.push(item.route as Href) : undefined
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 4,
          paddingBottom: Math.max(insets.bottom, 16) + 16,
        }}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 80,
            }}
          >
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.surface.DEFAULT,
                borderWidth: 1,
                borderColor: colors.border.strong,
                marginBottom: 16,
              }}
            >
              <BellOff size={28} color={colors.muted.subtle} strokeWidth={1.75} />
            </View>
            <Text style={{ color: colors.foreground.DEFAULT, fontSize: 16, fontWeight: "700" }}>
              {empty.title}
            </Text>
            <Text
              style={{
                color: colors.muted.foreground,
                fontSize: 13,
                textAlign: "center",
                marginTop: 6,
                maxWidth: 240,
                lineHeight: 19,
              }}
            >
              {empty.text}
            </Text>
          </View>
        }
      />
    </View>
  );
}