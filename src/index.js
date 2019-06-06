import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Router.
import AppRouter from './routers/AppRouter';

// Store.
import store from './store/store';

// Actions.
import { getConfigFromEnv, populateStore } from './actions/Config';

// CSS.
import './styles/styles.scss';


// App container.
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Launch initialization actions. For now:
//   - Get config.
//   - Populate store.
(async () => {
  await store.dispatch(getConfigFromEnv());
  await store.dispatch(populateStore());
})()

// Render app.
ReactDOM.render(jsx, document.getElementById('app'));
