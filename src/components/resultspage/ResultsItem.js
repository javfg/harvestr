import React from 'react';
import { connect } from 'react-redux';

// Components.
import Badge from '../common/Badge';
import ResultsField from './ResultsField';

// Utils.
import { explain } from '../../utils/labels';


class ResultsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      props: { name, queries, resultsPage: { contractedQueries }, score, explanations }
    } = this;

    const explanationCaptions = explanations
      .filter(explanation => explanation.result)
      .map(explanation => explain(explanation));

    return (
      <tr>
        <th
          className="border"
          scope="row"
        >
          {name}
          <Badge type="score" name={score} details={explanationCaptions} />
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
