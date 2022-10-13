import styles from './styles.css'
import mockData from '../../components/mockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams, useLocation } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

    /*Declaro el state para manejar los productos*/
    const [productList, setproductList] = useState([])
    const {categoryId} = useParams();
    const [loader, setLoader] = useState(true);
    const location = useLocation();

   

    useEffect(()=> {
        getProducts();
    }, [location])

    /*Llamo la lista una vez montado el componente*/
    useEffect (() => {
        getProducts();
        setLoader(false);
    },[])

    const getProducts =  () => {
        
            const db = getFirestore();  
            const querySnapShot =  collection(db, 'items');

            /* Agrego el filtro por categoría */
            if (categoryId){
                const queryFiltered = query(
                    querySnapShot, 
                    where("categoria", "==", categoryId));

                getDocs(queryFiltered).then(res => {
                    const data = res.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    });
                    setproductList(data)

                }).catch(err => {console.log(err);})
                
            }else{
                getDocs(querySnapShot).then(res => {
                    const datos = res.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    });
                    setproductList(datos)
                }).catch(err => {console.log(err);})
                    
            }
        
    }


    if (loader) return (
        <div className="container text-center mt-5">
            <h3>Listando los articulos...</h3>
        </div>
    )

    return (
        <>
            <div className='container ItemListContainer pt-5'>
                {productList && <ItemList lista={productList}/>} 
            </div>
        </>
    )
}

export default ItemListContainer;