import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement //htmlelement is casting
);

root.render(
    // <React.StrictMode> //says that in development, functions on strict mode and renders everything twice (compares the difference twice between states)
    <BrowserRouter> {/*  */}
        <App /> {/* app is first component in the react tree that renders */}
    </BrowserRouter>
    // </React.StrictMode>
);


