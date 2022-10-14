import { useEffect, useState } from "react";
import mockData from '../../components/mockData';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import styles from './styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";



const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [loader, setLoader] = useState(true);
    const [existe, setExiste] = useState(false);
    const productId = 0;
    const {id} = useParams();
    const navegr = useNavigate();

    const getProduct = () => {
        

        const db = getFirestore();  
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc).then(res => {

            if (res.data() === undefined)
            {
                
                alert("El producto no se encuentra en nuestra BD")
                navegr('/');
            }

            const datosProdu = {id: res.id, ...res.data()}
            setProduct(datosProdu);    
            
        }).catch( err => {console.log(err);})
        
    }

    useEffect (() => {
        getProduct()
    }, [])

    //Seteo un segundo de delay para que renderice 
    useEffect (() => {
        setTimeout(() => {
            setLoader(false)                
        }, 500);
    }, [product])





    return (
        <div>
                    {
                    loader 
                    ? (<div className="container text-center mt-5"> <h3>Cargando detalle del producto ...</h3></div>) 
                    : (
                        <div className="itemDetailContainer d-flex mt-5">
                            {
                                
                                [product].map((producto)=>(
                                    <ItemDetail 
                                    key={producto.id} 
                                    id={producto.id}
                                    titulo={producto.titulo}
                                    descripcion={producto.descripcion}
                                    categoria={producto.categoria}
                                    precio={producto.precio}
                                    img={producto.img}
                                    stock={producto.stock}
                                    />
                                ))
                            }
                            
                        </div>
                    )}
                </div>
    )
}

export default ItemDetailContainer;