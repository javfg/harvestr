import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faClipboard, faList } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestPageField } from '../../actions/HarvestPage';
import { setItemList } from '../../actions/itemList';
import PageTitle from '../common/PageTitle';
import Tabs from '../common/Tabs';
import Tab from '../common/Tab';

// Components.
import FileLoader from '../io/FileLoader';
import ColumnSelector from '../io/ColumnSelector';
import ItemList from '../common/ItemList';

// Utils.
import { arrayOfStrNumbers } from '../../utils/utils';


class LoadItemList extends React.Component {
  constructor(props) {
    super(props);
  }


  handleItemListFile = result => {
    // Save column names or indexes (length of first data array).
    this.props.setHarvestPageField({
      columns: result.meta.fields ? result.meta.fields : arrayOfStrNumbers(result.data[0].length),
      itemListFileContents: result.data
    });
  };


  handleSelectColumn = selectedColumn => {
    this.props.setHarvestPageField({selectedColumn});
  }

  handleSelectTab = (currentLoadItemListTab) => {
    this.props.setHarvestPageField({currentLoadItemListTab});
  }

  handleTypeInTextArea = (e) => {
    this.props.setHarvestPageField({textAareaContents: e.target.value});
  }

  handleSetItemListFromCSV = () => {
    const { setHarvestPageField, setItemList, harvestPage: { selectedColumn, itemListFileContents } } = this.props;
    const itemList = [...new Set(itemListFileContents.map(row => row[selectedColumn]))];

    setHarvestPageField({selectedColumn, loadItemListOk: true});
    setItemList(itemList);
  }

  handleSetItemlistFromTextArea = () => {
    const { setHarvestPageField, setItemList, harvestPage: { textAareaContents } } = this.props;
    const itemList = [...new Set(textAareaContents.split('\n'))];

    setHarvestPageField({textAareaContents, loadItemListOk: true});
    setItemList(itemList);
  }

  handleItemListFileChange = (itemListFile) => {
    this.props.setHarvestPageField({itemListFile});
  }

  handleItemListFileHasHeaderChange = (itemListFileHasHeaders) => {
    this.props.setHarvestPageField({itemListFileHasHeaders});
  }


  render() {
    const {
      handleItemListFileChange,
      handleItemListFileHasHeaderChange,
      handleSelectTab,
      handleSelectColumn,
      handleSetItemListFromCSV,
      handleSetItemlistFromTextArea,
      handleTypeInTextArea,
      props: {
        harvestPage: {
          columns,
          selectedColumn,
          currentLoadItemListTab,
          textAareaContents,
          itemListFile,
          itemListFileHasHeader
        },
        itemList
      }
    } = this;

    const shortItemList = itemList.length <= 10 ? itemList.slice(0, 10)
    :
    itemList.slice(0, 10).concat(`...${itemList.length - 10} more`);

    return (
      <>
        <PageTitle
          description="upload a csv file which contains the items in any column,
                      and specify which one is it. Alternatively, you can paste
                      a list of items separated in different lines."
          icon={faUpload}
          margins='mb-2'
          size="h3"
          title="Load item list"
        />


        <div className="row mb-3">
          <div className="col px-5">
            <div className="card">
              <div className="card-header">
                <Tabs handleClick={handleSelectTab} currentTab={currentLoadItemListTab}>
                  <Tab caption="Upload data" icon={faUpload} tabNumber={0} type="radio" />
                  <Tab caption="Paste data" icon={faClipboard} tabNumber={1} type="radio" />
                </Tabs>
              </div>
              <div className="card-body h-13r">
                {
                  currentLoadItemListTab === 0 ? (
                    <>
                      <FileLoader
                        uploadFile={itemListFile}
                        handleUploadFileChange={handleItemListFileChange}
                        uploadFileHasHeader={itemListFileHasHeader}
                        handleFileHasHeaderChange={handleItemListFileHasHeaderChange}
                        fileType="CSV"
                        mimeType="text/csv"
                        onFileRead={this.handleItemListFile}
                      />
                      <div className="mt-2" />
                      <ColumnSelector
                        columns={columns}
                        currentColumn={selectedColumn}
                        onSelectedColumn={handleSelectColumn}
                      />

                      <div className="row justify-content-center">
                        <div className="col-xs-8 col-sm-6 col-md-4">
                          <button
                            className="btn btn-primary btn-block mt-2"
                            disabled={!selectedColumn}
                            onClick={handleSetItemListFromCSV}
                          >
                            <FontAwesomeIcon icon={faList} /> Load items
                          </button>
                        </div>
                      </div>

                    </>
                  ) : (
                    <>
                      <div className="row">
                        <div className="col">
                          <textarea
                            className="form-control resize-none"
                            value={textAareaContents}
                            onChange={handleTypeInTextArea}
                            rows={5}
                            placeholder="Paste a list of items here."
                          />
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-xs-8 col-sm-6 col-md-4">
                          <button
                            className="btn btn-primary btn-block mt-2"
                            onClick={handleSetItemlistFromTextArea}
                            disabled={textAareaContents.length === 0}
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

        <div className="row">
          <div className="col px-5">
            <div className="card">
              <div className="card-header py-2">
                <PageTitle
                  description="You can check if the file and column loaded are correct taking a
                              look at the first items in the list."
                  icon={faList}
                  margins='mb-2'
                  size="h3"
                  title="Items on your list"
                />
              </div>

              <div className="card-body">
                <ItemList items={shortItemList} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


//
// Mapping functions.
//
const mapStateToProps = (state) => ({
  harvestPage: state.ui.harvestPage,
  itemList: state.harvest.itemList
});

const mapDispatchToProps = (dispatch) => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState)),
  setItemList: (data) => dispatch(setItemList(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(LoadItemList);
