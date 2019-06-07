import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers.
import harvestPageReducer from '../reducers/HarvestPage';
import configReducer from '../reducers/ConfigReducer';
import itemListReducer from '../reducers/itemList';
import rankingDefinitionReducer from '../reducers/RankingDefinition';
import searchProfileReducer from '../reducers/searchProfile';
import searchResultReducer from '../reducers/searcResults';
import resultsPageReducer from '../reducers/ResultsPage';
import resultsTooltipReducer from '../reducers/ResultsTooltip';
import harvestProgressModalReducer from '../reducers/HarvestProgressModal';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//
// Store management.
//

// Store creation.
const store = createStore(
  combineReducers({
    config: configReducer,
    itemList: itemListReducer,
    rankingDefinition: rankingDefinitionReducer,
    searchProfile: searchProfileReducer,
    searchResults: searchResultReducer,
    ui: combineReducers({
      harvestPage: harvestPageReducer,
      harvestProgressModal: harvestProgressModalReducer,
      resultsPage: combineReducers({
        main: resultsPageReducer,
        resultsTooltip: resultsTooltipReducer,
      })
    }),
  }),
  composeEnhancers(applyMiddleware(thunk))
);


export default store;
