import React from 'react';

// Components.
import Badge from './Badge';

// Utils.
import { detailLabel } from '../../utils/labels';


const RuleList = ({ rules }) => (
  (rules.length === 0) ? (
    <p className="text-muted mb-0">Rule list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {rules.map((rule, index) => {
          // eslint-disable-next-line no-unused-vars
          const {name, parameters, ...details} = rule;
          return <Badge key={`${name}-${index}`} name={name} details={detailLabel(details)} type="rule" />
        })}
        <p className="text-muted mt-3 mb-0"><small>{rules.length} Rules total.</small></p>
      </div>
    </div>
  )
);


export default RuleList;
