//
// Result Tooltip Reducer.
//
const resultsTooltipDefaultState = {
  name: undefined,
  entries: [],
  growX: 'right',
  growY: 'bottom',
  posX: 0,
  posY: 0,
  hoverVisible: false,
  lockedVisible: false
};

export default (state = resultsTooltipDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESULTSTOOLTIP':
      return {...state, ...action.newState};

    default:
      return state;
  }
};
