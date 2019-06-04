import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll, faSave, faFileCsv, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// Components.
import PageTitle from '../common/PageTitle';
import ResultsItemList from '../resultspage/ResultsItemList';
import ResultsTooltip from '../resultspage/ResultsTooltip';

// Utils.
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
    // TODO:
    console.log('save harvest results');
  };

  handleLoadHarvestResults = () => {
    // TODO:
    console.log('load harvest results');
  };


  render() {
    const { handleExportCSV, handleLoadHarvestResults, handleSaveHarvestResults } = this;

    return (
      <>
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col col-xs-12 col-sm-4 col-md-4">
              <PageTitle
                description="Results of the harvest."
                icon={faPoll}
                size="h1"
                title="Results"
              />
            </div>

            <div className="col col-xs-12 col-sm-8 col-md-8 mt-2 text-right">
              <button
                className="btn btn-primary mr-4"
                onClick={handleLoadHarvestResults}
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
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => {
  return { searchResults: state.searchResults };
};


export default connect(mapStateToProps)(HarvestPage);
