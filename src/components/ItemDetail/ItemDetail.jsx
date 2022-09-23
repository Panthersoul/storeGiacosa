import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from './style.css'

const manejadorCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} al carrito`)
  };
  
const ItemDetail = ( { titulo, descripcion, precio, img} ) => {
    
return  (
        <>
           <div className="productDetail">
                <h1>{titulo}</h1>
                <img src={img} alt="imagen" />
                <h6 className="pt-2">{descripcion}</h6>
                <p>Precio: $ {precio}</p>
                <ItemCount stock={10} initial={0} onAdd={manejadorCarrito}/>
           </div>
        </>
    )
}

export default ItemDetail;


