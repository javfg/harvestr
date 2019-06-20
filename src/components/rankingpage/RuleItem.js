import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faClone } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { deleteRule } from '../../actions/RankingDefinition';

// Components.
import Badge from '../common/Badge';

// Utils.
import { detailLabel } from '../../utils/labels';


class RuleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }


  handleClickEdit = () => {
    this.setState({expanded: !this.state.expanded});
  };


  render() {
    const {
      handleClickEdit,
      props: {
        rule: { name, ...details }
      },
      state: { expanded }
    } = this;


    return (
      <div className="container bg-white border p-2 mb-2">
        <div key={`${name}`} className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <Badge name={name} details={detailLabel(details)} type="rule" />
            <div>
              <button
                className={`btn btn-xs ${expanded ? 'btn-warning': 'btn-dark'} ml-1`}
                onClick={handleClickEdit}
              >
                <FontAwesomeIcon icon={faPen} className="mw-1" />
              </button>
              <button
                className="btn btn-xs btn-dark ml-1"
              >
                <FontAwesomeIcon icon={faClone} className="mw-1" />
              </button>
              <button
                className="btn btn-xs btn-danger ml-1"
              >
                <FontAwesomeIcon icon={faTrashAlt} className="mw-1" />
              </button>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="row">
            <div className="col px-5">
              {Object.keys(details).map(detail => <p key={detail}>{detail}: {details[detail]}</p>)}
            </div>
          </div>
        )}
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapDispatchToProps = dispatch => ({
  deleteRule: (ruleName) => dispatch(deleteRule(ruleName))
});

export default connect(undefined, mapDispatchToProps)(RuleItem);
