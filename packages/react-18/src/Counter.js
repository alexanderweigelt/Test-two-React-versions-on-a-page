import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className={"Counter-container"}>
            <h4>Click Counter</h4>
            <div>
                <button className="Counter-btn" onClick={increment}>Increment</button>
                <span className="Counter-value">{count}</span>
                <button className="Counter-btn" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;
