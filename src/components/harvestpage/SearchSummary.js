import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setSearchResults } from '../../actions/searchResults';

// Components.
import PageTitle from '../common/PageTitle';

// Search engine.
import SearchEngine from '../../engine/searchEngine';


class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = async () => {
    const searchEngine = new SearchEngine();

    console.log('Launch with:',
      this.props.itemList,
      this.props.searchProfile,
      this.props.rankingDefinition,
    );

    const searchResults = await searchEngine.run(
      this.props.searchProfile,
      this.props.itemList
    );

    console.log("SEARCH DONE. RESULTS:", searchResults);

    this.props.setSearchResults(searchResults);
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
  harvestPage: state.ui.harvestPage,
  itemList: state.itemList,
  rankingDefinition: state.rankingDefinition,
  searchProfile: state.searchProfile
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
