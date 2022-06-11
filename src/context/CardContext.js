import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    // const [addToCart, setAddToCart] = useState([])

    const addProductToCart = (product) => {
      console.log("se agrego el producto: ", product)
      let isInCart = cartListItems.find(cartItem => cartItem.id == product.id)
      if(!isInCart) {
       return setCartListItems(cartListItems => [...cartListItems, product])
      }
    }
    // const addProductAmount = (product) => {
    //   console.log("se agrego el producto: ", product)
    //   // console.log("se agrego la cantidad: ", amount)
    //   let isCart = addToCart.find(item => item.id == product.id)
    //   if(!isCart) {
    //    return setAddToCart(addToCart => [...addToCart, product])
    //   }
    // }

    const data = {
        cartListItems,
        // addToCart,
        addProductToCart
        // addProductAmount
    }

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider }