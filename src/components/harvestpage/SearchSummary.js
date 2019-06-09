import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faEllipsisH, faAddressCard, faFileAlt, faSave } from '@fortawesome/free-solid-svg-icons';

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

// Utils.
import { download } from '../../utils/file';


class SearchSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLaunchSearch = async () => {
    this.props.setHarvestProgressModalField({visible: true});

    const searchEngine = new SearchEngine(
      this.props.harvest.itemList,
      this.props.harvest.searchProfile,
      this.props.harvest.rankingDefinition,
      this.props.config
    );

    const searchResults = await searchEngine.run();

    this.props.setDetailsField({stats: searchResults.stats});
    this.props.setSearchResults(searchResults.items);
    this.props.setResultsPageField({
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
    const { harvest } = this.props;
    const fileName = `${harvest.details.name}-results-${moment().format('HH-mm-ss-DD-MM-YYYY')}`;

    download(fileName, harvest, 'application/json');
  };


  render() {
    const {
      handleDescriptionChange,
      handleLaunchSearch,
      handleNameChange,
      handleSaveHarvest,
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
          margins='mb-2'
          size="h3"
          title="Details"
        />

        <div className="row mb-3">
          <div className="col col-6 flex-column">
            <div className="input-group mb-3">
              <div className="input-group-prepend w-100">
                <span className="input-group-text w-35">
                  <FontAwesomeIcon icon={faAddressCard} className="mr-1" />Name
                </span>
                <input
                  className="form-control"
                  type="text"
                  value={details.name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="input-group-prepend w-100">
              <span className="input-group-text w-35">
                <FontAwesomeIcon icon={faFileAlt} className="mr-1" />Description
              </span>
              <textarea
                className="form-control resize-none"
                rows="5"
                value={details.description}
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="col col-6">
            <div className="container border h-100 pt-2">
              <div className="row">
                <div className="col">
                  <h4><FontAwesomeIcon icon={faSave} className="mr-2" />Save for later use</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-primary mr-2 btn-block"
                    onClick={handleSaveHarvest}
                  >
                    <FontAwesomeIcon icon={faSave} /> Save everything
                  </button>
                </div>
              </div>
              <div className="">

              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xs-8 col-sm-6 col-md-4">
            <button
              className="btn btn-primary btn-block mt-2"
              onClick={handleLaunchSearch}
            >
              <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />Launch harvest
            </button>
          </div>
        </div>

        <CSSTransition
          in={visible}
          timeout={2500}
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
  harvest: state.harvest
});

const mapDispatchToProps = dispatch => ({
  setDetailsField: (newState) => dispatch(setDetailsField(newState)),
  setHarvestProgressModalField: (newState) => dispatch(setHarvestProgressModalField(newState)),
  setSearchResults: (searchResults) => dispatch(setSearchResults(searchResults)),
  setResultsPageField: (newState) => dispatch(setResultsPageField(newState)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchSummary));
