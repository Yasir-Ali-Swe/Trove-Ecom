import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WishlistProduct } from "@/types/wishlist";
import type { RootState } from "./index";

export interface WishlistState {
  items: WishlistProduct[];
}

const initialState: WishlistState = {
  items: [
    {
      id: "na-2",
      name: "Acoustic Pro Wireless Studio Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      price: 14500,
    },
    {
      id: "na-1",
      name: "Minimalist Leather Chrono Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      price: 8900,
    },
    {
      id: "na-3",
      name: "AeroGlide Runner Low-Top Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      price: 6500,
    },
    {
      id: "na-4",
      name: "Heritage Waxed Canvas Daypack",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
      price: 5200,
    },
  ],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistProduct>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleWishlist: (state, action: PayloadAction<WishlistProduct>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export const selectWishlistItems = (state: RootState) => state.wishlist.items;
export const selectWishlistCount = (state: RootState) =>
  state.wishlist.items.length;
export const selectIsInWishlist = (id: string) => (state: RootState) =>
  state.wishlist.items.some((item) => item.id === id);

export default wishlistSlice.reducer;
