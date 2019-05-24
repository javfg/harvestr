import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faClipboard, faList } from '@fortawesome/free-solid-svg-icons';

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
      columns: [],
      currentColumn: undefined,
      currentFile: undefined,
      currentFileHasHeader: true,
      currentTextArea: undefined
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
    const {
      props: { setItemList },
      state: { csvContents, itemList }
    } = this;

    // Save unique values in column, then store in redux.
    this.setState({
      currentColumn: column,
      itemList: [...new Set(csvContents.map(row => row[column]))]
    }, () => {setItemList(itemList)});
  }


  handleSelectTab = (currentTab) => {
    this.setState({currentTab}, ()=>{console.log(this.state)});
  }

  handleTypeInTextArea = (e) => {
    this.setState({currentTextArea: e.target.value});
  }

  handleSetItemlistFromTextArea = () => {
    const { itemList } = this.state;

    this.setState({
      itemList: [...new Set(this.textArea.value.split('\n'))]
    }, () => {setItemList(itemList)});
  }

  handleFileSelectedChange = (currentFile) => {
    this.setState({currentFile});
  }

  handleFileHasHeaderChange = (currentFileHasHeader) => {
    this.setState({currentFileHasHeader});
  }


  render() {
    const {
      handleFileSelectedChange,
      handleFileHasHeaderChange,
      handleSelectTab,
      handleSelectedColumn,
      handleSetItemlistFromTextArea,
      handleTypeInTextArea,
      state: { columns, currentTab, currentColumn, currentFile, currentFileHasHeader, currentTextArea, itemList }
    } = this;

    console.log('this.state', this.state);


    return (
      <>
        <PageTitle
          description="upload a csv file which contains the items in any column,
                      and specify which one is it. Alternatively, you can paste
                      a list of items separated in different lines."
          icon={faUpload}
          marginBottom='mb-2'
          size="h3"
          title="Load item list"
        />


        <div className="row">
          <div className="col px-5">
            <div className="card">
              <div className="card-header">
                <Tabs handleClick={handleSelectTab} currentTab={currentTab}>
                  <Tab caption="Upload data" icon={faUpload} tabNumber={0} type="radio" />
                  <Tab caption="Paste data" icon={faClipboard} tabNumber={1} type="radio" />
                </Tabs>
              </div>
              <div className="card-body h-12r">
                {
                  currentTab === 0 ? (
                    <>
                      <FileLoader
                        currentFile={currentFile}
                        handleFileSelectedChange={handleFileSelectedChange}
                        currentFileHasHeader={currentFileHasHeader}
                        handleFileHasHeaderChange={handleFileHasHeaderChange}
                        fileType="CSV"
                        mimeType="text/csv"
                        onFileRead={this.handleItemListFile}
                      />
                      <div className="mt-2" />
                      <ColumnSelector
                        columns={columns}
                        currentColumn={currentColumn}
                        onSelectedColumn={handleSelectedColumn}
                      />
                    </>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col">
                          <textarea
                            className="form-control resize-none"
                            value={currentTextArea}
                            onChange={handleTypeInTextArea}
                            rows={4}
                            placeholder="Paste a list of items here."
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-xs-8 col-sm-6 col-md-4">
                          <button
                            className="btn btn-primary btn-block mt-2"
                            onClick={handleSetItemlistFromTextArea}
                          >
                            <FontAwesomeIcon icon={faList} /> Load items
                          </button>
                        </div>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5"></div>
        <PageTitle
          description="You can check if the file and column loaded are correct taking a
                       look at the first items in the list."
          icon={faList}
          marginBottom='mb-2'
          size="h3"
          title="Some items on your list"
        />

        <div className="row">
          <div className="col px-5">
            <ItemList items={itemList.slice(0, 10)} />
          </div>
        </div>
      </>
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
