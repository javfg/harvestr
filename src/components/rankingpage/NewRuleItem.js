import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { addRule } from '../../actions/RankingDefinition';


class RuleItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="row">
        <div className="col d-flex align-items-center justify-content-between bg-white mx-3 mb-2 p-2 border">
          <p className="mb-0 ml-3">Add a new rule...</p>
          <button
            className="btn btn-xs btn-success ml-1"
          >
            <FontAwesomeIcon icon={faPlus} className="mw-1" />
          </button>
        </div>
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapDispatchToProps = dispatch => ({
  addRule: (rule) => dispatch(addRule(rule))
});

export default connect(undefined, mapDispatchToProps)(RuleItem);
