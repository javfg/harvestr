//
// Result Tooltip Reducer.
//
const ResultsTooltipDefaultState = {
  name: undefined,
  entries: [],
  growX: 'right',
  growY: 'bottom',
  posX: 0,
  posY: 0,
  hoverVisible: false,
  lockedVisible: false
};

export default (state = ResultsTooltipDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSTOOLTIP':
      return {...state, ...action.settings};

    default:
      return state;
  }
};
