import carrito from './assets/Cart.png'
import styles from './assets/styles.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'


//Items es la cantidad de articulos del carrito
const CartWidget = ({items}) => {

    const { cart } = useContext(CartContext)
    
    return (
        <div className='d-flex'>
            <img src={carrito} alt="Carrito" />
            {cart.lenght !== undefined ? <p className='cartWidget-p'>{cart.lenght}</p> : <p></p>}
        </div>
    )
}

export default CartWidget;