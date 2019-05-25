import React from 'react';

//Components
import Item from './Item';


const ItemList = ({ items }) => (
  <div className="card p-2">
    {
      (items.length === 0) ? (
        <p>Item list is empty.</p>
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
