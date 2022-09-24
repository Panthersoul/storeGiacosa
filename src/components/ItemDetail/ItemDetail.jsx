import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from './style.css'

const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
const ItemDetail = ( { titulo, descripcion, precio, img} ) => {
    
return  (
        <>
        <div className="container">
            <div className="productDetail d-flex flex-column align-content-center">
              <div className="text-center">
                  <h1>{titulo}</h1>
                  <img className="imagen" src={img} alt="imagen" />
                  <h6 className="pt-2">{descripcion}</h6>
                  <p className="precio">Precio: $ {precio}</p>
                  <ItemCount stock={10} initial={0} onAdd={manejadorCarrito}/>
              </div>
                  
                  
            </div>
           </div>
        </>
    )
}

export default ItemDetail;


