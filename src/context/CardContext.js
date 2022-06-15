import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
      console.log("se agrego el producto: ", product)
      let isInCart = cartListItems.find(cartItem => cartItem.id == product.id)
      if(!isInCart) {
        setTotalPrice(totalPrice + product.price)
       return setCartListItems(cartListItems => [...cartListItems, product])
      }
    }

    const removeProduct = (id) => {
      const copyCartListItems = [...cartListItems]
      const newCartListItems = copyCartListItems.filter(cartListItems => cartListItems.id !== id)
      console.log("items remove", copyCartListItems[0].price)
      setTotalPrice(totalPrice - copyCartListItems[0].price)
      setCartListItems(newCartListItems)
      console.log(totalPrice)


    }

    const data = {
        cartListItems,
        totalPrice,
        removeProduct,
        addProductToCart
    }

  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
export { CartProvider }