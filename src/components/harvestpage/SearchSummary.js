import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestProgressModalField } from '../../actions/HarvestProgressModal';
import { setResultsPageField } from '../../actions/ResultsPage';
import { setSearchResults } from '../../actions/searchResults';

// Components.
import HarvestProgressModal from './HarvestProgressModal';
import PageTitle from '../common/PageTitle';

// Search engine.
import SearchEngine from '../../engine/searchEngine';




class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = async () => {
    this.props.setHarvestProgressModalField({visible: true});

    const searchEngine = new SearchEngine(
      this.props.itemList,
      this.props.searchProfile,
      this.props.rankingDefinition,
      this.props.config
    );

    const searchResults = await searchEngine.run();

    this.props.setSearchResults(searchResults.items);
    this.props.setResultsPageField({
      currentPage: 0,
      totalPages: Math.ceil(searchResults.items.length / 10),
      pageSize: 10,
      stats: searchResults.stats
    });
  }


  render() {
    const {
      handleLaunchSearch,
      props: {
        harvestProgressModal: { visible }
      }
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

        <CSSTransition
          in={visible}
          timeout={2500}
          classNames='modal'
          unmountOnExit
        >
          <HarvestProgressModal />
        </CSSTransition>
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
  harvestProgressModal: state.ui.harvestProgressModal,
  itemList: state.itemList,
  rankingDefinition: state.rankingDefinition,
  searchProfile: state.searchProfile
});

const mapDispatchToProps = dispatch => ({

  // For testing.
  setHarvestProgressModalField: (newState) => dispatch(setHarvestProgressModalField(newState)),

  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
