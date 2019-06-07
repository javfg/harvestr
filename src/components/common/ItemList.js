import React from 'react';

//Components.
import Badge from './Badge';


const ItemList = ({ items }) => (
  (items.length === 0) ? (
    <p className="text-muted mb-0">Item list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {items.map(i => <Badge key={i} name={i} type="item" />)}
      </div>
    </div>
  )
);


export default ItemList;
