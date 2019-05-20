import React from 'react';

//Components
import Query from './Query';


const QueryList = ({ queries }) => (
  <ul style={{'maxHeight': '200px', 'overflow': 'auto'}}>
    {
      queries.map((q, i) => <Query key={`${q}-${i}`} {...q} />)
    }
  </ul>
);


export default QueryList;
