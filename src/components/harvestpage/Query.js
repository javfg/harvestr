import React from 'react';


const Query = ({ name, url, field, fetcher, parser }) => (
  <li><strong>{name}: </strong>{url} ({field}) [{fetcher}, {parser}]</li>
);


export default Query;
