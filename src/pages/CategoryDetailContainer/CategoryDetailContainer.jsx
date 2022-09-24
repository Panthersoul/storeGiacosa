import { useEffect, useState } from "react";
import mockData from '../../components/mockData';
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import styles from './styles.css';
import { useParams } from 'react-router-dom';

const CategoryDetailContainer = () => {

    const [categoria, setCategorias] = useState({});
    const [loader, setLoader] = useState(true);
    const categoriaName = '';
    const catName = useParams();
    
/*Aqui la simulacion del acceso a datos*/
const getCategoria = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { 
            resolve(mockData);
        }, 2000);
    })
}

useEffect (() => {
    getCategoria().then(prod => {
        setCategorias(prod.filter(produ => produ.categoria === catName.categoryId));
        setLoader(false);
        console.log(categoria);
    })               
}, [categoriaName])


if (loader) return (
    <div className="container text-center mt-5">
        <h3>Listando los articulos para la categoria seleccionada.</h3>
    </div>
)

    return (
        <div className="container">
            <div className="itemCategoryContainer d-flex ">
                {
                    
                    categoria.map((productos)=>(
                        <ItemDetail 
                        key={productos.id} 
                        titulo={productos.titulo}
                        descripcion={productos.descripcion}
                        precio={productos.precio}
                        img={productos.img}
                        />
                    ))
                }
                
            </div>
        </div>
    )

}

export default CategoryDetailContainer;