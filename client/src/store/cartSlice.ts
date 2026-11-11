import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "@/types/cart";
import type { Product, SelectedVariants } from "@/types/product";
import type { RootState } from "./index";

const initialState: CartState = {
  items: [
    {
      id: "na-3",
      name: "AeroGlide Runner Low-Top Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      price: 6500,
      quantity: 1,
    },
    {
      id: "na-1",
      name: "Minimalist Leather Chrono Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
      price: 8900,
      quantity: 1,
    },
  ],
  discount: 0,
};

function areVariantsEqual(v1?: SelectedVariants, v2?: SelectedVariants): boolean {
  if (!v1 && !v2) return true;
  if (!v1 || !v2) return false;
  const k1 = Object.keys(v1);
  const k2 = Object.keys(v2);
  if (k1.length !== k2.length) return false;
  return k1.every((key) => v1[key] === v2[key]);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity?: number; selectedVariants?: SelectedVariants } | Product>
    ) => {
      const payload = action.payload;
      const product = "product" in payload ? payload.product : payload;
      const quantityToAdd = "product" in payload && payload.quantity ? payload.quantity : 1;
      const selectedVariants = "product" in payload ? payload.selectedVariants : undefined;

      // Find an item matching base product ID AND the exact same selected variants
      const existing = state.items.find(
        (item) =>
          (item.id === product.id || item.id.startsWith(`${product.id}::`)) &&
          areVariantsEqual(item.selectedVariants, selectedVariants)
      );

      if (existing) {
        existing.quantity += quantityToAdd;
      } else {
        const hasVariants = selectedVariants && Object.keys(selectedVariants).length > 0;
        const lineId = hasVariants
          ? `${product.id}::${Object.entries(selectedVariants).sort().map(([k, v]) => `${k}=${v}`).join(";")}`
          : product.id;

        state.items.push({
          ...product,
          id: lineId,
          quantity: quantityToAdd,
          selectedVariants,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (state.items.length === 0) {
        state.discount = 0;
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((i) => i.id === id);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
    applyDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.discount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyDiscount,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalCount = selectCartCount;
export const selectCartSubtotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartDiscount = (state: RootState) => state.cart.discount;
export const selectCartTotal = (state: RootState) => {
  const subtotal = state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return Math.max(0, subtotal - state.cart.discount);
};
export const selectCartTotalAmount = selectCartTotal;
export const selectIsInCart = (id: string) => (state: RootState) =>
  state.cart.items.some((item) => item.id === id || item.id.startsWith(`${id}::`));

export default cartSlice.reducer;
