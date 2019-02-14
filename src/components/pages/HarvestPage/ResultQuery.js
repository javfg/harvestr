import React from "react";

const ResultQuery = ({ query, data }) => {
  console.log("data", data);

  return (
    <li>
      {query}:
      <ul>
        {data.map(d => {
          console.log("d", d);

          return <p key={d}>{d}</p>;
        })}
      </ul>
    </li>
  );
};

export default ResultQuery;
