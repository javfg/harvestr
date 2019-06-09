// Actions.
import { setItemList } from './itemList';
import { setRankingDefinition } from './RankingDefinition';
import { setSearchProfile } from './searchProfile';
import { setSearchResults } from './searchResults';
import { setHarvestPageField } from './HarvestPage';
import { setResultsPageField } from './ResultsPage';

// Debug data.
import { debugItemList } from '../config/debugItemList';
import { debugRankingDefinition } from '../config/debugRankingDefinition';
import { debugSearchProfile } from '../config/debugSearchProfile';
import { debugSearchResults } from '../config/debugSearchResults';
import { debugResultsPage } from '../config/debugResultsPage';


//
// config actions.
//

// Get config environment.
export const getConfigFromEnv = () => (dispatch) => {
  const config = {
    // eslint-disable-next-line no-undef
    debug: process.env.DEBUG === 'true'
  }

  return dispatch(setConfig(config));
}


// Populate database with example data.
export const populateStore = () => {
  return (dispatch, getState) => {
    const config = getState().config;

    // Debug settings.
    if (config.debug) {
      dispatch(setItemList(debugItemList));
      dispatch(setSearchProfile(debugSearchProfile));
      dispatch(setRankingDefinition(debugRankingDefinition));
      dispatch(setSearchResults(debugSearchResults));
      dispatch(setHarvestPageField({currentStep: 1}));
      dispatch(setResultsPageField(debugResultsPage));
    }
  }
}


// Redux store update for config.
export const setConfig = (config) => {
  return {
    type: 'SET_CONFIG',
    config
  };
};
