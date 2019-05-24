import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tab extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      caption,
      currentTab,
      icon,
      handleClick,
      tabNumber,
      type
    } = this.props;

    const isCurrent = currentTab === tabNumber;


    return (
      <li className="nav-item">
        <span className={`nav-link ${isCurrent ? 'active' : ''}`}>
          { type === 'radio' && (
            <input
              className="mr-2"
              type="radio"
              name="upload"
              checked={isCurrent}
              onChange={() => {handleClick(tabNumber)}}
            />
          )}
          <a
            href="#!"
            onClick={() => {handleClick(tabNumber)}}
            className="clear-link"
          >
            <FontAwesomeIcon icon={icon} className="mr-1" />{caption}
          </a>
        </span>
      </li>
    );
  }
}


export default Tab;
