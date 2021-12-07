import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { print1, print2, print3 } from './exampleAddons/middlewares';

import thunk from 'redux-thunk';

import reducers from './features';
import App from './App';
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, print1, print2, print3))
);

store.dispatch({ type: 'debug' });

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);
