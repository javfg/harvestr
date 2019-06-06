// Store.
import store from '../../store/store';

// Actions.
import { setProgressBarField } from '../../actions/ProgressBar';


class ProgressBarController {
  constructor() {
    this.totalProgress = 0;
  }

  setTotalProgress = (totalProgress) => {this.totalProgress = totalProgress};

  setCurrentProgress = (currentProgress) => {
    currentProgress = Math.ceil(currentProgress * 100 / this.totalProgress);

    store.dispatch(setProgressBarField({currentProgress}));
  };


  setCurrentMessage = (currentMessage) => store.dispatch(setProgressBarField({currentMessage}));
}


export default ProgressBarController;
