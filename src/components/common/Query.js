import React from 'react';

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components.
import Service from './Service';
import Field from './Field';


const Query = ({ name, fields }) => (
  <>
    <td className="align-middle py-1">
      <Service name={name} />
    </td>
    <td className="align-middle py-1">
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />
    </td>
    <td className="align-middle py-1">
    {fields.map(f => <Field key={f.name} name={f.name} />)}
  </td>
  </>
);


export default Query;
