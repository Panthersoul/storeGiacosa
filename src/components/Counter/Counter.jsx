import style from './style.css'
import { useState } from "react";


const Counter = () => {
    const [initialState, SetInitialState] = useState(0);
    const [stockTotal, SetStockTotal] = useState(10);
    
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

    return(
        <div >
            <h4>{initialState}</h4>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
        </div>
    )
    


}

export default Counter;