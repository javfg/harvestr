import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll, faSave } from '@fortawesome/free-solid-svg-icons';

// Components.
import PageTitle from '../common/PageTitle';
import ResultItemList from '../resultspage/ResultItemList';

// Utils.
import { exportCSV } from '../../utils/utils';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);
  }


  handleSaveHarvest = () => {
    exportCSV(this.props.searchResults);
  };


  render() {
    return (
      <div className="container-fluid my-4">
        <PageTitle
          description="Results of the harvest."
          icon={faPoll}
          size="h1"
          title="Results"
        />

        <ResultItemList />

        <button
          className="btn btn-primary"
          onClick={this.handleSaveHarvest}
        >
          <FontAwesomeIcon icon={faSave} /> Save CSV
        </button>
      </div>
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
