import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppProvider } from './context/appContext'

import { reducers } from './reducers';
import App from './App';
import './index.css';

const children = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={children}>
    <AppProvider>
    <App />
    </AppProvider>
  </Provider>,
  document.getElementById('root'),
);