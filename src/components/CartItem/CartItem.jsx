import { useContext } from 'react'
import { CartContext } from '../../context/CartProvider'


const CartItem = () => {

    const { carro } = useContext(CartContext)
    console.log( {carro} );
    

    return (
        <>
        </>
        )
}


export default CartItem;