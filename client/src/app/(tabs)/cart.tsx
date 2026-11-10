import { useState } from "react";
import { CartProduct } from "@/components/CartItem";
import EmptyCart from "@/components/EmptyCart";
import CartWithItems from "@/components/CartWithItems";

export default function CartScreen() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    {
      id: "1",
      name: "Premium Casual Sneakers",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      price: 4500,
      quantity: 2,
    },
    {
      id: "2",
      name: "Classic Wrist Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      price: 3200,
      quantity: 1,
    },
  ]);

  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((previous) => previous.filter((item) => item.id !== id));
    setDiscount(0);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CartWithItems
      cartItems={cartItems}
      discount={discount}
      onQuantityChange={updateQuantity}
      onRemove={removeItem}
    />
  );
}