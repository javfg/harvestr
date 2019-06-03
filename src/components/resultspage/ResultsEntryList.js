import React from "react";

// Components.
import ResultsEntry from './ResultsEntry';


class ResultsEntryList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { entries, limit } = this.props;

    if (!entries || entries.length === 0) {
      return null;
    }

    const limitedEntries = limit ? entries.slice(0, limit) : entries;
    const entriesNotShown = entries.length - limit;

    return (
      <div className="results-field__table">
        <table className="table table-sm results-entry-table mb-0">
          {}
          <thead>
            <tr>
              {
                (entries[0].length > 1) && (
                  entries[0].map((entry, index) =>
                    <th
                      className="bg-light border font-weight-lighter align-middle"
                      key={`entrylist-header-entrylist-tr-${entry}-${index}`}
                    >
                      <span className="text-xs">{entry.name}</span>
                    </th>
                  )
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              limitedEntries.map((entry, index) => {
                return (
                  <tr
                    className="border"
                    key={`entrylist-tr-${entry}-${index}`}
                  >
                    <ResultsEntry
                      key={`resultsentry-${entry}-${index}`}
                      entry={entry}
                      mightOverflow={entriesNotShown <= 0}
                    />
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        { (limit && entriesNotShown > 0) && (<span className="text-xs text-muted text-right">...{entriesNotShown} more</span>) }
      </div>
    );
  }
}


export default ResultsEntryList;
