import React from "react";

import ResultQuery from "./ResultQuery";

const ResultItem = ({ data }) => {
  return (
    <li>
      {data.item}:
      <ul>
        {data.queries.map((query, index) => (
          <ResultQuery key={`q-${data.item}-${index}-${query}`} {...query} />
        ))}
      </ul>
    </li>
  );
};

export default ResultItem;
