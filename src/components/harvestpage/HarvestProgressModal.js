import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faList, faPlay } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestProgressModalField } from '../../actions/HarvestProgressModal';

// Components.
import Badge from '../common/Badge';
import ProgressBar from '../common/ProgressBar';
import StatsBox from '../common/StatsBox';


class HarvestProgressModal extends React.Component {
  constructor(props) {
    super(props);

    this.goToResultsButton = React.createRef();
  }


  handleClickGoToResults = () => {
    this.props.setHarvestProgressModalField({visible: false});
    this.props.history.push('/results');
  }


  componentDidUpdate = () => {
    if (this.props.harvestProgressModal.harvestDone) {
      this.goToResultsButton.focus();
    }
  }


  render() {
    const {
      handleClickGoToResults,
      props: {
        harvestProgressModal: { currentItems, currentMessage, currentProgress, elapsedTime, harvestDone },
        details: { stats }
      }
    } = this;


    return (
      <div className="modal-bg">
        <div className="modal-box p-4">
          { !harvestDone ? (
            <>
              <h1><FontAwesomeIcon icon={faPlay} className="modal-icon-blink mr-2" />Running harvest</h1>
              <p className="text-muted text-center">
                The items&apos; queries are being fetched, processed, and sorted according to
                the ranking. Please stand by.
              </p>
              <small className="text-muted mr-2">{ currentMessage }</small>
              <div className="modal-message">
                { currentItems.map(itemName => <Badge key={`item-${itemName}`} name={itemName} type="item" />) }
              </div>
            </>
          ) : (
            <>
              <h1><FontAwesomeIcon icon={faCheck} className="text-success mr-2" />Done</h1>
              <h4>This harvest took {elapsedTime} seconds.</h4>
              <StatsBox stats={stats} />
            </>
          )}

          <ProgressBar currentProgress={currentProgress} />
          <button
            ref={(button) => {this.goToResultsButton = button;}}
            className="btn btn-primary"
            disabled={!harvestDone}
            onClick={handleClickGoToResults}
          >
            <FontAwesomeIcon icon={faList} className="mr-2" />View results
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  harvestProgressModal: state.ui.harvestProgressModal,
  details: state.harvest.details
});

const mapDispatchToProps = dispatch => ({
  setHarvestProgressModalField: (newState) => dispatch(setHarvestProgressModalField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HarvestProgressModal));