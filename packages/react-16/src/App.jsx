import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';
import './App.css';

console.log('Old React App. Version: ', React.version);

const App = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <section className="App">
            <header className="App-header">
                <h3>Old React {React.version} App</h3>
            </header>
            <p>
                Edit <code>packages/react-16/src/App.jsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://17.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React with Version 16
            </a>
            <div className={"App-container"}>
                <h4>Click Counter</h4>
                <div>
                    <button className={'App-btn'} onClick={() => dispatch(increment())}>Increment</button>
                    <span className={'App-counter-value'}>{count}</span>
                    <button className={'App-btn'} onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
            </div>
        </section>
    );
}

export default App;
