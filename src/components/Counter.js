import React, {useState} from 'react';

const Counter = (props) => {

    const [counter, setCounter] = useState(0);

    const counterIncreaseHandler = () => {
        setCounter(counter + 1);
    }

    const counterDecreaseHandler = () => {
        setCounter(counter - 1);
    }

    return(
        <div style={{display: props.hide === true ? 'none' : 'inherit'}}>
            <p>{counter}</p>
            <button onClick={counterIncreaseHandler}>+1</button>
            <button onClick={counterDecreaseHandler}>-1</button>
        </div>
    )
}

export default Counter;