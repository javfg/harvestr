import React from "react";
import { connect } from "react-redux";

import ResultItemList from "./HarvestPage/ResultItemList";

import { setSearchResults } from "../../actions/searchResults";

class HarvestPage extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  componentDidUpdate() {
    console.log("this.props", this.props);
  }

  render() {
    return (
      <div>
        <h2>Search results</h2>
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
