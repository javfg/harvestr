// Harvest Page Settings Reducer

const HarvestPageDefaultState = {
  currentStep: 1,
  currentLoadItemListTab: 0,
  itemList: [],
  loadItemListOk: false,
  loadSearchProfileOk: false,
  loadRankingDefinitionOk: false,
  launchSearchOk: false,
  columns: [],
  selectedColumn: undefined,
  selectedTab: 0,
  uploadFileName: undefined,
  uploadFileContents: undefined,
  uploadFileHasHeaders: true,
  textAareaContents: ''
};


export default (state = HarvestPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_HARVESTPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
