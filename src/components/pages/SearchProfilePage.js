import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faSearch } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setSearchResults } from '../../actions/searchResults';
import { setSearchProfilePageField } from '../../actions/SearchProfilePageReducer';

// Components.
import PageTitle from '../common/PageTitle';
import QueryList from '../searchprofilepage/QueryList';


class SearchProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      handleClickBackToHarvestEditor
    } = this;

    return (
      <div className="container my-4">
        <PageTitle
          description="Build a Search Profile by adding queries to services, and the relevant fields to retrieve from
                       them as entries."
          icon={faSearch}
          title="Search Profile Editor"
        />

        <div className="row">
          <div className="col bg-light border mx-3 py-2">
            <QueryList />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col col-3">
            {
              <button
                className="btn btn-block btn-primary"
                onClick={handleClickBackToHarvestEditor}
              >
                <FontAwesomeIcon icon={faSeedling} className="mr-1" />Go to harvest editor
              </button>
            }
          </div>
        </div>

      </div>
    );
  }
}


//
// Mapping functions.
//
const mapStateToProps = (state) => ({
  config: state.config,
  searchProfilePage: state.ui.searchProfilePage
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setSearchProfilePageField: (newState) => dispatch(setSearchProfilePageField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchProfilePage));
