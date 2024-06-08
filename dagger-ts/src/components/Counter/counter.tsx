import React, { useState } from "react";
import './counter.css';
import { count } from "console";
const Counter: React.FC = (props) => {
    let [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        return counter == 0 ? null : setCounter(counter - 1);

    }
    return (
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={handleIncrement} style={{ backgroundColor: 'green' }}>Increment</button>
            <button onClick={handleDecrement} style={{ backgroundColor: 'tomato' }}>Decrement</button>
        </div>
    );
}
export default Counter;