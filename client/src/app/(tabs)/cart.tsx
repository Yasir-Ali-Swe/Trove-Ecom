import EmptyCart from "@/components/cart/EmptyCart";
import CartWithItems from "@/components/cart/CartWithItems";
import {
  useAppDispatch,
  useAppSelector,
  selectCartItems,
  selectCartDiscount,
} from "@/store";
import { updateQuantity, removeFromCart } from "@/store/cartSlice";

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const discount = useAppSelector(selectCartDiscount);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CartWithItems
      cartItems={cartItems}
      discount={discount}
      onQuantityChange={handleUpdateQuantity}
      onRemove={handleRemoveItem}
    />
  );
}
