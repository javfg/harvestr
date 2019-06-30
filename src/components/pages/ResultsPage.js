import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll, faSave, faFileCsv, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setItemList } from '../../actions/itemList';
import { setDetailsField } from '../../actions/Details';
import { setRankingDefinition } from '../../actions/RankingDefinition';
import { setResultsPageField } from '../../actions/ResultsPage';
import { setSearchProfile } from '../../actions/searchProfile';
import { setSearchResults } from '../../actions/searchResults';

// Components.
import LoadSearchResultsModal from '../resultspage/LoadSearchResultsModal';
import PageTitle from '../common/PageTitle';
import ResultsItemList from '../resultspage/ResultsItemList';
import ResultsTooltip from '../resultspage/ResultsTooltip';

// Utils.
import { download, readJSONFromFile } from '../../utils/file';
//import { exportCSV } from '../../utils/utils';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);
  }


  handleExportCSV = () => {
    // TODO:
    //exportCSV(this.props.searchResults);
    console.log('export CSV');
  }

  handleSaveHarvestResults = () => {
    const { harvest, searchResults } = this.props;
    const fileName = harvest.details.name;
    const contents = {harvest, searchResults};

    download(fileName, contents, 'application/json');
  };


  handleClickLoadResults = () => {
    document.getElementById('inputfile').click();
  };

  // TODO: Refactor out.
  handleLoadHarvestResults = async (event) => {
    const {
      setDetailsField,
      setItemList,
      setRankingDefinition,
      setSearchProfile,
      setSearchResults,
      setResultsPageField
    } = this.props;

    const loadedJSON = await readJSONFromFile(event.target.files[0]);

    setDetailsField(loadedJSON.harvest.details);
    setItemList(loadedJSON.harvest.itemList);
    setRankingDefinition(loadedJSON.harvest.rankingDefinition);
    setSearchProfile(loadedJSON.harvest.searchProfile);
    setSearchResults(loadedJSON.searchResults);
    setResultsPageField({
      currentPage: 0,
      loadResultsModalVisible: true,
      totalPages: Math.ceil(loadedJSON.searchResults.length / 10),
      pageSize: 10
    });
  };


  render() {
    const {
      handleClickLoadResults,
      handleExportCSV,
      handleLoadHarvestResults,
      handleSaveHarvestResults,
      props: { resultsPage : { loadResultsModalVisible } }
    } = this;

    return (
      <>
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col col-xs-12 col-sm-4 col-md-4">
              <PageTitle
                description="Results of the harvest."
                icon={faPoll}
                title="Results"
              />
            </div>

            <div className="col col-xs-12 col-sm-8 col-md-8 mt-2 text-right">
              <div className="input-hidden">
                <input type="file" id="inputfile" tabIndex="-1" onChange={handleLoadHarvestResults}/>
              </div>
              <button
                className="btn btn-primary mr-4"
                onClick={handleClickLoadResults}
              >
                <FontAwesomeIcon icon={faFolderOpen} /> Load Results
              </button>
              <button
                className="btn btn-primary mr-2"
                onClick={handleSaveHarvestResults}
              >
                <FontAwesomeIcon icon={faSave} /> Save Results
              </button>
              <button
                className="btn btn-primary"
                onClick={handleExportCSV}
              >
                <FontAwesomeIcon icon={faFileCsv} /> Export CSV
              </button>
            </div>
          </div>

          <ResultsItemList />
        </div>
        <ResultsTooltip />
        <CSSTransition
          in={loadResultsModalVisible}
          timeout={2500}
          classNames='modal'
          unmountOnExit
        >
          <LoadSearchResultsModal />
        </CSSTransition>
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  harvest: state.harvest,
  resultsPage: state.ui.resultsPage.main,
  searchResults: state.harvest.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  setDetailsField: (newState) => dispatch(setDetailsField(newState)),
  setItemList: (itemList) => dispatch(setItemList(itemList)),
  setRankingDefinition: (rankingDefinition) => dispatch(setRankingDefinition(rankingDefinition)),
  setSearchProfile: (searchProfile) => dispatch(setSearchProfile(searchProfile)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
});


export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);
