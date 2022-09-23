import { useEffect, useState } from "react";
import mockData from '../mockData';
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from './styles.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
    const productId = 1;


    const getProduct = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData);
            }, 2000);
        })
    }


    useEffect (() => {
        getProduct().then(prod => {
            setLoader(false);
            setProduct(prod.filter(prod => prod.id === 3))
        })               
    }, [productId])

    if (loader){
        return <h1>Cargando detalle del producto ...</h1>
    }

    return (
        <div className="itemDetailContainer d-flex mt-5">
            {
                product.map((producto)=>(
                    <ItemDetail 
                    key={producto.id} 
                    titulo={producto.titulo}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    img={producto.img}
                     />
                ))
            }
            
        </div>
    )
}

export default ItemDetailContainer;