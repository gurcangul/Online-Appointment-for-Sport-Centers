import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { AppProvider } from './context/appContext'

import { reducers } from './reducers';
import App from './App';
import './index.css';

const chlidren = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={chlidren}>
    <AppProvider>
    <App />
    </AppProvider>
  </Provider>,
  document.getElementById('root'),
);