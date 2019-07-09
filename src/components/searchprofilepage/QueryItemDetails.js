import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { updateQuery } from '../../actions/searchProfile';

// Components.
import TSVParserUI from './TSVParserUI';

// Engine stuff.
import { fetchers } from '../../engine/fetchers/fetchers';
import { parsers } from '../../engine/parsers/parsers';

// Utils.
import { successToast } from '../../utils/dialogs';


class QueryItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      originalName: this.props.query.name,
      name: this.props.query.name,
      fetcher: this.props.query.fetcher,
      parser: this.props.query.parser,
      urlTemplate: this.props.query.urlTemplate,
      ...this.props.query
    }
  }


  handleChangeName = (e) => {
    const name = e.target.value;

    this.setState({name});
  };

  handleSelectfetcher = (e) => {
    const fetcher = e.target.value;

    this.setState({fetcher});
  }

  handleSelectparser = (e) => {
    const parser = e.target.value;

    this.setState({parser});
  }

  handleChangeURLTemplate = (e) => {
    const urlTemplate = e.target.value;

    this.setState({urlTemplate});
  };

  handleClickSaveChanges = () => {
    const {
      props: { updateQuery },
      state: { originalName, ...newQuery }
    } = this;

    updateQuery(originalName, newQuery);
    successToast('Query updated');
  }


  render() {
    const {
      handleChangeName,
      handleChangeURLTemplate,
      handleClickSaveChanges,
      handleSelectfetcher,
      handleSelectparser,
      state: { name, fetcher, parser, urlTemplate }
    } = this;

    return(
      <>
        <div className="row px-5">
          <div className="col">

            {/* NAME */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
              </div>
              <input type="text" className="form-control" value={name} onChange={handleChangeName} />
            </div>
          </div>
        </div>

        <div className="row px-5 mt-2">
          <div className="col">

            {/* TEMPLATE */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">URL Template</span>
              </div>
              <input type="text" className="form-control" value={urlTemplate} onChange={handleChangeURLTemplate} />
            </div>
          </div>
        </div>

        <div className="row px-5 mt-2">
          <div className="col col-6">

            {/* FETCH STRATEGY */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Fetch strategy</span>
              </div>
              <select className="form-control" value={fetcher} onChange={handleSelectfetcher}>
                <option disabled={true} value="DEFAULT_FETCHER_VALUE">Select a fetch strategy...</option>
                {fetchers.map(fetcher => <option key={fetcher.id} value={fetcher.id}>{fetcher.name}</option>)}
              </select>
            </div>
          </div>

          <div className="col col-6">
            {/* FETCH STRATEGY */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Parse strategy</span>
              </div>
              <select className="form-control" value={parser} onChange={handleSelectparser}>
                <option disabled={true} value="DEFAULT_PARSER_VALUE">Select a parse strategy...</option>
                {parsers.map(parser => <option key={parser.id} value={parser.id}>{parser.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="row px-5 mt-4">
          <div className="col">
            {(() => {
              switch(parser) {
                case 'tsvParser':
                  return <TSVParserUI />
              }
            })()}
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="row justify-content-end mt-2">
          <div className="col col-4 text-right">
            <button
              className="btn btn-primary"
              onClick={handleClickSaveChanges}
            >
              <FontAwesomeIcon icon={faSave} className="mr-1" />Save changes
            </button>
          </div>
        </div>
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = state => ({
  searchProfile: state.harvest.searchProfile
});

const mapDispatchToProps = dispatch => ({
  updateQuery: (queryName, newQuery) => dispatch(updateQuery(queryName, newQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(QueryItemDetails);

