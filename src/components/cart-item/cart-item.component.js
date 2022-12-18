import React from "react";
import "./cart-item.styles.scss";

function CartItem({ cartItem: { name, price, imageUrl, quantity } }) {
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
}

export default CartItem;
