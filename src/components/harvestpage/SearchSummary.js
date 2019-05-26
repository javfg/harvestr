import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faPlay } from '@fortawesome/free-solid-svg-icons';

// Components.
import PageTitle from '../common/PageTitle';


class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = () => {
    console.log('LAUNCH!');
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
              <FontAwesomeIcon icon={faPlay} /> Launch harvest
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
const mapStateToProps = (state) => {
  return {
    harvestPage: state.ui.harvestPage,
    itemList: state.itemList,
    rankingDefinition: state.rankingDefinition,
    searchProfile: state.searchProfile
  };
};


export default withRouter(connect(mapStateToProps)(SearchSummary));
