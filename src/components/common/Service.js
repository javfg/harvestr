import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';


const Service = ({name}) =>
  <span className="badge badge-service border border-dark text-dark" key={name}>
    <FontAwesomeIcon icon={faCubes} className="mr-1" />
    {name}
  </span>


export default Service;
