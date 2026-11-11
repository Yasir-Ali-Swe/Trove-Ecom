import { Alert, FlatList, Text, View } from "react-native";
import { Heart } from "lucide-react-native";
import { colors } from "@/theme";

import WishlistItem from "@/components/wishlist/WishlistItem";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import type { WishlistProduct } from "@/types/wishlist";
import {
  useAppDispatch,
  useAppSelector,
  selectWishlistItems,
} from "@/store";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { addToCart } from "@/store/cartSlice";

export default function WishlistScreen() {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector(selectWishlistItems);

  const handleRemove = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product: WishlistProduct) => {
    dispatch(addToCart({ product }));
    Alert.alert("Added to Cart", `${product.name} has been added to your cart.`);
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
                  {wishlist.length}
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
              onAddToCart={handleAddToCart}
            />
          </View>
        )}
      />
    </View>
  );
}
