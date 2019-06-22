import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { addRule } from '../../actions/RankingDefinition';

// Components.
import Tooltip from '../common/Tooltip';


class RuleItem extends React.Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();
    this.newRuleTimeout = null;
  }


  handleClickAddRule = (e) => {
    const { rankingDefinition, addRule } = this.props;

    if (rankingDefinition.rules.find(rule => rule.name === "new rule")) {
      this.tooltipRef.current.show(e.currentTarget.getBoundingClientRect());
      this.deleteTimeout = setTimeout(() => {
        this.tooltipRef.current.hide();
      }, 1000);

      return;
    }

    addRule({
      name: 'new rule',
      query: 'DEFAULT_QUERY_VALUE',
      field: 'DEFAULT_FIELD_VALUE',
      entry: ['DEFAULT_ENTRY_VALUE'],
      operator: 'DEFAULT_OPERATOR_VALUE',
      value: [],
      importance: 0
    });
  }


  componentWillUnmount() {
    clearTimeout(this.newRuleTimeout);
  }


  render() {
    const {
      handleClickAddRule
    } = this;

    return (
      <>
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between bg-white mx-3 mb-2 p-2 border">
            <p className="mb-0 ml-3">Add a new rule...</p>
            <button
              className="btn btn-xs btn-success ml-1"
              onClick={handleClickAddRule}
            >
              <FontAwesomeIcon icon={faPlus} className="mw-1" />
            </button>
          </div>
        </div>
        <Tooltip
          ref={this.tooltipRef}
          margin={1}
        >
          <p className="mb-0 p-1 bg-danger text-light text-small font-weight-bold">First, edit the rule you just added!</p>
        </Tooltip>
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  rankingDefinition: state.harvest.rankingDefinition
});

const mapDispatchToProps = dispatch => ({
  addRule: (rule) => dispatch(addRule(rule))
});

export default connect(mapStateToProps, mapDispatchToProps)(RuleItem);
