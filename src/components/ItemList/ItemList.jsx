import Item from '../Item/Item'

const ItemList = ({lista}) => {
    return(
        <div className='d-flex flex-wrap '>
            {
            lista.map((producto)=>(
                <Item 
                key={producto.id}
                titulo={producto.titulo} 
                precio={producto.precio} 
                img={producto.img} 
                />
                ))}
        
        </div>
    );
};

export default ItemList;