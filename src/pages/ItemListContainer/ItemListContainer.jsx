import styles from './styles.css'
import mockData from '../../components/mockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams, useLocation } from 'react-router-dom'

const ItemListContainer = () => {

    /*Declaro el state para manejar los productos*/
    const [productList, setproductList] = useState([])
    const {categoryId} = useParams();
    const [loader, setLoader] = useState(true);

    const location = useLocation();
    useEffect(()=> {
        cargoCategorias()
    }, [location])


    
function cargoCategorias() {
    
    if (categoryId === undefined)
            {
                
                getProducts().then(products => { setproductList(products);} );
                setLoader(false);
                
            }else{
                
            getProducts().then(prod => {
            setproductList(prod.filter(produ => produ.categoria === categoryId));
            setLoader(false);
            })
        }
    }

    /*Llamo la lista una vez montado el componente*/
    useEffect (() => {
       cargoCategorias();
    },[])

    

    /*Cargo despues de dos segundos la data en el state*/
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData);
            }, 2000);
        })
    }

    if (loader) 
    return (
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