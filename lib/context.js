import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
    // add our data for state
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);

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

    return (
        <ShopContext.Provider value={{qty, inceaseQty, decreaseQty, showCart, setShowCart}}>
            { children }
        </ShopContext.Provider>
    );
}

export const useStateContext = () => useContext(ShopContext);