import { CartActionTypes } from './cart.types';

// We don't need payload because we are just toggling the boolean value in state
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
