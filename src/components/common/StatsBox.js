import React from 'react';

// Components.
import Badge from './Badge';


const StatsBox = ({ stats }) => (
  <div className="modal-stats align-items-center">
  <div className="mb-1">
    <Badge name={`${stats.items} Items`} type="item" noTooltip />
  </div>
  <div className="mb-1">
    <Badge name={`${stats.queries} Queries`} type="query" noTooltip />
  </div>
  <div className="mb-1">
    <Badge name={`${stats.fields} Fields`} type="field" noTooltip />
  </div>
  <div className="mb-1">
    <Badge name={`${stats.entries} Entries`} type="entry" noTooltip />
  </div>
  <div className="mb-1">
    <Badge name={`${stats.values} Values`} type="value" noTooltip />
  </div>
  </div>
);


export default StatsBox;
