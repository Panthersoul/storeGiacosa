import styles from './styles.css'

const Item = ({titulo, precio, img}) => {
    
    return(
       <div className="item m-3 text-center">
           <h5>{titulo}</h5>
           <div className='d-flex flex-column align-content-center'>
                <img className=" img-thumbnail w-auto" src={img} alt="imagen" />
                
                <h6>Precio: $ {precio}</h6>
           </div>
           
       </div>
    )
}

export default Item;

