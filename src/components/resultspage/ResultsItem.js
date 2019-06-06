import ResultsField from './ResultsField';
import { connect } from 'react-redux';

// Components.
import React from 'react';


class ResultsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { name, queries, resultsPage: { contractedQueries } }
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
          queries
            .filter(query => !contractedQueries.includes(query.name))
            .map((query) =>
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

//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  resultsPage: state.ui.resultsPage.main
});

export default connect(mapStateToProps)(ResultsItem);
