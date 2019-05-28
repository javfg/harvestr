import React from 'react';
import { connect } from 'react-redux';


//Components.
import ResultItem from './ResultItem';


class ResultItemList extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { searchResults } = this.props;

    //console.log('searchResults', JSON.stringify(searchResults));

    if (searchResults.length === 0) {
      return (
        <p>No items</p>
      )
    }

    // TODO: TABLE WIDTH
    return (
      <div className="table-container">
        <table className="table table-sm table-borderless">
          <thead className="text-center">
            <tr>
              <th
                rowSpan={2}
                className="bg-light border align-middle"
              >
                Item
              </th>
              {
                searchResults[0].queries.map((query) =>
                  <th
                    className="bg-light border"
                    colSpan={query.fields.length}
                    key={`{header-query-${query.name}`}
                    scope="col"
                  >
                    {query.name}
                  </th>
                )
              }
            </tr>
            <tr>
              {
                searchResults[0].queries.map((query) =>
                  query.fields.map((field) =>
                    <th
                      className="bg-light border font-weight-lighter align-middle"
                      key={`{header-${field.name}`}
                      scope="col"
                    >
                      <small className="small">{field.name}</small>
                    </th>
                  )
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              searchResults.map((item, index) =>
                <ResultItem key={`item-${index}-${item.name}`} {...item} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => {
  return { searchResults: state.searchResults };
};


export default connect(mapStateToProps)(ResultItemList);
