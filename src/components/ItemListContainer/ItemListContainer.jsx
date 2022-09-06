import styles from './styles.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ItemListContainer pt-5'>
            <h1>{greeting}</h1>
            
        </div>
    )
}

export default ItemListContainer;