import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { Link, useNavigate } from 'react-router-dom';
import styles from './css/styles.css'
import { getFirestore, collection, addDoc, updateDoc, doc } from "firebase/firestore";
import  moment  from 'moment';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {

    const {cart, removeItem, emptyCart } = useContext(CartContext);
    const [correo, setCorreo] = useState("");
    const navegar = useNavigate();

    const totalCarrito = () => {
        let total = 0
        cart.forEach(elem => {
            total += elem.precio * elem.quantity
        })
        return total
    }

    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: 0,
            email: ''
        },
        items: cart,
        total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.precio * valorActual.quantity), 0),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    })


        const createOrder = () => {
            const db = getFirestore();
            const query = collection(db, 'venta');

            console.log('orden', order);
            
            
            addDoc(query, order)
                .then(({id}) => {
                    toast('Compra realizada!... su id es: ' + id);
                    console.log(id);
                    toast('El ID estará en la consola, gracias por su compra.');
                    
                    setTimeout(() => {
                        emptyCart();
                        navegar('/')
                    }, 6000);

                })
                .catch((err) => toast('Tu compra no se ha realizado ' + err))
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

            const realizarOrden = (event) =>{
                event.preventDefault();                
                console.log(order.buyer.email);
                if (order.buyer.name !== '' && order.buyer.phone !== 0)
                {
                    if (order.buyer.email === '') {
                        toast('El Email no puede estar vacío.');
                    }else if ( order.buyer.email !== correo )
                        {
                            toast('Las direcciones de correo deben coincidir')
                            }else{
                                createOrder();
                            }
                }else{
                    toast('Debe completar NOMBRE Y/O TELEFONO');
                }
            }


        const handleInputChange = (e) => {
            setOrder({
                ...order,
                buyer: {
                    ...order.buyer,
                    [e.target.name]: e.target.value
                }
            })
        }


        const handleCorreo = (e) => {
            setCorreo(e.target.value)
            console.log(correo);
        
        }
        
        


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
            <form action="" onSubmit={realizarOrden}>
            <div className="container d-flex  mt-4 justify-content-center flex-column  ancho-max-500">
                <div>
                    <div className="row">
                        <div>
                            <label htmlFor="name">Nombre: </label>
                        </div>
                        <div className="ms-5">
                            <input type="text" name="name" value={order.buyer.name} onChange={handleInputChange} id="" />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label htmlFor="phone">Telefono: </label>
                        </div>
                        <div className="ms-5">
                            <input type="number" name="phone" value={order.buyer.phone} onChange={handleInputChange} id="" />
                        </div>
                    </div>
                    <div className="row">
                            <label htmlFor="correo">Email</label>
                    </div>
                    <div className="ms-5">
                            <input type="email" name="correo" value={correo} onChange={handleCorreo}/>
                    </div>
                    <div className="row">
                        <label htmlFor="email">Valide su email</label>
                    </div>
                    <div className="ms-5">
                        <input type="email" name="email" value={ order.buyer.email} onChange={handleInputChange} />
                    </div>

                    <div className="row mt-4 ancho-300">
                        <button className="btn btn-success" type="submit" >Realizar la orden</button>
                    </div>
            
                </div>
                </div>
            </form>
            <ToastContainer
                autoClose={false}
            />
        </>)
    )
}

export default Cart;