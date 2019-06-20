import React from 'react';

import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components.
import Badge from './Badge';

// Utils.
import { detailLabel } from '../../utils/labels';


const Query = ({ name, fields, ...details }) => {
  console.log('details', details);


  return (
    <>
      <td className="align-middle py-1">
        <Badge name={name} type="query" details={detailLabel(details)} />
      </td>
      <td className="align-middle py-1">
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />
      </td>
      <td className="align-middle py-1">
      {fields.map(field => {
        let { name, entries, ...details } = field;
        details['entries'] = (
          <div className="tooltip-badge-entries">
            {entries.map(entry =>
              <Badge key={`entry-${entry.name}`} type="entry" name={entry.name} noTooltip />
            )}
          </div>
        );

        return (
          <Badge key={`field-${name}`} name={name} details={detailLabel(details)} type="field" />
        );
      })}
    </td>
    </>
  );
}


export default Query;
