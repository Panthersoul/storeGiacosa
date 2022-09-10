const Item = ({titulo, precio, img}) => {
    console.log(precio);
    return(
       <div>
           <img src={img} alt="imagen" />
           <h2>{titulo}</h2>
           <h5>{precio}</h5>
       </div>
    )
}

export default Item;

