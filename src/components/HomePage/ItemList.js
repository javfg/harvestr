import React from 'react';

//Components
import Item from './Item';


const ItemList = ({ items }) => (
  <ul style={{'maxHeight': '200px', 'overflow': 'auto'}}>
    {
      items.map(i => <Item key={i} name={i} />)
    }
  </ul>
);


export default ItemList;
