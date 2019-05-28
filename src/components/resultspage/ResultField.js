import React from 'react';

// Components.



const ResultField = ({ value }) => {
  return (
    <td
      className="border text-break"
    >
      {
        value.length === 1 ? (
          value[0].value.join(', ').slice(0, 64)
        ) : (
          ''
        )
      }
    </td>
  );
};

export default ResultField;
