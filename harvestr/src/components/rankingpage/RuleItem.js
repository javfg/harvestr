import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faClone } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { deleteRule } from '../../actions/RankingDefinition';

// Components.
import Badge from '../common/Badge';
import Tooltip from '../common/Tooltip';

// Utils.
import { detailLabel } from '../../utils/labels';
import RuleItemDetails from './RuleItemDetails';


// TODO: Use editorItem.
class RuleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      deleteConfirm: false
    }

    this.tooltipRef = React.createRef();
    this.deleteTimeout = null;
  }


  handleClickEdit = () => {
    this.setState({expanded: !this.state.expanded});
  };

  handleClickDelete = (e) => {
    const {
      props: { deleteRule, rule: { name } },
      state: { deleteConfirm }
     } = this;

    if (!deleteConfirm) {
      this.setState({deleteConfirm: true});
      this.tooltipRef.current.show(e.currentTarget.getBoundingClientRect());
      this.deleteTimeout = setTimeout(() => {
        this.setState({deleteConfirm: false});
        this.tooltipRef.current.hide();
      }, 1000);
    } else {
      this.tooltipRef.current.hide();
      clearTimeout(this.deleteTimeout);
      deleteRule(name);
    }
  };


  componentWillUnmount() {
    clearTimeout(this.deleteTimeout);
  }


  render() {
    const {
      handleClickDelete,
      handleClickEdit,
      props: {
        // eslint-disable-next-line no-unused-vars
        rule: { name, parameters, ...details }
      },
      state: { expanded }
    } = this;


    return (
      <>
        <div className="container bg-white border p-2 mb-2 rule-move">
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
                  onClick={handleClickDelete}
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="mw-1" />
                </button>
              </div>
            </div>
          </div>

          <CSSTransition
            in={expanded}
            timeout={500}
            classNames='expand'
            unmountOnExit
          >
            <RuleItemDetails name={name} details={details} />
          </CSSTransition>
        </div>
        <Tooltip
          ref={this.tooltipRef}
          margin={1}
        >
          <p className="mb-0 p-1 bg-warning text-small font-weight-bold">Click again to delete</p>
        </Tooltip>
      </>
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
