import { useEffect, useState } from "react";
import mockData from '../../components/mockData';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import styles from './styles.css';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);
    const productId = 0;
    const {id} = useParams();



    const getProduct = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData);
            }, 2000);
        })
    }

    useEffect (() => {
        getProduct().then(prod => {
            setProduct( prod.filter(prod => prod.id === parseInt(id)));
            setLoader(false);
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