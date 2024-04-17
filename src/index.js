import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css'; // Zorg ervoor dat je tailwind.css importeert

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
