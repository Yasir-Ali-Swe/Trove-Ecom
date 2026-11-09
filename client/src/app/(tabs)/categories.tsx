import { View, Text, FlatList } from "react-native";
import {
  Shirt,
  Footprints,
  Watch,
  BriefcaseBusiness,
  Gem,
  Headphones,
  Sparkles,
  Dumbbell,
  Smartphone,
  ShoppingBasket,
  Baby,
  Sofa,
} from "lucide-react-native";
import SwipeableTabScreen from "@/components/SwipeableTabScreen";

import CategoryCard from "@/components/CategoryCard";

const categories = [
  { id: "1", name: "Clothing", icon: Shirt },
  { id: "2", name: "Shoes", icon: Footprints },
  { id: "3", name: "Watches", icon: Watch },
  { id: "4", name: "Bags", icon: BriefcaseBusiness },
  { id: "5", name: "Accessories", icon: Gem },
  { id: "6", name: "Electronics", icon: Headphones },
  { id: "7", name: "Beauty", icon: Sparkles },
  { id: "8", name: "Sports", icon: Dumbbell },
  { id: "9", name: "Mobiles", icon: Smartphone },
  { id: "10", name: "Groceries", icon: ShoppingBasket },
  { id: "11", name: "Kids", icon: Baby },
  { id: "12", name: "Furniture", icon: Sofa },
];

export default function CategoriesScreen() {
  const handleCategoryPress = (categoryName: string) => {
    console.log("Selected category:", categoryName);
  };

  return (
    <SwipeableTabScreen index={1}>
      <View className="flex-1 bg-[#020617]">
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 32,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          ListHeaderComponent={
            <View className="pt-3 pb-5">
              <Text className="text-2xl font-bold text-white">
                Explore Categories
              </Text>

              <Text className="text-sm text-slate-400 mt-1">
                Find everything you need
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <CategoryCard
              name={item.name}
              icon={item.icon}
              onPress={() => handleCategoryPress(item.name)}
            />
          )}
        />
      </View>
    </SwipeableTabScreen>
  );
}
