import Item from '../Item/Item';
import {Link} from 'react-router-dom';

const ItemList = ({lista}) => {
    return(
        <div className='d-flex flex-wrap itemDetail '>
            {
            lista.map((producto)=>(
                <Link
                    key={producto.id}
                    to={'/detail/' + producto.id}
                    style={{textDecoration: 'none', color: 'white'}}
                >
                    <Item 
                    
                    titulo={producto.titulo} 
                    precio={producto.precio} 
                    img={producto.img} 
                    />
                </Link>
                ))}
        
        </div>
    );
};

export default ItemList;