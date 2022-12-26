import { CartState } from "./CartProvider";
import { ICartProduct } from "../../interfaces/cart";

type CartActionType =
  | { type: '[CART] - LoadCart from cookies | localstorage', payload: ICartProduct[] }
  | { type: '[CART] - Update products in cart', payload: ICartProduct[] }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {
  switch (action.type) {
    case '[CART] - LoadCart from cookies | localstorage':
      return {
        ...state,
      };
    case '[CART] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};
