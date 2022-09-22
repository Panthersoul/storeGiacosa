import { useEffect, useState } from "react";

const ItemDetail = ( {key, titulo, descripcion, precio, img} ) => {
    
return  (
        <>
           <h1>{titulo}</h1>
           
           <img src={img} alt="imagen" />
           <h6 className="pt-2">{descripcion}</h6>
           <p>Precio: $ {precio}</p>
        </>
    )
}

export default ItemDetail;


