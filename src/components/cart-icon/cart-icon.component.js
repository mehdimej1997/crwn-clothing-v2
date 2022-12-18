import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

function CartIcon() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const toggle = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
