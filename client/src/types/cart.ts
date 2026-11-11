import type { Product, SelectedVariants } from "./product";

export interface CartItem extends Product {
  quantity: number;
  selectedVariants?: SelectedVariants;
}

export interface CartState {
  items: CartItem[];
  discount: number;
}

export interface CartItemProps {
  item: CartItem;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export interface CartWithItemsProps {
  cartItems: CartItem[];
  discount?: number;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}
