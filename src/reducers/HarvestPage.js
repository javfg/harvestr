//
// Harvest Page Settings Reducer.
//
const HarvestPageDefaultState = {
  currentStep: 1,
  currentLoadItemListTab: 0,
  itemList: [],
  harvestDone: false,
  columns: [],
  searchProfileFile: undefined,
  selectedColumn: undefined,
  selectedTab: 0,
  itemListFile: undefined,
  itemListFileContents: undefined,
  itemListFileHasHeader: true,
  textAreaContents: '',
};

export default (state = HarvestPageDefaultState, action) => {
  switch (action.type) {
    case 'SET_HARVESTPAGESTATE':
      return { ...state, ...action.newState };

    default:
      return state;
  }
};
