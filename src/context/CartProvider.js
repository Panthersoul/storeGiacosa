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

    /*
        >> Consigna: implementa React Context para mantener el estado de compra del user, siguiendo los detalles del manual.
        >>Aspectos a incluir en el entregable:
        CartContext.js con el context y su custom provider (Impórtalo en App.js)
        Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { name, price, quantity, etc. } dentro del array de productos agregados
        Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
        Métodos recomendados: 
        addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
        removeItem(itemId) // Remover un item del cart por usando su id
        clear() // Remover todos los items
        isInCart: (id) => true|false

    
    */

    const emptyCart = () => { setCart([]) };


    return(
        <CartContext.Provider value={ {cart, addToCart, itemQuantity} }>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
