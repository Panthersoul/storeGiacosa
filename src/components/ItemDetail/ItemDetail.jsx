import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import styles from './style.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";



const ItemDetail = ( { titulo, descripcion, precio, categoria, img, stock, id} ) => {

  const [showItemCount, setShowItemCount] = useState(true);
  const { addToCart } = useContext(CartContext);

  const manejadorCarrito = (cantidad) => {
    setShowItemCount(false);
    addToCart({ titulo, descripcion, precio, img, categoria, stock, id}, cantidad)
  };

return  (
        <>
        <div className="container">
            <div className="productDetail d-flex flex-column align-content-center">
              <div className="text-center">
                  <h1>{titulo}</h1>
                  <h6>{categoria}</h6>
                  <img className="imagen" src={img} alt="imagen" />
                  <h6 className="pt-2">{descripcion}</h6>
                  <p className="precio">Precio: $ {precio}</p>
                  <p className="visually-hidden">{id}</p>
                  {showItemCount ? <ItemCount stock={stock} initial={1} onAdd={manejadorCarrito}/> : <Link to='/cart'><button>Terminar Compra</button></Link>  }
              </div>
            </div>
           </div>
        </>
    )
}

export default ItemDetail;
