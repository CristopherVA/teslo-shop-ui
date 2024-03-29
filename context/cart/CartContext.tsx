import { createContext } from "react";
import { ICartProduct } from "../../interfaces/cart";

interface ContextProps{
   cart: ICartProduct[];
   addProductToCart: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps)