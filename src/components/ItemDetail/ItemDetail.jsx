import { useEffect, useState } from "react";
import styles from './style.css'

const ItemDetail = ( {key, titulo, descripcion, precio, img} ) => {
    
return  (
        <>
           <div className="productDetail">
                <h1>{titulo}</h1>
                <img src={img} alt="imagen" />
                <h6 className="pt-2">{descripcion}</h6>
                <p>Precio: $ {precio}</p>
           </div>
        </>
    )
}

export default ItemDetail;


