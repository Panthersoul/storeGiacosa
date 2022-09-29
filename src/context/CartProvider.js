import { createContext, useState } from 'react';

export const CartContext = createContext();



const CartProvider = ( {children} ) => {
    const [cart, setCart ] = useState([]);

    const addToCart = (item, quantity) => {
        setCart([...cart, {item, quantity}])
    };

    return(
        <CartContext.Provider value={{cart, addToCart}}>
            <div>Carrito</div>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
