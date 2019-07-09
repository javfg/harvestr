import React from "react";
import { CSSTransition } from "react-transition-group";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faClone } from '@fortawesome/free-solid-svg-icons';

// Components.
import Tooltip from './Tooltip';


class EditorItem extends React.Component {
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
      props: { deleteItem, name },
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

      console.log('deleting', name);
      deleteItem(name);
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
        badge,
        children,
        expandButton = faPen,
        contractButton = faPen,
        expandButtonClass = "btn-dark",
        contractButtonClass = "btn-dark",
        name
      },
      state: { expanded }
    } = this;

    const editorItemDetails = React.Children.only(children);

    return (
      <>
        <div className="container bg-white border p-2 mb-2 rule-move">
          <div key={`${name}`} className="row">
            <div className="col d-flex align-items-center justify-content-between">
              {badge}
              <div>
                <button
                  className={`btn btn-xs ${!expanded ? expandButtonClass: contractButtonClass} ml-1`}
                  onClick={handleClickEdit}
                >
                  <FontAwesomeIcon icon={!expanded ? expandButton : contractButton} className="mw-1" />
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
            <>
              {editorItemDetails}
            </>
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

export default EditorItem;
