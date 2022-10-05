import carrito from './assets/Cart.png'
import styles from './assets/styles.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import { CartContext } from '../../context/CartProvider'


//Items es la cantidad de articulos del carrito
const CartWidget = () => {
    
    const { cart } = useContext(CartContext)
    const { itemQuantity } = useContext(CartContext)

    return (
        <div className='d-flex carroManito'>
            <img src={carrito} alt="Carrito" />
            {[...cart].length !== 0 ? <p className='cartWidget-p'>{itemQuantity}</p> : <p></p>}
        </div>
    
    )
}

export default CartWidget;