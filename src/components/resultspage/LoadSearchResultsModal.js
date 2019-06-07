import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setResultsPageField } from '../../actions/ResultsPage';

// Components.
import StatsBox from '../common/Stats';


class LoadSearchResultsModal extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClickCloseModal = () => {
    this.props.setResultsPageField({loadResultsModalVisible: false});
  }


  render() {
    const {
      handleClickCloseModal,
      props: { details: { stats } }
    } = this;


    return (
      <div className="modal-bg">
        <div className="modal-box p-4">
          <>
            <h1><FontAwesomeIcon icon={faCheck} className="text-success mr-2" />Results loaded correctly</h1>
            <StatsBox stats={stats} />
          </>
          <button
            className="btn btn-primary"
            onClick={handleClickCloseModal}
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />View results
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  details: state.harvest.details,
  resultsPage: state.ui.resultsPage.main
});

const mapDispatchToProps = dispatch => ({
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoadSearchResultsModal);