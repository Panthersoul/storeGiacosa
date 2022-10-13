import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link, NavLink } from 'react-router-dom';
import styles from './css/styles.css'
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import  moment  from 'moment'

const Cart = () => {

    const {cart, removeItem } = useContext(CartContext);
    console.log('cart', cart);

    const totalCarrito = () => {
        let total = 0
        cart.forEach(elem => {
            total += elem.precio * elem.quantity
        })
        return total
    }

    

        const createOrder = () => {
            const db = getFirestore();
            const order = {
                buyer: {
                    name: 'Andres',
                    phone: parseInt('099111222'),
                    email: 'test@testo.com'
                },
                items: cart,
                total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.precio * valorActual.quantity), 0),
                date: moment().format('MMMM Do YYYY, h:mm:ss a')
            };

            const query = collection(db, 'venta');
            addDoc(query, order)
                .then(({id}) => {
                    alert('Compra realizada!... si id es: ' + id)
                    console.log(id);
                })
                .catch((err) => alert('Tu compra no se ha realizado ' + err))
        }

        /**/
            const updateOrder = () => {
                const idOrder = 'p1hW1FeY5hJQnAIAgLr8'
                const db = getFirestore();
                const order = {
                    buyer: {
                        name: 'Orden Actualizada',
                        phone: parseInt('099111222'),
                        email: 'test@testo.com'
                    },
                    items: cart,
                    total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.precio * valorActual.quantity), 0),
                    date: moment().format('MMMM Do YYYY, h:mm:ss a')
                };

                const queryUpdate = doc(db, 'venta', idOrder);
                updateDoc(queryUpdate, order)
                .then((res) => {
                    alert('Compra actualizada!')
                    console.log(res);
                })
                .catch((err) => alert('Tu compra no se ha realizado'+ err))
            }

        /**/




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
                        <br />
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger">Quitar del carrito</button>
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
            <div className="container d-flex text-center mt-4 justify-content-center flex-column  ancho-max-500">
                    <h4>TOTAL: $ {totalCarrito()}</h4>
            </div>
            <div className="container d-flex  mt-4 justify-content-center flex-column  ancho-max-500">
                    <button className="btn btn-success" onClick={createOrder}>Realizar la orden</button>
                    <button className="btn btn-secondary mt-4" onClick={updateOrder}>Actualizo la orden</button>
            </div>
        </>)
    )
}

export default Cart;