import React from 'react';
import { connect } from 'react-redux';

import { faUpload } from '@fortawesome/free-solid-svg-icons';

// Components.
import FileLoader from '../io/FileLoader';
import ColumnSelector from '../io/ColumnSelector';
import ItemList from './ItemList';

// Utils.
import { arrayOfStrNumbers } from '../../utils/utils';

// Actions.
import { setItemList } from '../../actions/itemList';
import PageTitle from '../common/PageTitle';


class LoadItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 0,
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


  handleSelectTab = (tabSelected) => {
    console.log(tabSelected)
    this.setState({tabSelected}, ()=>{console.log(this.state)});
  }


  render() {
    const {
      handleSelectTab,
      state: { tabSelected }
     } = this;

    // TODO: PASAR A COMPONENTE
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
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <span className={`nav-link ${tabSelected === 0 ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="upload"
                        checked={tabSelected === 0}
                        onChange={() => {handleSelectTab(0)}}
                      />
                      <a
                        href="#!"
                        onClick={() => {handleSelectTab(0)}}
                        className="clear-link"
                      > Upload data</a>
                    </span>
                  </li>
                  <li className="nav-item">
                    <span className={`nav-link ${tabSelected === 1 ? 'active' : ''}`}>
                      <input
                        type="radio"
                        name="paste"
                        checked={tabSelected === 1}
                        onChange={() => {handleSelectTab(1)}}
                      />
                      <a
                        href="#!"
                        onClick={() => {handleSelectTab(1)}}
                        className="clear-link"
                      > Paste data</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h1>hi</h1>
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
