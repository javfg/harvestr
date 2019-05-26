import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import store from './store/store';

import { getConfigFromEnv, populateStore } from './actions/Config';

import './styles/styles.scss';


// App container.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


(async () => {
  await store.dispatch(getConfigFromEnv());
  await store.dispatch(populateStore());
})()



// Render app.
ReactDOM.render(jsx, document.getElementById('app'));
