import cart from './assets/Cart.png'
import styles from './assets/styles.css'

//Items es la cantidad de articulos del carrito
const CartWidget = ({items}) => {
    return (
        <div className='d-flex'>
            <img src={cart} alt="Carrito" />
            {items !== 0 ? <p className='cartWidget-p'>{items}</p> : <p></p>}
        </div>
    )
}

export default CartWidget;