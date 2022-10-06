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
        return (  
              <div className="container text-center mt-5">
                  <h3>Cargando detalle del producto ...</h3>
              </div>
              
              )
    }

    return (
        <div className="itemDetailContainer d-flex mt-5">
            {
                
                product.map((producto)=>(
                    <ItemDetail 
                    key={producto.id} 
                    id={producto.id}
                    titulo={producto.titulo}
                    descripcion={producto.descripcion}
                    categoria={producto.categoria}
                    precio={producto.precio}
                    img={producto.img}
                     />
                ))
            }
            
        </div>
    )
}

export default ItemDetailContainer;