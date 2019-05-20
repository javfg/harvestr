import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

// Components.
import FileLoader from '../io/FileLoader';
import ColumnSelector from '../io/ColumnSelector';
import ItemList from './ItemList';

// Utils.
import { arrayOfStrNumbers } from '../../utils/utils';

// Actions.
import { setItemList } from '../../actions/itemList';


class LoadItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      csvContents: [],
      itemList: props.itemList ? props.itemList : [],
      columns: []
    };
  }


  handleItemListFile = result => {
    // Save column names or indexes (length of first data array).
    this.setState({
      columns: result.meta.fields ? result.meta.fields : arrayOfStrNumbers(result.data[0].length),
      csvContents: result.data
    });
  };


  handleSelectedColumn = column => {
    // Save unique values in column, then store in redux.
    this.setState({
      itemList: [...new Set(this.state.csvContents.map(row => row[column]))]
    }, () => {this.props.setItemList(this.state.itemList)});
  }


  render() {
    return (
      <div>

        <FileLoader fileType='CSV' onFileRead={this.handleItemListFile} />
        <h4>Select data column</h4>
        <ColumnSelector columns={this.state.columns} onSelectedColumn={this.handleSelectedColumn} />
        <h4>Item list</h4>
        <ItemList items={this.state.itemList} />
      </div>
    );
  }
}


//
// Mapping functions.
//
const mapStateToProps = (state) => {
  return {itemList: state.itemList};
};

const mapDispatchToProps = (dispatch) => ({
  setItemList: (data) => dispatch(setItemList(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoadItemList);
