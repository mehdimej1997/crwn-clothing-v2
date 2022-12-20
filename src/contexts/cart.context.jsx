import { createContext, useEffect, useReducer } from "react";
import { cartReducer, CART_ACTIONS_TYPE } from "../reducer/cart.reducer";
const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
};

export const CartContext = createContext({
  ...INITIAL_STATE,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({
      type: CART_ACTIONS_TYPE.COUNT_CART_ITEMS,
      payload: newCartCount,
    });
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTIONS_TYPE.TOTAL_CART_ITEMS,
      payload: newCartTotal,
    });
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    dispatch({ type: CART_ACTIONS_TYPE.ADD_CART_ITEM, payload: productToAdd });
  };

  const removeItemToCart = (cartItemToRemove) => {
    dispatch({
      type: CART_ACTIONS_TYPE.REMOVE_CART_ITEM,
      payload: cartItemToRemove,
    });
  };

  const clearItemFromCart = (cartItemToClear) => {
    dispatch({
      type: CART_ACTIONS_TYPE.CLEAR_CART_ITEMS,
      payload: cartItemToClear,
    });
  };

  const setIsCartOpen = () => {
    dispatch({ type: CART_ACTIONS_TYPE.TOGGLE_CART_ITEMS });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
