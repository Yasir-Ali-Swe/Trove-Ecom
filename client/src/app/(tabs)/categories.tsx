import { View, Text, FlatList } from "react-native";
import { router } from "expo-router";
import CategoryCard from "@/components/category/CategoryCard";
import { CATEGORIES } from "@/constants/categories";
import type { Category } from "@/types/category";

export default function CategoriesScreen() {
  const handleCategoryPress = (category: Category) => {
    router.push({
      pathname: "/products",
      params: { categoryId: category.id, category: category.name },
    });
  };

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 40,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <View className="pt-3 pb-5">
            <Text className="text-2xl font-bold text-foreground">
              Explore Categories
            </Text>
            <Text className="text-sm text-muted-foreground mt-1">
              Find everything you need
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            icon={item.icon}
            onPress={() => handleCategoryPress(item)}
          />
        )}
      />
    </View>
  );
}
