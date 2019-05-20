import React from "react";
import { connect } from "react-redux";

import ResultItemList from "../harvestpage/ResultItemList";

import { setSearchResults } from "../../actions/searchResults";

import { exportCSV } from "../../utils/utils";

class HarvestPage extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  handleSaveHarvest = () => {
    exportCSV(this.props.searchResults);
  };

  render() {
    return (
      <div>
        <h2>Search results</h2>
        <button onClick={this.handleSaveHarvest}>Save CSV</button>
        <ResultItemList items={this.props.searchResults} />
      </div>
    );
  }
}

//
// Mapping functions.
//
const mapStateToProps = state => {
  return { searchResults: state.searchResults };
};

const mapDispatchToProps = dispatch => ({
  setItemList: data => dispatch(setSearchResults(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HarvestPage);
