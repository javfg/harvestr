import ResultsField from './ResultsField';

// Components.
import React from 'react';


class ResultsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { name, queries }
    } = this;

    return (
      <tr>
        <th
          className="border"
          scope="row"
        >
          {name}
        </th>
        {
          queries.map((query) =>
            query.fields.map((field, index) =>
              <ResultsField
                key={`field-${field.name}-${index}`}
                {...field}
              />
            )
          )
        }
      </tr>
    );
  }
}


export default ResultsItem;
