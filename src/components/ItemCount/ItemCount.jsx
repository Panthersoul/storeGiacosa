import style from './style.css'
import { useState } from "react";


const ItemCount  = ({stock, initial, onAdd}) => {
    const [initialState, SetInitialState] = useState(initial);
    const [stockTotal, SetStockTotal] = useState(stock);
    
    const suma = () => {
        if (initialState < stockTotal){
            SetInitialState(initialState + 1);
            
        }
    };
    const resta = () => {
        if (initialState > 0)
        {
            SetInitialState (initialState - 1);
        }
    };

    const manejadorCarrito = () => {
        if (initialState <= stock) onAdd(initialState);
    };

    return(
        <div className='fondoOscuro  d-flex justify-content-center pt-5 ' >
            <div className='contadorContainer flex-column '>
                <h4>{initialState}</h4>
                <div className='d-flex justify-content-center pt-2'>
                    <input type="text" className='inputAuto text-center'></input>
                </div>
                <div className='pt-2'>
                    <button onClick={resta}>-</button>
                    <button onClick={suma}>+</button>
                </div>
                <button className='w-100' onClick={manejadorCarrito}>Agregar al carrito</button>
            </div>
            
        </div>
    )
    


}

export default ItemCount;