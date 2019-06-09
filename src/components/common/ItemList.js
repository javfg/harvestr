import React from 'react';

//Components.
import Badge from './Badge';


const ItemList = ({ items }) => (
  (items.length === 0) ? (
    <p className="text-muted mb-0">Item list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {items.slice(0, 10).map(item => <Badge key={`item-${item}`} name={item} type="item" />)}
        {items.length > 10 && <Badge name={`...${items.length - 10} more`} type="item" noTooltip />}

        <p className="text-muted mt-3 mb-0"><small>{items.length} Items total.</small></p>
      </div>
    </div>
  )
);


export default ItemList;
