import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'; //high order component
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement //htmlelement is casting
);

// const store = {} as any; //solves store error for now

root.render(
    // <React.StrictMode> //says that in development, functions on strict mode and renders everything twice (compares the difference twice between states)
    <Provider store={store}>
        <BrowserRouter>
            <App /> {/* app is first component in the react tree that renders */}
        </BrowserRouter>
    </Provider>

    // </React.StrictMode>
);


