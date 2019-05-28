import ResultField from './ResultField';

// Components.
import React from 'react';


const ResultItem = ({ name, queries }) => {
  return (
    <tr>
      <th
        className="border"
        scope="row"
      >
        {name}
      </th>
      {
        queries.map((query) =>
          query.fields.map((field, index) =>
            <ResultField key={`field-${field.name}-${index}`} {...field} />
          )
        )
      }
    </tr>
  );
};

export default ResultItem;
