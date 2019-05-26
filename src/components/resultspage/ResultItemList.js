import React from 'react';

//Components.
import ResultItem from './ResultItem';


const ResultItemList = ({ items }) => {
  return (
    <ul
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }}
    >
      {items.map((item, index) => (
        <ResultItem key={`i-${index}-${item.name}`} {...item} />
      ))}
    </ul>
  );
};

export default ResultItemList;
