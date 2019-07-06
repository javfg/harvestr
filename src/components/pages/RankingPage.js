import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setSearchResults } from '../../actions/searchResults';
import { setResultsPageField } from '../../actions/ResultsPage';

// Components.
import PageTitle from '../common/PageTitle';
import RuleList from '../rankingpage/RuleList';

// Model.
import Rule from '../../engine/model/Rule';

// Ranking Engine.
import RankingEngine from '../../engine/rankingEngine';


class RankingPage extends React.Component {
  constructor(props) {
    super(props);
  }


  handleClickApplyRanking = async () => {
    const {
      harvest: { rankingDefinition, searchResults },
      config, history, setSearchResults, setResultsPageField
    } = this.props;

    // Empty previous score and explanations, remake rules.
    searchResults.forEach(item => {
      item.rules = rankingDefinition.rules.map(rule => new Rule(
        rule.name,
        rule.entry,
        rule.field,
        rule.importance,
        rule.query,
        rule.operator,
        rule.values,
        rule.parameters
      ));
      item.score = 0;
      item.explanations = [];
    });

    const rankingEngine = new RankingEngine(
      searchResults,
      rankingDefinition,
      config
    );

    const rankedResults = await rankingEngine.run();

    setSearchResults(rankedResults.items);
    setResultsPageField({
      currentPage: 0,
      totalPages: Math.ceil(rankedResults.items.length / 10),
      pageSize: 10
    });

    // Navigate to results.
    history.push('/results');
  }

  handleClickBackToHarvestEditor = () => {this.props.history.push('/harvest')};


  render() {
    const {
      handleClickApplyRanking,
      handleClickBackToHarvestEditor,
      props: { harvest: { searchResults }}
    } = this;

    return (
      <div className="container my-4">
        <PageTitle
          description="Build a Ranking definition by adding rules. Every rule will affect a field of a query,
                       and must be described by an operator and a score."
          icon={faGavel}
          title="Ranking Definition Editor"
        />

        <div className="row">
          <div className="col bg-light border mx-3 py-2">
            <RuleList />
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col col-3">
            {
              searchResults.length > 0 ? (
                <button
                  className="btn btn-block btn-primary"
                  onClick={handleClickApplyRanking}
                >
                  Apply this ranking definition
                </button>
              ) : (
                <button
                  className="btn btn-block btn-primary"
                  onClick={handleClickBackToHarvestEditor}
                >
                  <FontAwesomeIcon icon={faSeedling} className="mr-1" />Go to harvest editor
                </button>
              )
            }
          </div>
        </div>

      </div>
    );
  }
}


//
// Mapping functions.
//
const mapStateToProps = (state) => ({
  config: state.config,
  harvestPage: state.ui.harvestPage,
  harvestProgressModal: state.ui.harvestProgressModal,
  harvest: state.harvest,
  searchResults: state.harvest.searchResults
});

const mapDispatchToProps = dispatch => ({
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RankingPage));
