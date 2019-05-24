import React from 'react';
import Papa from 'papaparse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faFileUpload } from '@fortawesome/free-solid-svg-icons';

import { readJSONFromFile } from '../../utils/file';

export class FileLoader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: this.props.currentFileHasHeader,
      file: this.props.currentFile
    };
  }


  handleFileSelected = event => {
    this.setState({
      file: event.target.files[0]
    });

    this.props.handleFileSelectedChange(event.target.files[0]);
  }

  handleHeaderChange = event => {
    this.setState({header: event.target.checked});
    this.props.handleFileHasHeaderChange(event.target.checked);
  }


  readFile = async () => {
    const {
      parseError,
      props: { onFileRead, fileType },
      state: { file, header }
    } = this;

    // CSV file type: use papaparse.
    if (fileType === 'CSV') {
      Papa.parse(file, {
        complete: (result) => onFileRead(result),
        header,
        error: parseError,
        skipEmptyLines: true
      });
    }

    // JSON file type: deserialize.
    if (fileType === 'JSON') {
      try {
        const result = await readJSONFromFile(file);
        onFileRead(result);
      } catch (e) {
        console.log(e);
      }
    }
  };

// TODO: PASS ALL THIS TO REDUX!
  render() {
    const {
      handleFileSelected,
      handleHeaderChange,
      props: { currentFileHasHeader, fileType, mimeType },
      state: { file, header },
      readFile
    } = this;

    return (
        <div className="cool-file-loader">
          <div className="row mb-2">
            <div className="col d-flex align-items-center">
              <div className="custom-file mr-2">
                <input
                  accept={`.${fileType},${mimeType}`}
                  id="name"
                  className="custom-file-input"
                  onChange={handleFileSelected}
                  ref={input => {this.filesInput = input;}}
                  type="file"
                />
                <label
                  className="custom-file-label cool-file-loader-label"
                  htmlFor="name"
                >
                  {
                    file ? file.name : <><FontAwesomeIcon icon={faEllipsisH} className="mr-1" /> Select file</>
                  }
                </label>
              </div>
              <button
                className="btn btn-primary ml-auto"
                disabled={!this.filesInput}
                onClick={readFile}
              >
                <nobr><FontAwesomeIcon icon={faFileUpload} className="mr-1" /> Upload</nobr>
              </button>
            </div>
          </div>
          {
            fileType === 'CSV' && (
              <div className="row">
                <div className="col">
                  <div className="form-group form-check mb-0">
                    <input
                      checked={header}
                      className="form-check-input"
                      id="hasHeader"
                      value={currentFileHasHeader}
                      onChange={handleHeaderChange}
                      type="checkbox"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="hasHeader"
                    >
                      This CSV file has a header row.
                    </label>
                  </div>
                </div>
              </div>
            )
          }
        </div>
    );
  }
}


export default FileLoader;
