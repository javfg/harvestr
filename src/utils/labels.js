import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

// Components.
import Badge from '../components/common/Badge';


const labels = {
  csvParser: 'CSV',
  description: 'Description',
  dsvParser: 'DSV',
  entry: 'Entry',
  entries: 'Entries',
  fetcher: 'Fetch strategy',
  field: 'Field',
  format: 'Format',
  htmlParser: 'HTML',
  importance: 'Importance',
  jsonParser: 'JSON',
  mediaType: 'Media type',
  or: 'Alternative path',
  parser: 'Parse strategy',
  path: 'Path',
  saveData: 'Provides',
  serverFetcher: 'Safe',
  standardFetcher: 'Standard',
  query: 'Query',
  requires: 'Requires',
  type: 'Type',
  types: 'Types',
  tsvParser: 'TSV',
  urlTemplate: 'URL Template',
  value: 'Value',
  xmlParser: 'XML'
};

export const translate = (entry) => labels[entry] ? labels[entry] : entry;


export const explain =  (explanation) => {
  return (
    <span>
      <strong>{explanation.score} {Math.abs(explanation.score) === 1 ? 'point' : 'points'}</strong>
      <Badge
        key={`explanation-rule-${explanation.item}-${explanation.rule}`}
        type="rule"
        name={explanation.rule}
        noTooltip
      />
      <FontAwesomeIcon icon={faArrowCircleRight} />
      <Badge
        key={`explanation-item-${explanation.item}-${explanation.rule}`}
        type="item"
        name={explanation.item}
        noTooltip
      />
      <Badge
        key={`explanation-field-${explanation.item}-${explanation.rule}`}
        type="field"
        name={explanation.field}
        noTooltip
      />
      {explanation.result ? explanation.textPositive : explanation.textNegative}
      {explanation.values.map(value => <Badge key={`explanation-${explanation.item}-${explanation.rule}-${value}`} type="value" name={value} noTooltip />)}
    </span>
  )
};