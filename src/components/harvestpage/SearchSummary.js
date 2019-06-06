import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

// Actions.
import { setSearchResults } from '../../actions/searchResults';
import { setProgressBarField } from '../../actions/ProgressBar';
import { setResultsPageField } from '../../actions/ResultsPage';

// Components.
import PageTitle from '../common/PageTitle';
import ProgressBar from '../common/ProgressBar';

// Search engine.
import SearchEngine from '../../engine/searchEngine';




class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = async () => {
    const {
      progressBar: { currentMessage, currentProgress }
    } = this.props;

    const searchEngine = new SearchEngine(
      this.props.itemList,
      this.props.searchProfile,
      this.props.rankingDefinition,
      this.props.config
    );

    const progressModal = withReactContent(Swal);

    // TODO: FIX THIS FUCKING SHIT.
    progressModal.mixin({
      title: 'Harvest in progress',
      html: (
        <div>
          <ProgressBar
            currentMessage={currentMessage}
            currentProgress={currentProgress}
          />
          {currentProgress === 100 && (
            <button
            >
              <FontAwesomeIcon icon={faSeedling} className="mr-2" />
              Review harvest
            </button>
          )}
        </div>
      ),
      showCancelButton: false,
      showConfirmButton: false,
      allowOutsideClick: false
    }).fire({});

    const searchResults = await searchEngine.run();

    this.props.setSearchResults(searchResults);
    this.props.setResultsPageField({
      harvestDone: true,
      currentPage: 0,
      totalPages: Math.ceil(searchResults / 10),
      pageSize: 10
    });
  }


  render() {
    const {
      handleLaunchSearch,
      //props: { itemList, rankingDefinition, searchProfile  }
    } = this;

    return (
      <>
        <PageTitle
          description="Summary description."
          icon={faSeedling}
          margins='mb-2'
          size="h3"
          title="Harvest summary"
        />

        <div className="row">
          <div className="col text-center">
            <p>Summary goes here</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-8 col-sm-6 col-md-4">
            <button
              className="btn btn-primary btn-block mt-2"
              onClick={handleLaunchSearch}
            >
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />Launch harvest
            </button>
          </div>
        </div>
      </>
    );
  }
}


//
// Mapping functions.
//
const mapStateToProps = (state) => ({
  config: state.config,
  harvestPage: state.ui.harvestPage,
  itemList: state.itemList,
  rankingDefinition: state.rankingDefinition,
  progressBar: state.ui.resultsPage.progressBar,
  searchProfile: state.searchProfile
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
  setProgressBarField: (newState) => dispatch(setProgressBarField(newState))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
