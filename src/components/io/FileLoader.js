import React from 'react';
import Papa from 'papaparse';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faFileUpload } from '@fortawesome/free-solid-svg-icons';

// Utils.
import { readJSONFromFile } from '../../utils/file';


export class FileLoader extends React.Component {
  constructor(props) {
    super(props);
  }


  handleFileSelected = event => {
    this.props.handleUploadFileChange(event.target.files[0]);
  }

  handleHeaderChange = (event) => {
    this.props.handleFileHasHeaderChange(event.target.checked);
  }


  readFile = async () => {
    const {
      parseError,
      props: { onFileRead, fileType, uploadFile, uploadFileHasHeader }
    } = this;

    // CSV file type: use papaparse.
    if (fileType === 'CSV') {
      Papa.parse(uploadFile, {
        complete: (result) => onFileRead(result),
        header: uploadFileHasHeader,
        error: parseError,
        skipEmptyLines: true
      });
    }

    // JSON file type: deserialize.
    if (fileType === 'JSON') {
      try {
        const result = await readJSONFromFile(uploadFile);
        onFileRead(result);
      } catch (e) {
        console.error(e);
      }
    }
  };


  render() {
    const {
      handleFileSelected,
      handleHeaderChange,
      props: { uploadFile, uploadFileHasHeader, fileType, mimeType },
      readFile
    } = this;

    return (
        <div className="cool-file-loader">
          <div className="row">
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
                    uploadFile ?
                      uploadFile.name
                    :
                      <>
                        <FontAwesomeIcon icon={faEllipsisH} className="mr-1" /> Select file
                      </>
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
              <div className="row mt-2">
                <div className="col">
                  <div className="form-group form-check mb-0">
                    <input
                      checked={uploadFileHasHeader}
                      className="form-check-input"
                      id="hasHeader"
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
