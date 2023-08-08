import React, { createContext, useEffect, useState } from 'react'

export const CartCont = createContext()

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {

        const findProduct = cart.find(item => item.id == product.id)

        if (findProduct) {
            setCart(cart.filter(item => item.id != product.id))
        } else {
            setCart([...cart, product])
        }
    }

    const deleteProduct = (id) => {
        setCart(cart.filter(item => item.id != id))
    }

    return (
        <div>
            <CartCont.Provider value={{ cart, addToCart, setCart, deleteProduct }}>
                {children}
            </CartCont.Provider>
        </div>
    )
}

export default CartContext
