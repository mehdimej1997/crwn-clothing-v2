export const CART_ACTIONS_TYPE = {
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  CLEAR_CART_ITEMS: "CLEAR_CART_ITEMS",
  TOGGLE_CART_ITEMS: "TOGGLE_CART_ITEMS",
  TOTAL_CART_ITEMS: "TOTAL_CART_ITEMS",
  COUNT_CART_ITEMS: "COUNT_CART_ITEMS",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.ADD_CART_ITEM:
      return { ...state, cartItems: addCartItem(state.cartItems, payload) };

    case CART_ACTIONS_TYPE.REMOVE_CART_ITEM:
      return { ...state, cartItems: removeCartItem(state.cartItems, payload) };

    case CART_ACTIONS_TYPE.CLEAR_CART_ITEMS:
      return { cartItems: clearCartItem(state.cartItems, payload) };

    case CART_ACTIONS_TYPE.COUNT_CART_ITEMS:
      return { ...state, cartCount: payload };

    case CART_ACTIONS_TYPE.TOGGLE_CART_ITEMS:
      return { ...state, isCartOpen: !state.isCartOpen };

    case CART_ACTIONS_TYPE.TOTAL_CART_ITEMS:
      return { ...state, cartTotal: payload };

    default:
      throw new Error(`Unhandled action type of ${type} in cartReducer`);
  }
};

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
