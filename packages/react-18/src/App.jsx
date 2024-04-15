import React from 'react';
import './App.css';

console.log('Modern React App. Version: ', React.version);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3>Modern React {React.version} App</h3>
            </header>
            <p>
                Edit <code>packages/react-18/src/App.jsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React with Version 18
            </a>
        </div>
    );
}

export default App;