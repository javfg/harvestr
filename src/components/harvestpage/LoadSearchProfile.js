import React from 'react';
import { connect } from 'react-redux';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Components.
import FileLoader from '../io/FileLoader';
import QueryList from '../homepage/QueryList';

// Actions.
import { setSearchProfile } from '../../actions/searchProfile';
import PageTitle from '../common/PageTitle';


class LoadSearchProfile extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      searchProfile: props.searchProfile ? props.searchProfile : []
    };
  }


  checkSearchProfile = (searchProfile) => {
    // TODO: CHECK SEARCH PROFILE.
    searchProfile;
    return true;
  }

  handleSearchProfileFile = (result) => {
    try {
      this.checkSearchProfile(result);
    } catch (e) {
      console.log(e);
    }

    // Save search profile, then store in redux.
    this.setState({ searchProfile: result }, () => {this.props.setSearchProfile(this.state.searchProfile)});
  }


  render() {
    return (
      <>
        <PageTitle
          description="The search profile defines which resources to fetch for each of the
                       items previously loaded; and for every resource, the relevant fields
                       of data the harvest will contain."
          icon={faSearch}
          marginBottom='mb-2'
          size="h3"
          title="Search profile"
        />


        <div>
          <h3>Load search profile</h3>
          <FileLoader fileType='JSON' onFileRead={this.handleSearchProfileFile} />
          <h4>Queries</h4>
          <QueryList queries={this.state.searchProfile} />
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
    searchProfile: state.searchProfile
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSearchProfile: (data) => dispatch(setSearchProfile(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoadSearchProfile);
