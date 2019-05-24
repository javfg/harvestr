import React from 'react';


const Item = ({ name }) =>
  <span className="badge badge-dark border border-warning mr-2 text-warning" key={name}>{name}</span>


export default Item;
