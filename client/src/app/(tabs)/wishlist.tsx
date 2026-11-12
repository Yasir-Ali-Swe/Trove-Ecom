import { FlatList, Text, View } from "react-native";
import { Heart } from "lucide-react-native";
import { useTheme } from "@/theme";

import WishlistItem from "@/components/wishlist/WishlistItem";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import {
  useAppDispatch,
  useAppSelector,
  selectWishlistItems,
  selectWishlistCount,
} from "@/store";
import { removeFromWishlist } from "@/store/wishlistSlice";

export default function WishlistScreen() {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);
  const wishlistCount = useAppSelector(selectWishlistCount);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 40,
          flexGrow: 1,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={
          <View className="mb-5">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-2xl font-bold text-foreground">
                  My Wishlist
                </Text>
                <Text className="mt-1 text-sm text-muted-foreground">
                  Your favorite products in one place
                </Text>
              </View>

              <View className="flex-row items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 border border-primary/20">
                <Heart size={16} color={colors.primary.DEFAULT} fill={colors.primary.DEFAULT} />
                <Text className="font-semibold text-primary text-sm">
                  {wishlistCount}
                </Text>
              </View>
            </View>
          </View>
        }
        ListEmptyComponent={<EmptyWishlist />}
        renderItem={({ item }) => (
          <View className="w-[48%]">
            <WishlistItem
              product={item}
              onRemove={handleRemove}
            />
          </View>
        )}
      />
    </View>
  );
}
