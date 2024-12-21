import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/styles/styles.css"
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./data/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            <ToastContainer position="top-right" rtl={true} closeOnClick={true} />
        </Provider>
    </React.StrictMode>
);
