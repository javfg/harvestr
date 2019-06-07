// Store.
import store from '../../store/store';

// Actions.
import { setHarvestProgressModalField } from '../../actions/HarvestProgressModal';


class ProgressBarController {
  constructor() {
    this.totalProgress = 0;
  }

  show = () => {store.dispatch(setHarvestProgressModalField({visible: true}))};
  hide = () => {store.dispatch(setHarvestProgressModalField({visible: false}))};
  done = (harvestDone) => {store.dispatch(setHarvestProgressModalField({harvestDone}))};

  setTotalProgress = (totalProgress) => {this.totalProgress = totalProgress};

  setCurrentProgress = (currentProgress) => {
    currentProgress = Math.ceil(currentProgress * 100 / this.totalProgress);

    store.dispatch(setHarvestProgressModalField({currentProgress}));
  };

  setCurrentMessage = (currentMessage) => store.dispatch(setHarvestProgressModalField({currentMessage}));
  setCurrentItems = (currentItems) => store.dispatch(setHarvestProgressModalField({currentItems}));
}


export default ProgressBarController;
