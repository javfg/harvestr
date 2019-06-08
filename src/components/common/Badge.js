import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faSearch,
  faList,
  faMinus,
  faEllipsisH,
  faGavel
} from '@fortawesome/free-solid-svg-icons';

// Components.
import Tooltip from './Tooltip';


class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.icon;
    this.tooltipRef = React.createRef();

    switch(props.type) {
      case 'item':
        this.icon = faCubes;
        break;
      case 'query':
        this.icon = faSearch;
        break;
      case 'field':
        this.icon = faList;
        break;
      case 'entry':
        this.icon = faMinus;
        break;
      case 'rule':
        this.icon = faGavel;
        break;
      case 'value': default:
        this.icon = faEllipsisH;
        break;
    }
  }


  handleMouseOut = () => {
    this.tooltipRef.current.hide();
  };

  handleMouseOver = (e) => {
    this.tooltipRef.current.show(e.currentTarget.getBoundingClientRect());
  };


  render() {
    const {
      icon,
      handleMouseOut,
      handleMouseOver,
      props: { type, name }
    } = this;

    return (
      <>
        <span
          className={`badge badge-dark badge-${type} mx-2`}
          key={`badge-${name}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={icon} className="mr-1" />{name}
        </span>
        <Tooltip
          ref={this.tooltipRef}
          margin={1}
        >
          <div className="tooltip-badge-box">{name}: {type}</div>
        </Tooltip>
      </>
    );
  }
}


export default Badge;
