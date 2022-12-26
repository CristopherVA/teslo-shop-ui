import React, { FC, ReactElement, ReactNode, useEffect, useReducer } from "react";
import { CartContext, cartReducer } from ".";
import { ICartProduct } from "../../interfaces/cart";
import  Cookie  from "js-cookie";

export interface CartState {
  cart: ICartProduct[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

interface Props {
  children: ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    Cookie.set('cart', JSON.stringify(state.cart))
  }, [state.cart])
  

  const onLoadCart = () => {
    dispatch({
      type: "[CART] - LoadCart from cookies | localstorage",
      payload: [],
    });
  };

  const addProductToCart = (product: ICartProduct) => {
    const productInCart = state.cart.some((p) => p._id === product._id);
    if (!productInCart)
      return dispatch({
        type: "[CART] - Update products in cart",
        payload: [...state.cart, product],
      });

    const productInCartButDifferentSize = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );
    if (!productInCartButDifferentSize)
      return dispatch({
        type: "[CART] - Update products in cart",
        payload: [...state.cart, product],
      });

    // Actualizar la cantidad
    const updateProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;
      p.quantity += product.quantity;
      return p;
    });

    dispatch({ type: "[CART] - Update products in cart", payload: updateProducts });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Method
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
