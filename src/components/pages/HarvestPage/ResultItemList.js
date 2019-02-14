import React from "react";

//Components
import ResultItem from "./ResultItem";

const ResultItemList = ({ items }) => (
  <ul style={{ wordWrap: "break-word" }}>
    {items.map((item, index) => (
      <ResultItem key={`i-${index}-${item}`} data={item} />
    ))}
  </ul>
);

export default ResultItemList;
