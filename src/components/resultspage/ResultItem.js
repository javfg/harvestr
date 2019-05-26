import React from 'react';

// Components.
import ResultQuery from './ResultQuery';


const ResultItem = ({ name, queries }) => {
  return (
    <li>
      <strong>{name}:</strong>
      <ul>
        {queries.map((query, index) => {
          return (
            <ResultQuery key={`q-${name}-${index}-${query.name}`} {...query} />
          );
        })}
      </ul>
    </li>
  );
};

export default ResultItem;
