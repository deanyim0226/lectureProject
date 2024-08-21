import React from 'react';
import * as ReactDOM from "react-dom/client"
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import App from './application/app';
import store from './state/store';

/*
Provider needs to be top-level component to provide the Redux store to the entire app
BrowserRouter handles client-side routing 
*/

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

