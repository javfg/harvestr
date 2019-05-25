import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFolderOpen, faFile, faHammer, faListAlt } from '@fortawesome/free-solid-svg-icons';

// Components.
import FileLoader from '../io/FileLoader';
import PageTitle from '../common/PageTitle';
import QueryList from '../common/QueryList';

// Actions.
import { setSearchProfile } from '../../actions/searchProfile';
import { setHarvestPageField } from '../../actions/HarvestPage';


// TODO: CHECK SEARCH PROFILE VALIDITY.
class LoadSearchProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  handleSearchProfileFile = (result) => {
    // Save search profile, then store in redux.
    this.props.setSearchProfile(result);
  }

  handleSearchProfileFileChange = (searchProfileFile) => {
    this.props.setHarvestPageField({searchProfileFile})
  }

  handleGoToSearchProfile = () => {
    this.props.history.push('/profile');
  }


  render() {
    const {
      handleGoToSearchProfile,
      handleSearchProfileFile,
      handleSearchProfileFileChange,
      props: { searchProfile, harvestPage: { searchProfileFile } }
    } = this;

    return (
      <>
        <PageTitle
          description="The search profile defines which resources to fetch for each of the
                       items previously loaded; and for every resource, the relevant fields
                       of data the harvest will contain."
          icon={faSearch}
          margins='mb-2'
          size="h3"
          title="Search profile"
        />

        <div className="row mb-5 px-5">
          <div className="col col-md-12 col-lg-6 pr-3 pl-0">
            <PageTitle
              icon={faFolderOpen}
              margins='ml-0 mb-0'
              size="h4"
              title="Load search profile"
            />

            <div className="row mt-1">
              <div className="col">
                <FileLoader
                  fileType='JSON'
                  handleUploadFileChange={handleSearchProfileFileChange}
                  onFileRead={handleSearchProfileFile}
                  uploadFile={searchProfileFile}
                />
              </div>
            </div>
          </div>
          <div className="col col-md-12 col-lg-6 pl-3">
            <PageTitle
              icon={faFile}
              margins='mb-0'
              size="h4"
              title="Create a new search profile"
            />

            <div className="row mt-1">
              <div className="col border p-2 mx-0">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleGoToSearchProfile}
                >
                  <FontAwesomeIcon icon={faHammer} /> Go to search profile creator
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col px-5">
            <div className="card">
              <div className="card-header py-2">
                <PageTitle
                  icon={faListAlt}
                  margins="mb-0"
                  size="h4"
                  title="Current search profile"
                />
              </div>

              <div className="card-body">
                <QueryList queries={searchProfile} />
              </div>
            </div>
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
    searchProfile: state.searchProfile
  };
};

const mapDispatchToProps = (dispatch) => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState)),
  setSearchProfile: (data) => dispatch(setSearchProfile(data))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadSearchProfile));
