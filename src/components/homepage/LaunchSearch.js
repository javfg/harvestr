import React from 'react';
import { connect } from 'react-redux';

// Selectors.
import selectItemList from '../../../selectors/itemList';
import selectSearchProfile from '../../../selectors/searchProfile';
import SearchEngine from '../../../engine/searchEngine';
import { setSearchResults } from '../../../actions/searchResults';


class LaunchSearch extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  handleLaunchSearch = async () => {
    const searchEngine = new SearchEngine();
    const searchResults = await searchEngine.run(
      this.props.searchProfile,
      this.props.itemList
    );

    console.log("searchResult when done", searchResults);

    this.props.setSearchResults(searchResults);
  };

  render() {
    return (
      <div>
        <h3>Launch search</h3>
        <button
          type="button"
          onClick={this.handleLaunchSearch}
          disabled={
            this.props.searchProfile.length === 0 ||
            this.props.itemList.length === 0
          }
        >
          Go!
        </button>
      </div>
    );
  }
}

//
// Mapping functions.
//
const mapStateToProps = state => {
  return {
    itemList: selectItemList(state.itemList),
    searchProfile: selectSearchProfile(state.searchProfile)
  };
};

const mapDispatchToProps = dispatch => ({
  setSearchResults: data => dispatch(setSearchResults(data))
});

// Connect HOC.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchSearch);
