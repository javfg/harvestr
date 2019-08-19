import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { updateRule } from '../../actions/RankingDefinition';

// Components.
import Badge from '../common/Badge';

// Operators.
import { operators } from "../../engine/operators/operators";

// Utils.
import { translateImportance } from '../../utils/labels';
import { successToast } from "../../utils/dialogs";


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


  validateRuleName = (ruleName) => {
    const { originalName } = this.state;
    const { rankingDefinition } = this.props;

    if (ruleName.length === 0) {
      this.setState({nameError: 'Cannot be empty'});
    } else if (ruleName.length > 64) {
      this.setState({nameError: 'Too long'});
    } else if (ruleName === 'new rule') {
      this.setState({nameError: 'Rename the rule'})
    } else if (ruleName !== originalName && rankingDefinition.rules.filter(rule => rule.name === ruleName).length > 0) {
      this.setState({nameError: 'A rule with that name already exists'});
    } else {
      this.setState({nameError: undefined});
    }
  }

  componentDidMount() {
    this.validateRuleName(this.state.name);
  }


  handleChangeImportance = (e) => {
    const importance = e.target.value;
    this.setState({importance});
  }

  handleChangeName = (e) => {
    const inputName = e.target.value;

    this.validateRuleName(inputName);

    this.setState({name: inputName});
  }

  handleChangeValue = (e) => {
    const values = e.target.value.split(',');
    this.setState({values});
  }

  handleClickSaveChanges = () => {
    const {
      props: { updateRule },
      state: { nameError, originalName, ...newRule }
    } = this;

    if (!nameError) {
      updateRule(originalName, newRule);
      successToast('Rule updated');
    }
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
      handleChangeImportance,
      handleChangeName,
      handleChangeValue,
      handleClickSaveChanges,
      handleSelectEntry,
      handleSelectField,
      handleSelectOperator,
      handleSelectQuery,
      props: { searchProfile },
      state: { entry, field, importance, name, nameError, operator, query, values }
    } = this;

    const queries = searchProfile.filter(query => query.name).map(query => query.name);
    const selectedQuery = searchProfile.find(queryFind => queryFind.name === query);
    const fields = selectedQuery ? selectedQuery.fields.map(field => field.name) : [];
    const selectedField = selectedQuery ? selectedQuery.fields.find(fieldFind => fieldFind.name === field) : undefined;
    const entries = selectedField ? selectedField.entries.map(entry => entry.name) : [];

    const selectedOperator = operators.find(operatorFind => operatorFind.details.code === operator);
    let operatorDescription = 'Select the operator your rule will use.';
    if (selectedOperator) {
      operatorDescription = selectedOperator.details.description;
    }

    return (
      <div className="pt-3">
        <div className="row px-5">
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

        {/* QUERY */}
        <div className="row mt-2 px-5">
          <div className="col col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Query</span>
              </div>
              <select className="form-control" value={query} onChange={handleSelectQuery}>
                <option disabled={true} value="DEFAULT_QUERY_VALUE">Select a query...</option>
                {queries.map(query => <option key={query} value={query}>{query}</option>)}
              </select>
            </div>
          </div>
          <div className="col col-6 d-flex align-items-center">
            <span className="text-muted">Select the query relevant to your ranking rule.</span>
          </div>
        </div>

        {/* FIELD */}
        <div className="row mt-2 px-5">
          <div className="col col-6">
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
          <div className="col col-6 d-flex align-items-center">
            <span className="text-muted">Select the field relevant to your ranking rule.</span>
          </div>
        </div>

        {/* ENTRY */}
        <div className="row mt-2 px-5">
          <div className="col col-6">
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
          <div className="col col-6 d-flex align-items-center">
            <span className="text-muted">
              Select one or more entries containing the values your rule will use. You can select multiple entries
              using ctrl or shift.
            </span>
          </div>
        </div>

        {/* OPERATOR */}
        <div className="row mt-2 px-5">
          <div className="col col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Operator</span>
              </div>
              <select className="form-control" value={operator} onChange={handleSelectOperator}>
                <option disabled={true} value="DEFAULT_OPERATOR_VALUE">Select an operator...</option>
                {operators.map(operator => <option key={operator.name} value={operator.details.code}>{operator.name}</option>)}
              </select>
            </div>
          </div>
          <div className="col col-6 d-flex align-items-center">
            <span className="text-muted">{operatorDescription}</span>
          </div>
        </div>

        {/* VALUES */}
        <div className="row mt-2 px-5">
          <div className="col col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text">Values</span>
              </div>
              <input type="text" className="form-control" value={values} onChange={handleChangeValue} />
            </div>
          </div>
          <div className="col col-6 d-block align-items-center">
            <span className="text-muted">Current values:</span>
            {values.map((val, index) => <Badge key={`${val}-${index}`} type="value" name={val} noTooltip />)}
          </div>
        </div>

        {/* IMPORTANCE */}
        <div className="row my-2 px-5">
          <div className="col col-6">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend range-prepend">
                <span className="input-group-text">Importance</span>
              </div>
              <input type="range" className="form-control-range" min="-3" max="3" value={importance} onChange={handleChangeImportance} />
            </div>
          </div>
          <div className="col col-6 d-block align-items-center">
            <span className="text-muted">Current importance: </span><strong>{translateImportance(importance)}</strong>
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div className="row justify-content-end">
          <div className="col col-4 text-right">
            <button
              className="btn btn-primary"
              onClick={handleClickSaveChanges}
            >
              <FontAwesomeIcon icon={faSave} className="mr-1" />Save changes
            </button>
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

