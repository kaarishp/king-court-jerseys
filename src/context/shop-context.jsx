import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = () => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const contextValue = { cartItems, addToCart, removeFromCart };


    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
  
};
