import React from 'react';

//Components
import Query from './Query';


const QueryList = ({ queries }) => (
  <div className="row">
    <div className="col">
      {
        (!queries || queries.length === 0) ? (
          <p className="text-muted mb-0">Search profile is empty.</p>
        ) : (
          <>
            <table className="table table-striped table-borderless">
              <tbody>
                {queries.map((query, index) =>
                  (
                    <tr key={`${query}-${index}`}>
                      <Query key={`${query}-${index}`} {...query} />
                    </tr>
                  ))}
              </tbody>
            </table>
            <p className="text-muted mb-0"><small>Queries for {queries.length} different services.</small></p>
          </>
        )
      }
    </div>
  </div>
);


export default QueryList;
