import React from 'react';
import { connect } from 'react-redux';

import { faUpload, faClipboard } from '@fortawesome/free-solid-svg-icons';

// Components.
import FileLoader from '../io/FileLoader';
import ColumnSelector from '../io/ColumnSelector';
import ItemList from './ItemList';

// Utils.
import { arrayOfStrNumbers } from '../../utils/utils';

// Actions.
import { setItemList } from '../../actions/itemList';
import PageTitle from '../common/PageTitle';
import Tabs from '../common/Tabs';
import Tab from '../common/Tab';


class LoadItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
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


  handleSelectTab = (currentTab) => {
    console.log(currentTab)
    this.setState({currentTab}, ()=>{console.log(this.state)});
  }


  render() {
    const {
      handleSelectTab,
      state: { currentTab }
     } = this;

     return (
      <div>
        <PageTitle
          description="upload a csv file with the list of items, or paste one in the text area below."
          icon={faUpload}
          size="h3"
          title="Load item list"
        />

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <Tabs handleClick={handleSelectTab} currentTab={currentTab}>
                  <Tab caption="Upload data" icon={faUpload} tabNumber={0} type="radio" />
                  <Tab caption="Paste data" icon={faClipboard} tabNumber={1} type="radio" />
                </Tabs>
              </div>
              <div className="card-body">
                {
                  currentTab === 0 ? (
                    <p>TAB 0</p>
                  ) : (
                    <p>TAB 1</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>

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
