import React, { useState } from 'react';
import {Button} from "@mui/material";
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
        <div className="Counter-container">
            <h4>Click Counter</h4>
            <div>
                <Button variant="contained" className="Counter-btn" onClick={increment}>Increment</Button>
                <span className="Counter-value">{count}</span>
                <Button variant="contained" className="Counter-btn" onClick={decrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;
