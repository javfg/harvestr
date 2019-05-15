import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createMuiTheme } from '@material-ui/core';

import AppRouter from './routers/AppRouter';
import store from './store/store';

import './styles/index.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';


// MUI theme.
const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#ffa270',
        main: '#ff7043', //deepOrange[400]
        dark: '#c63f17',
        contrastText: '#fff'
     },
     secondary: {
       light: '#4f83cc',
       main: '#01579b', //lightBlue[900]
       dark: '#002f6c'
     },
     extended: {
       light: '#efefef',
       main: '#bdbdbd', //grey[400]
       dark: '#8d8d8d'
     }
  },
  typography: {
     useNextVariants: true
  }
});



// App container.
const jsx = (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>
);


// Render app.
ReactDOM.render(jsx, document.getElementById('app'));
