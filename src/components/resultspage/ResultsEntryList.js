import React from "react";

// Components.
import ResultsEntry from './ResultsEntry';


class ResultsEntryList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { entries } = this.props;

    console.log('props', entries);

    if (!entries) {
      return null;
    }

    return (
      <table className="table table-sm">
        <thead>
          <tr>
            {
              entries.map((entry, index) =>
                <th
                  className="bg-light border font-weight-lighter align-middle text-small"
                  key={`entrylist-${index}`}
                  scope="row"
                >
                  {entry.name}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            // TODO: TABLE IS ROWS NOT COLS. WHAT.
          }
        </tbody>
      </table>
    );
  }
}


export default ResultsEntryList;
