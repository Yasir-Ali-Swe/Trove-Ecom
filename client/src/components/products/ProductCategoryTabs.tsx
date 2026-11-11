import { useMemo } from "react";
import { ScrollView, Pressable, Text, View } from "react-native";
import type { Category } from "@/types/category";

interface ProductCategoryTabsProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export default function ProductCategoryTabs({
  categories,
  selectedCategoryId,
  onSelectCategory,
}: ProductCategoryTabsProps) {
  // Build tabs list with "All" prepended
  const tabs = useMemo(
    () => [
      { id: "all", name: "All" },
      ...categories.map((c) => ({ id: c.id, name: c.name })),
    ],
    [categories]
  );

  return (
    <View className="border-b border-border bg-background py-2.5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{ flexGrow: 0 }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        accessibilityRole="tablist"
      >
        {tabs.map((tab) => {
          const isSelected = selectedCategoryId === tab.id;

          return (
            <Pressable
              key={tab.id}
              onPress={() => onSelectCategory(tab.id)}
              className={`mr-2.5 rounded-full border px-4 py-2 ${isSelected
                ? "border-primary bg-primary"
                : "border-border bg-card active:bg-surface-elevated"
                }`}
              accessibilityRole="tab"
              accessibilityState={{ selected: isSelected }}
              accessibilityLabel={`Filter by ${tab.name}`}
            >
              <Text
                className={`text-xs font-semibold ${isSelected
                  ? "font-bold text-primary-foreground"
                  : "text-foreground-muted"
                  }`}
              >
                {tab.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}