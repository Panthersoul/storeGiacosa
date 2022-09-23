const Item = ({titulo, precio, img}) => {
    console.log(precio);
    return(
       <div className="item m-3">
           <img src={img} alt="imagen" />
           <h5>{titulo}</h5>
           <h6>{precio}</h6>
       </div>
    )
}

export default Item;

