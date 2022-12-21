import { CART_ACTIONS_TYPE } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_CART_ITEM:
      return { ...state, cartItems: payload };
    case CART_ACTIONS_TYPE.SET_CART_IS_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};
