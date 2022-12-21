import { createAction } from "../../utils/reducer";
import { CART_ACTIONS_TYPE } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTIONS_TYPE.SET_CART_IS_OPEN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEM, newItems);
};

export const removeCartFromItem = (cartItems, productToRemove) => {
  const newItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEM, newItems);
};

export const clearCartItems = (cartItems, cartItemsToClear) => {
  const newItems = clearCartItem(cartItems, cartItemsToClear);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEM, newItems);
};
