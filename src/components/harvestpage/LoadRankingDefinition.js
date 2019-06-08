import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFolderOpen, faFile, faHammer, faListAlt } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestPageField } from '../../actions/HarvestPage';
import { setRankingDefinition } from '../../actions/RankingDefinition';

// Components.
import FileLoader from '../io/FileLoader';
import PageTitle from '../common/PageTitle';
import RuleList from '../common/RuleList';


// TODO: RANKING DEFINITION VALIDITY.
class LoadRankingDefinition extends React.Component {
  constructor(props) {
    super(props);
  }


  handleRankingDefinitionFile = (result) => {
    this.props.setHarvestPageField({loadRankingDefinitionOk: true});
    this.props.setRankingDefinition(result);
  }

  handleRankingDefinitionFileChange = (rankingDefinitionFile) => {
    this.props.setHarvestPageField({rankingDefinitionFile})
  }

  handleGoToRankingDefinition = () => {
    this.props.history.push('/ranking');
  }


  render() {
    const {
      handleGoToRankingDefinition,
      handleRankingDefinitionFile,
      handleRankingDefinitionFileChange,
      props: { rankingDefinition, harvestPage: { rankingDefinitionFile } }
    } = this;

    return (
      <>
        <PageTitle
          description="The ranking definition is the list of parameters and values that will
                       be used to sort the harvest. The system will assign a score to each of
                       them according to those parameters, and will be able to explain the
                       reasons for every ranking. If you do not specify a ranking definition,
                       the harvest will be unsorted."
          icon={faSearch}
          margins='mb-2'
          size="h3"
          title="Ranking definition"
        />

        <div className="row mb-5 px-5">
          <div className="col col-md-12 col-lg-6 pr-3 pl-0">
            <PageTitle
              icon={faFolderOpen}
              margins='ml-0 mb-0'
              size="h4"
              title="Load ranking definition"
            />

            <div className="row mt-1">
              <div className="col">
                <FileLoader
                  fileType='JSON'
                  handleUploadFileChange={handleRankingDefinitionFileChange}
                  onFileRead={handleRankingDefinitionFile}
                  uploadFile={rankingDefinitionFile}
                />
              </div>
            </div>
          </div>
          <div className="col col-md-12 col-lg-6 pl-3">
            <PageTitle
              icon={faFile}
              margins='mb-0'
              size="h4"
              title="Create a new ranking definition"
            />

            <div className="row mt-1">
              <div className="col border p-2 mx-0">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleGoToRankingDefinition}
                >
                  <FontAwesomeIcon icon={faHammer} /> Go to ranking definition creator
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
                  title="Current ranking definition"
                />
              </div>

              <div className="card-body">
                <RuleList rules={rankingDefinition.rules} />
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
    rankingDefinition: state.harvest.rankingDefinition
  };
};

const mapDispatchToProps = (dispatch) => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState)),
  setRankingDefinition: (data) => dispatch(setRankingDefinition(data))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadRankingDefinition));
