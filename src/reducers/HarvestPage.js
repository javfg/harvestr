// Harvest Page Settings Reducer

const HarvestPageDefaultState = {
  currentStep: 2,
  currentLoadItemListTab: 0,
  itemList: [],
  loadItemListOk: false,
  loadSearchProfileOk: false,
  loadRankingDefinitionOk: false,
  launchSearchOk: false,
  columns: [],
  searchProfileFile: undefined,
  selectedColumn: undefined,
  selectedTab: 0,
  itemListFile: undefined,
  itemListFileContents: undefined,
  itemListFileHasHeader: true,
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
