import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('modern');
const root = createRoot(container); // Create a root.

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
