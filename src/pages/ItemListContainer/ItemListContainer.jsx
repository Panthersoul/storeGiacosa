import styles from './styles.css'
import mockData from '../../components/mockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {

    /*Declaro el state para manejar los productos*/
    const [productList, setproductList] = useState([])

    /*Llamo la lista una vez montado el componente*/
    useEffect (() => {
        getProducts().then(products => {
            setproductList(products);
        })
    },[])

    

    /*Cargo despues de dos segundos la data en el state*/
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData);
            }, 2000);
        })
    }

    return (
        <>
            <div className='container ItemListContainer pt-5'>
                {productList && <ItemList lista={productList}/>} 
            </div>
        </>
    )
}

export default ItemListContainer;