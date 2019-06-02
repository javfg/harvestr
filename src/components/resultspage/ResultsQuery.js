import React from 'react';


const ResultQuery = ({ name, url, fields }) => {
  return (
    <li>
      <strong>{name}:</strong> {url}
      <ul>
        {fields.map((f, i) => {
          return (
            <li key={`${f}-${i}`}>
              <strong>{f.name}:</strong>{" "}{f.value.name}
              {
                JSON.stringify(f.value, 0, null)
              }
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ResultQuery;
