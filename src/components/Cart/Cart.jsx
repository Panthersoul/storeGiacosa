import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link, NavLink } from 'react-router-dom';
import styles from './css/styles.css'

const Cart = () => {

    const {cart} = useContext(CartContext);
    console.log('cart', cart);

    return (
        cart.length === 0 ? (<>
        <div className="container d-flex text-center mt-4 flex-column">
            <h3>No existen elementos en el carro.</h3>
            <br />
            <p>
                <Link className='btn btn-primary' to='/'>
                    Volver al inicio
                </Link> 
            </p>
        </div>
        </>) : (<>
            <div className="container d-flex text-center mt-4 ">
                {cart.map((item) => (
                    <div className="ancho-300 p-2" key={item.id}>
                        <h3>{item.titulo}</h3>
                        <img className="ancho-50" src={item.img} alt="Imagen Carrito" />
                        <p className="mt-2">{item.categoria}</p>
                        <p><strong>Cantidad: {item.quantity} </strong> </p>
                    </div>
                ))}
            </div>
        </>)
    )
}

export default Cart;