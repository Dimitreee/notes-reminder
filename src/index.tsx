import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'

import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import App from './App';

const history = createBrowserHistory();

const initialState = window.INITIAL_APP_STATE;
const store = configureStore(history, initialState);

const rootElementId = 'root';
const root = document.getElementById(rootElementId);

render(
    <App store={store} history={history}/>,
    root,
);

serviceWorker.register();
