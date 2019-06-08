import React from 'react';

//Components.
import Badge from './Badge';


const RuleList = ({ rules }) => (
  (rules.length === 0) ? (
    <p className="text-muted mb-0">Rule list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {rules.map((rule, index) =>
          <Badge key={`${rule.name}-${index}`} name={rule.name} type="rule" />
        )}
      </div>
    </div>
  )
);


export default RuleList;
