import React, { Component } from 'react';
import './App.css';

console.log('Old React App. Version: ', React.version);

class App extends Component {
  render() {
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
        </section>
    );
  }
}

export default App;
