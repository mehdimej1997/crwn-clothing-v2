import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectCartIsOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
