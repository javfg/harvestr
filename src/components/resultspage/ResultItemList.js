import React from 'react';
import { connect } from 'react-redux';


//Components.
import ResultItem from './ResultItem';


class ResultItemList extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { searchResults } = this.props;

    return (
      <ul
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {searchResults.map((item, index) => {
          console.log('item', item);

          return (<ResultItem key={`i-${index}-${item.name}`} {...item} />);
        })}
      </ul>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => {
  return { searchResults: state.searchResults };
};


export default connect(mapStateToProps)(ResultItemList);
