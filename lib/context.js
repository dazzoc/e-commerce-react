import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    // add our data for state
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalQuantities, setTotalQuantities] = useState(0);

    // increase product Qty
    const inceaseQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    // Decrease Qty
    const decreaseQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;
            return prevQty -1;
        });
    };

    const onAdd = (product, quantity) => {
        // Increase total quantity
        setTotalQuantities((prevTotal) => prevTotal + quantity);
        // check is the product is already in the cart
        const exist = cartItems.find(item => item.slug === product.slug);
        if(exist){
            setCartItems(cartItems.map((item) => item.slug === product.slug ? {...exist, quantity: exist.quantity + quantity} : item))
        } else {
            setCartItems([...cartItems, {...product, quantity: quantity}]);
        }
    };

    // remove product
    const onRemove = (product) => {
        // decrease total quantity
        setTotalQuantities((prevTotal) => prevTotal - 1);
        // check is the product is already in the cart
        const exist = cartItems.find(item => item.slug === product.slug);
        if(exist.quantity === 1){
            setCartItems(cartItems.filter(item => item.slug !== product.slug));
        } else {
            setCartItems(cartItems.map(item => item.slug === product.slug ? {...exist, quantity: exist.quantity -1} : item));
        }
    }

    return (
        <ShopContext.Provider value={{qty, inceaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd, onRemove, totalQuantities}}>
            { children }
        </ShopContext.Provider>
    );
}

export const useStateContext = () => useContext(ShopContext);