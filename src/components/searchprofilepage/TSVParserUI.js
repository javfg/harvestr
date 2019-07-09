import React from 'react';

import { faReadme } from '@fortawesome/free-solid-svg-icons';

// Components
import PageTitle from '../common/PageTitle';


class TSVParserUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sampleUrl: undefined,
      doc: ''
    }
  }


  handleChangeSampleUrl = e => {
    const sampleUrl = e.target.value;

    this.setState({sampleUrl});
  }

  handleClickFetchSampleURL = () => {
    console.log('FETCH!');
  }


  render() {
    const {
      handleChangeSampleURL,
      handleClickFetchSampleURL,
      state: { sampleUrl, doc }
    } = this;

    return(
      <>
        <PageTitle
          description="Entre a sample URL of the resource you want to parse, and select the relevant columns."
          icon={faReadme}
          size="h3"
          title="TSV Parser"
        />

        <div className="row px-5 mt-2">
          <div className="col">

            {/* SAMPLE URL */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Sample URL</span>
              </div>
              <input type="text" className="form-control" value={sampleUrl} onChange={handleChangeSampleURL} />
              <div className="input-group-append">
                <button className="btn btn-primary border-radius" onClick={handleClickFetchSampleURL}>Fetch</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default TSVParserUI;
