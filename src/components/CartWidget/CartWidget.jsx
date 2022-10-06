import carrito from './assets/Cart.png'
import styles from './assets/styles.css'
import { useContext, useEffect, useReducer, useState } from 'react'
import { CartContext } from '../../context/CartProvider'
import { Link, NavLink } from 'react-router-dom';

//Items es la cantidad de articulos del carrito
const CartWidget = () => {
    
    const { cart  } = useContext(CartContext)
    const { itemQuantity } = useContext(CartContext)

    const items = false;
    

    return (
        <>
            <Link to='/cart'>
                <div className='d-flex carroManito'>
                    <img src={carrito} alt="Carrito" />
                    {console.log([...cart].lenght)}
                    {[...cart].length !== 0 ? <p className='cartWidget-p'>{itemQuantity}</p> : <p></p>}
                </div>
            </Link> 
        </>
    )
}

export default CartWidget;