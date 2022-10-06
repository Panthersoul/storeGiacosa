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
            <div className="container d-flex text-center mt-4 justify-content-center flex-column  ancho-max-500">
                {cart.map((item) => (
                    <div className=" p-2 flex-row d-flex justify-content-around border m-2" key={item.id}>
                        <div>
                        <img className="ancho-50" src={item.img} alt="Imagen Carrito" />
                        </div>
                        <div>
                            <h3>{item.titulo}</h3>
                            <p className="mt-2">{item.categoria}</p>
                            <p><strong>Cantidad: {item.quantity} </strong> </p>
                            <p><strong>Coste: $ {item.quantity * item.precio} </strong> </p>
                        </div>
                    </div>
                ))}
                
            </div>
        </>)
    )
}

export default Cart;