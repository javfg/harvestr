import React from 'react';
import { connect } from 'react-redux';

// Selectors.
import selectItemList from '../../../selectors/itemList';
import selectSearchProfile from '../../../selectors/searchProfile';
import SearchEngine from '../../../engine/searchEngine';


class LaunchSearch extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  handleLaunchSearch = () => {
    const searchEngine = new SearchEngine();
    const searchResult = searchEngine.run(this.props.searchProfile, this.props.itemList);

    console.log('searchResult when done', searchResult);
  }

  render() {
    return (
      <div>
        <h3>Launch search</h3>
        <button
          type="button"
          onClick={this.handleLaunchSearch}
          disabled={this.props.searchProfile.length === 0 || this.props.itemList.length === 0}
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
const mapStateToProps = (state) => {
  return {
    itemList: selectItemList(state.itemList),
    searchProfile: selectSearchProfile(state.searchProfile)
  };
};


// Connect HOC.
export default connect(mapStateToProps)(LaunchSearch);
