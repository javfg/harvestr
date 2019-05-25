import React from 'react';

//Components
import Query from './Query';


const QueryList = ({ queries }) => (
  <div className="row">
    <div className="col">
      <ul style={{'maxHeight': '200px', 'overflow': 'auto'}}>
        {
          queries.map((q, i) => <Query key={`${q}-${i}`} {...q} />)
        }
      </ul>
    </div>
  </div>
);


export default QueryList;
