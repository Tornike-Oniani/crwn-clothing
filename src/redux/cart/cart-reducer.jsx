import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantity,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Switch hidden between true and false on each click to hide/show cart dropdown
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    // Add shop item to cart (We are using 'addItemToCart' function which handles adding the same item)
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
