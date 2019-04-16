import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Router } from "react-router";
import { Provider } from 'react-redux';
import "@babel/polyfill";

import {configureStore} from './redux';
import rootSaga from './redux/rootSaga';
import history from './utils/history';
import {App} from './containers/app';

const supportsHistory = 'pushState' in window.history;
const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('react-app')
);