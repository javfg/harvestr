import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCubes, faSearch, faList } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setResultsPageField } from '../../actions/ResultsPage';
import { setResultsTooltip } from '../../actions/ResultsTooltip';

// Components.
import Paginator from '../common/Paginator';
import ResultsItem from './ResultsItem';

// Selectors.
import selectSearchResults from '../../selectors/searchResultsSelector';


class ResultsItemList extends React.Component {
  constructor(props) {
    super(props);
  }


  handleContractClick = (queryName) => {
    const {
      setResultsPageField,
      resultsPage: { contractedQueries }
    } = this.props;

    const contractedQueriesSet = new Set(contractedQueries);

    contractedQueriesSet.has(queryName)
      ? contractedQueriesSet.delete(queryName)
      : contractedQueriesSet.add(queryName);

    setResultsPageField({contractedQueries: Array.from(contractedQueriesSet)})
  };

  handleChangePage = (currentPage) => {
    this.props.setResultsTooltip({lockedVisible: false});
    this.props.setResultsPageField({currentPage});
  }

  render () {
    const {
      handleChangePage,
      handleContractClick,
      props: {
        searchResults,
        resultsPage: { currentPage, contractedQueries, totalPages }
      }
    } = this;

    if (searchResults.length === 0) {
      return (
        <p>No items</p>
      );
    }

    return (
      <>
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          pageWindow={7}
          pageChangeHandler={handleChangePage}
        />
        <div className="table-container">
          <div className="table-scroll">
            <table className="table table-sm table-borderless">
              <thead className="text-center">
                <tr>
                  <th
                    rowSpan={2}
                    className="bg-light border align-middle"
                  >
                    <FontAwesomeIcon icon={faCubes} /> Item
                  </th>
                  {
                    searchResults[0].queries.map((query) =>
                      <th
                        className="bg-light border text-left ellipsis"
                        colSpan={query.fields.length}
                        key={`{header-query-${query.name}`}
                        scope="col"
                      >
                        <FontAwesomeIcon icon={faSearch} className="mr-1" />
                        {query.name}
                        <button
                          className="btn btn-xs btn-dark"
                          onClick={() => handleContractClick(query.name)}
                        >
                          { contractedQueries.includes(query.name)
                            ? <FontAwesomeIcon icon={faPlus} />
                            : <FontAwesomeIcon icon={faMinus} />}
                        </button>
                      </th>
                    )
                  }
                </tr>
                <tr>
                  {
                    searchResults[0].queries
                      .filter(query => !contractedQueries.includes(query.name))
                      .map((query) =>
                        query.fields.map((field) =>
                          <th
                            className={`bg-light border font-weight-lighter align-middle`}
                            key={`{header-${field.name}`}
                            scope="col"
                          >
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon icon={faList} className="mr-1" />
                              <small className="small">
                                {field.name}
                              </small>
                            </div>
                          </th>
                        )
                      )
                  }
                </tr>
              </thead>
              <tbody>
                {
                  searchResults.map((item, index) =>
                    <ResultsItem
                      key={`item-${index}-${item.name}`}
                      {...item}
                    />
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  resultsPage: state.ui.resultsPage.main,
  searchResults: selectSearchResults(state.searchResults, state.ui.resultsPage.main.currentPage, state.ui.resultsPage.main.pageSize)
});

const mapDispatchToProps = (dispatch) => ({
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
  setResultsTooltip: (newState) => dispatch(setResultsTooltip(newState))
})


export default connect(mapStateToProps, mapDispatchToProps)(ResultsItemList);
