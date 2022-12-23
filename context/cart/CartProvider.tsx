import React, { FC, ReactElement, ReactNode, useReducer } from 'react'
import { CartContext, cartReducer } from '.'
import { ICartProduct } from '../../interfaces/cart'

export interface CartState {
   cart: ICartProduct[]
}

const CART_INITIAL_STATE: CartState = {
   cart: []
}

interface Props{
   children: ReactNode
}

export const CartProvider:FC<Props> = ({ children }) => {

   const [state, dispatch ] = useReducer(cartReducer, CART_INITIAL_STATE)

   const toggleSideMenu = () => {

      dispatch({
         type: "[CART] - LoadCart from cookies | localstorage",
        payload: []
      })

   }

  return (
      <CartContext.Provider value={{
         ...state,

         // Method
         
      }}
      >
         {children}
      </CartContext.Provider>
   )
}
