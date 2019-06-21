import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { updateRule } from '../../actions/RankingDefinition';

// Operators.
import { operators } from "../../engine/operators/operators";


class RuleItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      originalName: this.props.name,
      nameError: undefined,
      ...this.props.details
    };
  }


  handleChangeName = (e) => {
    const inputName = e.target.value;
    const { originalName } = this.state;
    const { rankingDefinition } = this.props;

    // Name validation.
    if (inputName.length === 0) {
      this.setState({nameError: 'Cannot be empty'});
    } else if (inputName !== originalName && rankingDefinition.rules.filter(rule => rule.name === inputName).length > 0) {
      this.setState({nameError: 'A rule with that name already exists'});
    } else {
      this.setState({nameError: undefined});
    }

    this.setState({name: inputName});
  }


  handleSelectQuery = (e) => {
    const query = e.target.value;
    this.setState({query, field: 'DEFAULT_FIELD_VALUE', entry: 'DEFAULT_ENTRY_VALUE'});
  }

  handleSelectField = (e) => {
    const field = e.target.value;
    this.setState({field, entry: 'DEFAULT_ENTRY_VALUE'});
  }

  handleSelectEntry = (e) => {
    const entry = [...e.target.selectedOptions].map(selectedOption => selectedOption.value);
    this.setState({entry});
  }

  handleSelectOperator = (e) => {
    const operator = e.target.value;
    this.setState({operator});
  }


  render() {
    const {
      handleChangeName,
      handleSelectEntry,
      handleSelectField,
      handleSelectOperator,
      handleSelectQuery,
      props: { searchProfile },
      state: { entry, field, name, nameError, operator, query }
    } = this;

    const queries = searchProfile.filter(query => query.name).map(query => query.name);
    const selectedQuery = searchProfile.find(queryFind => queryFind.name === query);
    const fields = selectedQuery ? selectedQuery.fields.map(field => field.name) : [];
    const selectedField = selectedQuery.fields.find(fieldFind => fieldFind.name === field);
    const entries = selectedField ? selectedField.entries.map(entry => entry.name) : [];

    return (
      <div>
        <div className="row mt-2 px-5">
          <div className="col">

            {/* NAME */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Rule name</span>
              </div>
              <input type="text" className="form-control" value={name} onChange={handleChangeName} />
              <div className="input-group-append">
                <span className="input-group-text">
                  {!nameError && <span className="text-success"><FontAwesomeIcon icon={faCheck} className="mr-1" /><strong>Correct</strong></span>}
                  {nameError && <span className="text-danger"><FontAwesomeIcon icon={faTimes} className="mr-1" /><strong>{nameError}</strong></span>}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 px-5">
          <div className="col col-6">

            {/* QUERY */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Query</span>
              </div>
              <select className="form-control" value={query} onChange={handleSelectQuery}>
                <option disabled={true}>Select a query...</option>
                {queries.map(query => <option key={query} value={query}>{query}</option>)}
              </select>
            </div>

          </div>
          <div className="col col-6">

            {/* FIELD */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Field</span>
              </div>
              <select className="form-control" value={field} onChange={handleSelectField}>
                <option disabled={true} value="DEFAULT_FIELD_VALUE">Select a field...</option>
                {fields.map(field => <option key={field} value={field}>{field}</option>)}
              </select>
            </div>

          </div>
        </div>

        <div className="row mt-2 px-5">
          <div className="col col-6">

            {/* ENTRY */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Entry</span>
              </div>
              <select className="form-control select-multiple" multiple={true} value={entry} onChange={handleSelectEntry}>
                <option disabled={true} value="DEFAULT_ENTRY_VALUE">Select one or more entries...</option>
                {entries.map(entry => <option key={entry} value={entry}>{entry}</option>)}
              </select>
            </div>

          </div>
          <div className="col col-6">

            {/* OPERATOR */}
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Operator</span>
              </div>
              <select className="form-control" value={operator} onChange={handleSelectOperator}>
                <option disabled={true} value="DEFAULT_OPERATOR">Select an operator...</option>
                {operators.map(operator => <option key={operator.name} value={operator.details.code}>{operator.name}</option>)}
              </select>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = state => ({
  rankingDefinition: state.harvest.rankingDefinition,
  searchProfile: state.harvest.searchProfile
});

const mapDispatchToProps = dispatch => ({
  updateRule: (ruleName, details) => dispatch(updateRule(ruleName, details))
});


export default connect(mapStateToProps, mapDispatchToProps)(RuleItemDetails);

