import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    
    useEffect(() => {
       console.log(cart)
    }, [cart])

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addToCart = (item, quantity) => {
        
        if( cart.some(prod => prod.titulo === item.titulo)){
            alert("El producto ya se encuentra en el carrito, modifiquelo allí")
        }else{
            setCart([...cart, {...item, quantity}])
            setItemQuantity(itemQuantity + parseInt( quantity ))
        }
        
    };

    const removeItem = (id) => {
        //Busco el indice en el cart, del articulo con el id 
        let indice = cart.findIndex(elem => {
            return elem.id === id
        });
        
        //quito del carro, el elemento con el indice devuelto
        cart.splice(indice, 1);
    }


    const emptyCart = () => { setCart([]) };


    return(
        <CartContext.Provider value={ {cart, addToCart, itemQuantity} }>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
