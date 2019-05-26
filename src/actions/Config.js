import { setItemList } from "./itemList";
import { setRankingDefinition } from "./RankingDefinition";
import { setSearchProfile } from "./searchProfile";

import { debugStoreItemList } from "../config/debugStoreItemList";
import { debugStoreRankingDefinition } from "../config/debugStoreRankingDefinition";
import { debugStoreSearchProfile } from "../config/debugStoreSearchProfile";
import { setHarvestPageField } from "./HarvestPage";


//
// config actions.
//

// Get config environment.
export const getConfigFromEnv = () => (dispatch) => {
  const config = {
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
      dispatch(setItemList(debugStoreItemList));
      dispatch(setSearchProfile(debugStoreSearchProfile));
      dispatch(setRankingDefinition(debugStoreRankingDefinition));
      dispatch(setHarvestPageField({currentStep: 4}));
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
