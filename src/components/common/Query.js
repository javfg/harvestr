import React from 'react';

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Service from './Service';
import Field from './Field';


const Query = ({ name, fields }) => (
  <>
    <td className="align-middle p-1">
      <Service name={name} />
    </td>
    <td className="align-middle p-1">
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />
    </td>
    <td className="align-middle p-1">
    {fields.map(f => <Field key={f.name} name={f.name} />)}
  </td>
  </>
);


export default Query;
