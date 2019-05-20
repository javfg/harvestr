import React from 'react';
import { connect } from 'react-redux';

// Components.
import FileLoader from '../../io/FileLoader';
import QueryList from './QueryList';

// Actions.
import { setSearchProfile } from '../../../actions/searchProfile';



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
      <div>
        <h3>Load search profile</h3>
        <FileLoader fileType='JSON' onFileRead={this.handleSearchProfileFile} />
        <h4>Queries</h4>
        <QueryList queries={this.state.searchProfile} />
      </div>
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
