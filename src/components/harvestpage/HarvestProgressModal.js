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


class HarvestProgressModal extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClickGoToResults = () => {
    this.props.setHarvestProgressModalField({visible: false});
    this.props.history.push('/results');
  }


  render() {
    const {
      handleClickGoToResults,
      props: {
        harvestProgressModal: { currentItems, currentMessage, currentProgress, harvestDone },
        resultsPage: { stats }
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
              <div className="modal-message">
                <small className="text-muted mr-2">{ currentMessage }</small>
                { currentItems.map(itemName => <Badge key={`item-${itemName}`} name={itemName} type="item" />) }
              </div>
            </>
          ) : (
            <>
              <h1><FontAwesomeIcon icon={faCheck} className="text-success mr-2" />Done</h1>
              <div className="modal-stats align-items-center">
                <div className="mb-1">
                  <Badge name={`${stats.items} Items`} type="item" />
                </div>
                <div className="mb-1">
                  <Badge name={`${stats.queries} Queries`} type="query" />
                </div>
                <div className="mb-1">
                  <Badge name={`${stats.fields} Fields`} type="field" />
                </div>
                <div className="mb-1">
                  <Badge name={`${stats.entries} Entries`} type="entry" />
                </div>
                <div className="mb-1">
                  <Badge name={`${stats.values} Values`} type="value" />
                </div>
              </div>
            </>
          )}

          <ProgressBar currentProgress={currentProgress} />
          <button
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
  resultsPage: state.ui.resultsPage.main
});

const mapDispatchToProps = dispatch => ({
  setHarvestProgressModalField: (newState) => dispatch(setHarvestProgressModalField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HarvestProgressModal));