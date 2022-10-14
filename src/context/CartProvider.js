import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ( {children} ) => {
    const [cart, setCart] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(0);
    
    useEffect(() => {
       console.log("Cart provider is active");
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
        let arrayProduct = [];
        let contadorCantidad = 0;
        cart.forEach((elem) => {
            console.log('elem', elem.id);
            if (elem.id === id){
                //dummy action
                console.log(elem);
            }else{
                arrayProduct.push(elem)
                contadorCantidad += elem.quantity;
            }
        })
        setCart(arrayProduct)
        setItemQuantity(contadorCantidad);
    }

    const emptyCart = () => { setCart([]) };

    return(
        <CartContext.Provider value={ {cart, addToCart, removeItem, emptyCart, isInCart, itemQuantity} }>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
