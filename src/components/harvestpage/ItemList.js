import React from 'react';

//Components
import Item from './Item';


const ItemList = ({ items }) => (
  <div className="card p-2">
    {
      (items.length === 0) ? (
        <p>There are no items loaded.</p>
      ) : (
        <div className="row">
          <div className="col">
            {items.map(i => <Item key={i} name={i}/> )}
          </div>
        </div>
      )
    }
  </div>
);


export default ItemList;
