import React from 'react';

//Components.
import Badge from './Badge';


const RuleList = ({ rules }) => (
  (rules.length === 0) ? (
    <p className="text-muted mb-0">Rule list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {rules.map((rule, index) => {
          const {name, ...details} = rule;
          return <Badge key={`${name}-${index}`} name={name} details={details} type="rule" />
        })}
      </div>
    </div>
  )
);


export default RuleList;
