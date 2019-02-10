import React from 'react';
import Papa from 'papaparse';
import { readJSONFromFile } from '../../utils/file';


export class FileLoader extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      header: true,
      file: undefined
    };
  }


  handleFileSelected = event => {
    this.setState({
      file: event.target.files[0]
    });
  }

  handleHeaderChange = event => {
    this.setState({
      header: event.target.checked
    })
  }


  readFile = async () => {
    const { file, header } = this.state;

    // CSV file type: use papaparse.
    if (this.props.fileType === 'CSV') {
      Papa.parse(file, {
        complete: (result) => this.props.onFileRead(result),
        header,
        error: this.parseError,
        skipEmptyLines: true
      });
    }

    // JSON file type: deserialize.
    if (this.props.fileType === 'JSON') {
      try {
        const result = await readJSONFromFile(file);
        this.props.onFileRead(result);
      } catch (e) {
        console.log(e);
      }
    }
  };


  render() {
    return (
      <div>
        {
          this.props.fileType === 'CSV' && (
            <div>
              <label htmlFor="header">CSV file has header</label>
              <input
                type="checkbox"
                checked={this.state.header}
                onChange={this.handleHeaderChange}
              />
            </div>
          )
        }
        <div>
          <label htmlFor="file">Upload {this.props.fileType} file</label>
          <input
            type="file"
            ref={input => {this.filesInput = input;}}
            name="file"
            onChange={this.handleFileSelected}
          />
          <button onClick={this.readFile} disabled={!this.filesInput}>Upload</button>
        </div>
      </div>
    );
  }
}


export default FileLoader;
