import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import itemListReducer from '../reducers/itemList';
import searchProfileReducer from '../reducers/searchProfile';
//import searchEngineReducer from '../reducers/searchEngine'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//
// Store management.
//

// Store creation.
const store = createStore(
  combineReducers({
    itemList: itemListReducer,
    searchProfile: searchProfileReducer
    //searchEngine: searchEngineReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);


export default store;

