import React from 'react';

import Papa from 'papaparse';

import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Components
import PageTitle from '../common/PageTitle';

// TODO: This function is rushed to comply with deadline. Everything must be redone.
class TSVParserUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doc: '',
      sampleHasHeaders: false,
      sampleItem: '',
      tsv: undefined,
      data: this.props.data
    }
  }


  handleChangeHeaderCheckbox = e => {
    const sampleHasHeaders = e.target.checked;

    this.setState({sampleHasHeaders});
  }

  handleChangeSampleItem = e => {
    const sampleItem = e.target.value;

    this.setState({sampleItem});
  }

  handleChangeSelectColumn = (index, checked) => {
    const {
      props: { newFieldsFunction },
      state: { data },
    } = this;

    let newData = JSON.parse(JSON.stringify(data));

    if (!checked) {
      newData = newData.filter(entry => entry.path !== index);
    } else {
      // TODO: ADD name, linkto.
      newData.push({name: 'placeholder', path: index});
      newData.sort((a, b) => a.path - b.path);
    }

    this.setState({data: newData});
    newFieldsFunction([{name: 'placeholder', entries: newData}]);
  }

  handleClickFetchSampleItem = async () => {
    const {
      props: { urlTemplate },
      state: { data, sampleHasHeaders, sampleItem },
    } = this;

    const itemURL = urlTemplate.replace(/{{[A-Z]*}}/, sampleItem);

    const doc = await fetch(itemURL);
    const docText = await doc.text();

    Papa.parse(docText, {
      complete: (tsv) => {
        if (sampleHasHeaders) {
          tsv.columns = Object.keys(tsv.data[0]);
          tsv.data = tsv.data.map(tsvLine => {
            const keys = Object.keys(tsvLine);
            return keys.map(key => tsvLine[key]);
          });
        } else {
          console.log('tsv', tsv);
          tsv.columns = [...Array(tsv.data[0].length + 1).keys()]
          tsv.columns.shift()
        }

        this.setState({tsv}, () => {
          // Cut away fields that are outside of the length of new doc.
          const cutData = data.filter(entry => entry.path <= tsv.columns.length);
          this.setState({data: cutData});
        });
      },
      comments: true,
      header: sampleHasHeaders,
      skipEmptyLines: true
    });
  }


  render() {
    const {
      handleChangeHeaderCheckbox,
      handleChangeSampleItem,
      handleChangeSelectColumn,
      handleClickFetchSampleItem,
      state: { data, sampleItem, sampleHasHeaders, tsv },
    } = this;

    const selectedCols = data.map(entry => entry.path);


    console.log('this.state', this.state);

    return(
      <>
        <PageTitle
          description="Entre a sample Item name to substitute in the URL template specified above, and select the
                       relevant columns of the resulting document. TSV queries will have only one Field, and every
                       selected column will be an Entry."
          icon={faBookOpen}
          size="h3"
          title="TSV Parser"
        />

        <div className="row px-5 mt-2">
          <div className="col">

            {/* SAMPLE URL */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Sample Item</span>
              </div>
              <input
                type="text"
                className="form-control"
                value={sampleItem}
                onChange={handleChangeSampleItem}
                spellCheck={false}
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <input type="checkbox" name="headerCheckBox" onChange={handleChangeHeaderCheckbox} />
                  <label htmlFor="headerCheckBox" className="mb-0">Document has headers</label>
                </div>
                <button className="btn btn-primary border-radius" onClick={handleClickFetchSampleItem}>Fetch</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-5 mt-4">
          <div className="col">
            {tsv && tsv.data ? (
              tsv.columns.map((column, index) => (
                <div key={`tsvcoldiv-${column}-${index}`}>
                  <input
                    checked={selectedCols.includes(index)}
                    key={`tsvcolcheckbox-${column}-${index}`}
                    name={`tsvcolcheckbox-${column}-${index}`}
                    onChange={(e) => {handleChangeSelectColumn(index, e.target.checked)}}
                    type="checkbox"
                  />
                  <label
                    className="mb-0"
                    htmlFor={`tsvcolcheckbox-${column}-${index}`}
                    key={`tsvcollabel-${column}-${index}`}
                  >
                    <strong className="mr-2">{sampleHasHeaders ? column : `Column ${column}`}:</strong>
                    <small>{tsv.data[index].slice(0, 4).join(', ')}</small>
                  </label>

                  {selectedCols.includes(index) && (
                    <p>name dn stuff</p>
                  )}
                </div>
              ))
            ) : (
              <h4 className="text-muted">Input a sample URL to start</h4>
            )}
          </div>
        </div>
      </>
    );
  }
}


export default TSVParserUI;
