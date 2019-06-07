import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Components.
import ResultsEntry from './ResultsEntry';


class ResultsEntryList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { entries, limit = Infinity } = this.props;

    if (!entries || entries.length === 0) {
      return null;
    }

    const valueCount = entries[0].value.length;
    const valuesNotShownCount = valueCount - limit;

    return (
      <div className="results-field__table">
        <table className="table table-sm results-entry-table mb-0">
          {}
          <thead>
            <tr>
              {
                (entries.length > 1) && (
                  entries.map((entry, index) =>
                    <th
                      className="bg-light border font-weight-lighter align-middle"
                      key={`entrylist-header-entrylist-tr-${entry}-${index}`}
                    >
                      <span className="text-xs">
                        <FontAwesomeIcon icon={faEllipsisH} className="mr-1" />
                        {entry.name}
                      </span>
                    </th>
                  )
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              [...Array(Math.min(valueCount, limit)).keys()].map((_, index) => (
                <tr
                  className="border"
                  key={`entrylist-tr-${index}`}
                >
                  <ResultsEntry
                    key={`resultsentry-${index}`}
                    entries={entries}
                    valueIndex={index}
                    mightOverflow={valuesNotShownCount <= 0}
                  />
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          (limit && valuesNotShownCount > 0) && (
            <span className="text-xs text-muted text-right">
              <FontAwesomeIcon icon={faMinus} />
              {valuesNotShownCount} more
            </span>
          )}
      </div>
    );
  }
}


export default ResultsEntryList;
