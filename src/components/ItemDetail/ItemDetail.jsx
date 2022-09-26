import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import styles from './style.css'

const ItemDetail = ( { titulo, descripcion, precio, img} ) => {

  const [showItemCount, setShowItemCount] = useState(true);

  const manejadorCarrito = (cantidad) => {

    setShowItemCount(false);

    //alert(`Agregaste ${cantidad} al carrito`)
  };

return  (
        <>
        <div className="container">
            <div className="productDetail d-flex flex-column align-content-center">
              <div className="text-center">
                  <h1>{titulo}</h1>
                  <img className="imagen" src={img} alt="imagen" />
                  <h6 className="pt-2">{descripcion}</h6>
                  <p className="precio">Precio: $ {precio}</p>
                  {showItemCount ? <ItemCount stock={10} initial={0} onAdd={manejadorCarrito}/> : <Link to='/cart'><button>Ver Carrito</button></Link>  }
              </div>
                  
                  
            </div>
           </div>
        </>
    )
}

export default ItemDetail;


