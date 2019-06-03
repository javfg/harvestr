import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';


const Field = ({name}) =>
  <span className="badge badge-field border border-dark text-light mx-2" key={name}>
    <FontAwesomeIcon icon={faList} className="mr-1" /> {name}
  </span>


export default Field;
