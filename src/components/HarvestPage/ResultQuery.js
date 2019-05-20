import React from "react";

const ResultQuery = ({ name, url, fields }) => {
  return (
    <li>
      <strong>{name}:</strong> {url}
      <ul>
        {fields.map((f, i) => {
          return (
            <li key={`${f}-${i}`}>
              <strong>{f.name}:</strong>{" "}
              {Array.isArray(f.data) ? f.data.join("; ") : f.data || "Empty"}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default ResultQuery;
