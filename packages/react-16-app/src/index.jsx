import React from 'react-16';
import ReactDOM from 'react-dom-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/counterReducer';
import App from './App';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('legacy')
);

