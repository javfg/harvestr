import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faEllipsisH,
  faFile,
  faGavel,
  faList,
  faMinus,
  faSearch,
  faStar
} from '@fortawesome/free-solid-svg-icons';

// Components.
import Tooltip from './Tooltip';

// Utils.
import { translate } from '../../utils/labels';


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
      case 'score':
        this.icon = faStar;
        break;
      case 'parser':
        this.icon = faFile;
        break;
      case 'value': default:
        this.icon = faEllipsisH;
        break;
    }
  }


  handleMouseOut = () => !this.props.noTooltip && this.tooltipRef.current.hide();
  handleMouseOver = (e) => !this.props.noTooltip && this.tooltipRef.current.show(e.currentTarget.getBoundingClientRect());


  render() {
    const {
      icon,
      handleMouseOut,
      handleMouseOver,
      props: { details = {}, type, name, noTooltip, margin = 'mx-2' }
    } = this;

    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

    return (
      <>
        <span
          className={`badge badge-dark badge-${type} ${margin}`}
          key={`badge-${name}`}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={icon} className="mr-1" />{name}
        </span>
        {!noTooltip && (
          <Tooltip
            ref={this.tooltipRef}
            margin={1}
          >
            <div className="tooltip-badge-title">
              <span className={`badge badge-dark badge-${type} mx-2`}>
                <FontAwesomeIcon icon={icon} className="mr-1" /><strong>{typeLabel}</strong>
              </span>
              <span><strong>{name}</strong></span>
            </div>
            {details.length > 0 && (
              <div className="tooltip-badge-body">
                {details.map((detail, index) =>
                  <div
                    className="tooltip-badge-details"
                    key={`detail-${detail}-${index}`}
                  >
                    {detail}
                  </div>
                )}
              </div>
            )}
          </Tooltip>
        )}
      </>
    );
  }
}


export default Badge;
