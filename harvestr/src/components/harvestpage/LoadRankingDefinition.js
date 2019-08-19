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
                       be used to sort the harvest. If you do not specify a ranking definition,
                       the harvest will be unsorted."
          icon={faSearch}
          size="h3"
          title="Ranking definition"
        />

        <div className="row mb-3 px-3">
          <div className="col col-6 flex-column">
            <PageTitle
              icon={faFolderOpen}
              margins='my-2'
              size="h4"
              title="Load ranking definition"
            />

            <FileLoader
              fileType='JSON'
              handleUploadFileChange={handleRankingDefinitionFileChange}
              onFileRead={handleRankingDefinitionFile}
              uploadFile={rankingDefinitionFile}
            />
          </div>
          <div className="col col-6 flex-column">
            <PageTitle
              icon={faFile}
              margins='my-2'
              size="h4"
              title="Create a new ranking definition"
            />

            <button
              className="btn btn-primary btn-block mt-3"
              onClick={handleGoToRankingDefinition}
            >
              <FontAwesomeIcon icon={faHammer} /> Go to ranking definition editor
            </button>
          </div>
        </div>

        <div className="row mb-1">
          <div className="col px-5">
            <div className="card">
              <div className="card-header py-2">
                <PageTitle
                  icon={faListAlt}
                  margins="mb-0"
                  size="h4"
                  title="Current ranking definition"
                  description="Take a look at the rules currently in effect in the ranking."
                  descriptionSize="small"
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
