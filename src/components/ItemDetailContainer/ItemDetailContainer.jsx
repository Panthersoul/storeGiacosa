import { useEffect, useState } from "react";
import mockData from '../mockData';
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from './styles.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const getProduct = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData);
            }, 2000);
        })
    }


    useEffect (() => {
        getProduct().then(prod => {
            setProduct(prod.filter(prod => prod.id === 3))
        })               
    }, [])

    return (
        <div className="itemDetailContainer mt-5">
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