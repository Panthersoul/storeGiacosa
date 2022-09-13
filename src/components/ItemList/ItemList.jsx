import Item from '../Item/Item'

const ItemList = ({lista}) => {
    return(
        <div>
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