import { ICartProduct } from "../../interfaces/cart";
import { CartState } from "./CartProvider";

type CartActionType = 
  | { type: "[CART] - LoadCart from cookies | localstorage", payload: ICartProduct[] }
  | { type: "[CART] - Add Product", payload: ICartProduct }

export const cartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case '[CART] - LoadCart from cookies | localstorage':
      return {
        ...state, 
      };

    default:
      return state;
  }
};
