import React from 'react';

//Components.
import Item from './Item';


const ItemList = ({ items }) => (
  (items.length === 0) ? (
    <p className="text-muted mb-0">Item list is empty.</p>
  ) : (
    <div className="row">
      <div className="col">
        {items.map(i => <Item key={i} name={i}/> )}
      </div>
    </div>
  )
);


export default ItemList;
