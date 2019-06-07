import React from 'react';

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components.
import Badge from './Badge';


const Query = ({ name, fields }) => (
  <>
    <td className="align-middle py-1">
      <Badge name={name} type="query" />
    </td>
    <td className="align-middle py-1">
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />
    </td>
    <td className="align-middle py-1">
    {fields.map(f => <Badge key={f.name} name={f.name} type="field" />)}
  </td>
  </>
);


export default Query;
