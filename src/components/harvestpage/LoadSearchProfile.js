import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFolderOpen, faFile, faHammer, faListAlt } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setSearchProfile } from '../../actions/searchProfile';
import { setHarvestPageField } from '../../actions/HarvestPage';

// Components.
import FileLoader from '../io/FileLoader';
import PageTitle from '../common/PageTitle';
import QueryList from '../common/QueryList';


// TODO: CHECK SEARCH PROFILE VALIDITY.
class LoadSearchProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  handleSearchProfileFile = (result) => {
    this.props.setHarvestPageField({loadSearchProfileOk: true});
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
          size="h3"
          title="Search profile"
        />

        <div className="row mb-3 px-3">
          <div className="col col-6 flex-column">
            <PageTitle
              icon={faFolderOpen}
              margins='my-2'
              size="h4"
              title="Load search profile"
            />

            <FileLoader
              fileType='JSON'
              handleUploadFileChange={handleSearchProfileFileChange}
              onFileRead={handleSearchProfileFile}
              uploadFile={searchProfileFile}
            />
          </div>
          <div className="col col-6 flex-column">
            <PageTitle
              icon={faFile}
              margins='my-2'
              size="h4"
              title="Create a new search profile"
            />

            <button
              className="btn btn-primary btn-block mt-3"
              onClick={handleGoToSearchProfile}
            >
              <FontAwesomeIcon icon={faHammer} /> Go to search profile editor
            </button>
          </div>
        </div>

        <div className="row px-3">
          <div className="col">
            <div className="card">
              <div className="card-header py-2">
                <PageTitle
                  icon={faListAlt}
                  margins="mb-0"
                  size="h4"
                  title="Current search profile"
                  description="Here, you can take a look at the queries, fields and entries this search profile defines."
                  descriptionSize="small"
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
    searchProfile: state.harvest.searchProfile
  };
};

const mapDispatchToProps = (dispatch) => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState)),
  setSearchProfile: (data) => dispatch(setSearchProfile(data))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadSearchProfile));
