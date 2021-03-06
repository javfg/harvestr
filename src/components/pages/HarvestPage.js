import React from 'react';
import { connect } from 'react-redux';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions.
import { setHarvestPageField } from '../../actions/HarvestPage';

// Components.
import LoadItemList from '../harvestpage/LoadItemList';
import LoadSearchProfile from '../harvestpage/LoadSearchProfile';
import LoadRankingDefinition from '../harvestpage/LoadRankingDefinition';
import PageTitle from '../common/PageTitle';
import SearchSummary from '../harvestpage/SearchSummary';
import Steps from '../common/Steps';
import Step from '../common/Step';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);
  }


  handlePrevClick = () => {
    const { harvestPage: { currentStep }, setHarvestPageField } = this.props;
    setHarvestPageField({currentStep: currentStep - 1});
  };

  handleNextClick = () => {
    const { harvestPage: { currentStep }, setHarvestPageField } = this.props;

    setHarvestPageField({currentStep: currentStep + 1});
  };


  render() {
    const {
      handleNextClick,
      handlePrevClick,
      props: {
        itemList,
        harvestPage: {
          currentStep,
        },
        searchProfile
      }
    } = this;

    return (
      <div className="container my-4">
        <PageTitle
          description="Create a harvest by loading a list of items, defining a search profile and,
                       optionally, a ranking definition."
          icon={faSeedling}
          title="Harvest editor"
        />

        <div className="row">
          <div className="col bg-light border mx-3 py-2">
            {(() => {
              switch (currentStep) {
                case 1:
                  return <LoadItemList />
                case 2:
                  return <LoadSearchProfile />
                case 3:
                  return <LoadRankingDefinition />
                case 4:
                  return <SearchSummary />
              }
            })()}
          </div>
        </div>

        <Steps
          currentStep={currentStep}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        >
          <Step name="Item list" isCorrect={itemList.length > 0} />
          <Step name="Search profile" isCorrect={searchProfile.length > 0} />
          <Step name="Ranking definition" isOptional={true} />
          <Step name="Launch" />
        </Steps>
      </div>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = state => ({
  harvestPage: state.ui.harvestPage,
  itemList: state.harvest.itemList,
  searchProfile: state.harvest.searchProfile
});

const mapDispatchToProps = dispatch => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);
