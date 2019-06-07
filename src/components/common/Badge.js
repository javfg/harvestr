import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faSearch, faList, faMinus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';


const Badge = ({name, type}) => {
  let icon;

  switch(type) {
    case 'item':
      icon = faCubes;
      break;
    case 'query':
      icon = faSearch;
      break;
    case 'field':
      icon = faList;
      break;
    case 'entry':
      icon = faMinus;
      break;
    case 'value': default:
      icon = faEllipsisH;
      break;
  }

  return (
    <span
      className={`badge badge-dark badge-${type} mx-2`}
      key={`badge-${name}`}
    >
      <FontAwesomeIcon icon={icon} className="mr-1" />{name}
    </span>
  );
}


export default Badge;
