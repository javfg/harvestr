import React from "react";

const Item = ({ data }) => {
  console.log(data);

  return (
    <li>
      {data.item}
      <ul>
        {data.queries.map(q => {
          q.query + q.data;
        })}
      </ul>
    </li>
  );
};

export default Item;
