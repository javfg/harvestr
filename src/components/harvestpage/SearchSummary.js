import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faEllipsisH, faAddressCard, faFileAlt, faSave, faListOl, faSearch, faPlay } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setDetailsField } from '../../actions/Details';
import { setHarvestProgressModalField } from '../../actions/HarvestProgressModal';
import { setResultsPageField } from '../../actions/ResultsPage';
import { setSearchResults } from '../../actions/searchResults';

// Components.
import HarvestProgressModal from './HarvestProgressModal';
import PageTitle from '../common/PageTitle';

// Search engine.
import SearchEngine from '../../engine/searchEngine';
import ProgressBarController from '../../engine/model/ProgressBarController';

// Utils.
import { download } from '../../utils/file';
import RankingEngine from '../../engine/rankingEngine';


class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = async () => {
    const {
      harvest: { itemList, searchProfile, rankingDefinition },
      config, setDetailsField, setHarvestProgressModalField, setSearchResults, setResultsPageField
    } = this.props;

    const progressBar = new ProgressBarController();

    setHarvestProgressModalField({visible: true});

    const searchEngine = new SearchEngine(
      itemList,
      searchProfile,
      rankingDefinition,
      config
    );

    const rankingEngine = new RankingEngine(
      searchEngine.items,
      rankingDefinition,
      config
    )

    const searchResults = await searchEngine.run(progressBar);
    const rankedResults = await rankingEngine.run(progressBar);

    setDetailsField({stats: searchResults.stats});
    setSearchResults(rankedResults.items);
    setResultsPageField({
      currentPage: 0,
      totalPages: Math.ceil(searchResults.items.length / 10),
      pageSize: 10
    });
  }


  handleNameChange = (e) => {
    this.props.setDetailsField({name: e.currentTarget.value});
  };

  handleDescriptionChange = (e) => {
    this.props.setDetailsField({description: e.currentTarget.value});
  };

  handleSaveHarvest = () => {
    const { harvest, searchResults = [] } = this.props;
    const fileName = harvest.details.name;
    const contents = {harvest, searchResults};

    download(fileName, contents, 'application/json');
  };

  handleSaveRankingDefinition = () => {
    const { harvest } = this.props;
    const fileName = `${harvest.details.name}-rankingDefinition`;

    download(fileName, harvest.rankingDefinition, 'application/json');
  };

  handleSaveSearchProfile = () => {
    const { harvest } = this.props;
    const fileName = `${harvest.details.name}-searchProfile`;

    download(fileName, harvest.searchProfile, 'application/json');
  };


  render() {
    const {
      handleDescriptionChange,
      handleLaunchSearch,
      handleNameChange,
      handleSaveHarvest,
      handleSaveRankingDefinition,
      handleSaveSearchProfile,
      props: {
        harvest: { details },
        harvestProgressModal: { visible }
      }
    } = this;

    return (
      <>
        <PageTitle
          description="Before running the harvest, you can give it a name and description; and save
                       it to your computer so you can load and run it again at a later time."
          icon={faEllipsisH}
          size="h3"
          title="Details and saving"
        />

        <div className="row mb-3 px-3">
          <div className="col col-6 flex-column">
            <div className="input-group mb-3">
              <div className="input-group-prepend w-100">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faAddressCard} className="mr-1" />Name
                </span>
                <input
                  className="form-control"
                  type="text"
                  value={details.name}
                  spellCheck={false}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="input-group-prepend w-100">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faFileAlt} className="mr-1" />Description
              </span>
              <textarea
                className="form-control resize-none"
                rows="6"
                value={details.description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="col col-6">
            <div className="container border h-100 pt-2">
              <div className="row">
                <div className="col">
                  <PageTitle
                    icon={faSave}
                    title="Save for later use"
                    size="h4"
                    margins="mb-3"
                    description="You can save the whole harvest, including item list, search profile, ranking definition
                                 along with the current results (if any), or choose to save only the search profile or
                                 ranking definition separately."
                    descriptionSize="small"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <button
                    className="btn btn-primary mr-2 btn-block"
                    onClick={handleSaveHarvest}
                  >
                    <FontAwesomeIcon icon={faSave} className="mr-1" />Save everything
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary mr-2 btn-block d-flex justify-content-center align-items-center"
                    onClick={handleSaveSearchProfile}
                  >
                    <FontAwesomeIcon icon={faSearch} className="mr-1" /><small>Save search profile</small>
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-primary mr-2 btn-block d-flex justify-content-center align-items-center"
                    onClick={handleSaveRankingDefinition}
                  >
                    <FontAwesomeIcon icon={faListOl} className="mr-1" /><small>Save ranking definition</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PageTitle
          description="Once you are done, you can start the process."
          icon={faPlay}
          size="h3"
          title="Run"
        />
        <div className="row justify-content-center">
          <div className="col-xs-8 col-sm-6 col-md-4">
            <button
              className="btn btn-primary btn-block my-2"
              onClick={handleLaunchSearch}
            >
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />Launch harvest
            </button>
          </div>
        </div>

        <CSSTransition
          in={visible}
          timeout={250}
          classNames='modal'
          unmountOnExit
        >
          <HarvestProgressModal />
        </CSSTransition>
      </>
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
  setDetailsField: (newState) => dispatch(setDetailsField(newState)),
  setHarvestProgressModalField: (newState) => dispatch(setHarvestProgressModalField(newState)),
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
