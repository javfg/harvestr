import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers.
import harvestPageReducer from '../reducers/HarvestPage';
import configReducer from '../reducers/configReducer';
import detailsReducer from '../reducers/details';
import itemListReducer from '../reducers/itemList';
import rankingDefinitionReducer from '../reducers/rankingDefinition';
import searchProfileReducer from '../reducers/searchProfile';
import searchProfilePageReducer from '../reducers/searchProfilePage';
import searchResultReducer from '../reducers/searcResults';
import resultsPageReducer from '../reducers/resultsPage';
import resultsTooltipReducer from '../reducers/resultsTooltip';
import harvestProgressModalReducer from '../reducers/harvestProgressModal';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//
// Store management.
//

// Store creation.
const store = createStore(
  combineReducers({
    config: configReducer,
    harvest: combineReducers({
      details: detailsReducer,
      itemList: itemListReducer,
      rankingDefinition: rankingDefinitionReducer,
      searchProfile: searchProfileReducer,
      searchResults: searchResultReducer,
    }),
    ui: combineReducers({
      harvestPage: harvestPageReducer,
      harvestProgressModal: harvestProgressModalReducer,
      resultsPage: combineReducers({
        main: resultsPageReducer,
        resultsTooltip: resultsTooltipReducer,
      }),
      searchProfilePage: searchProfilePageReducer
    }),
  }),
  composeEnhancers(applyMiddleware(thunk))
);


export default store;
