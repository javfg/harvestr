// Actions.
import { setItemList } from './itemList';
import { setRankingDefinition } from './RankingDefinition';
import { setSearchProfile } from './searchProfile';
import { setHarvestPageField } from './HarvestPage';

// Debug data.
import { debugItemList } from '../config/debugItemList';
import { debugRankingDefinition } from '../config/debugRankingDefinition';
import { debugSearchProfile } from '../config/debugSearchProfile';


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
      console.log('loading debug data');

      dispatch(setItemList(debugItemList));
      dispatch(setSearchProfile(debugSearchProfile));
      dispatch(setRankingDefinition(debugRankingDefinition));
      dispatch(setHarvestPageField({currentStep: 4}))
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
