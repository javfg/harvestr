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
        harvestPage: {
          currentStep,
          debugHarvestPage,
          loadItemListOk,
          loadSearchProfileOk
        }
      }
    } = this;

    return (
      <div className="container-fluid my-4">
        <PageTitle
          description="Follow the steps below to create a harvest."
          icon={faSeedling}
          size="h1"
          title="Create a harvest"
        />

        <div className="row mb-2">
          <div className="col">
            {(() => {
              switch (currentStep) {
                case 1:
                  return (
                    <div className="p-3 bg-light border">
                      <LoadItemList />
                    </div>
                  );

                case 2:
                  return (
                    <div className="p-3 bg-light border">
                      <LoadSearchProfile />
                    </div>
                  );

                case 3:
                  return (
                    <div className="p-3 bg-light border">
                      <LoadRankingDefinition />
                    </div>
                  );

                case 4:
                  return (
                    <div className="p-3 bg-light border">
                      <SearchSummary />
                    </div>
                  )
              }
            })()}
          </div>
        </div>

        <Steps
          currentStep={currentStep}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        >
          <Step name="Item list" isCorrect={loadItemListOk || debugHarvestPage} />
          <Step name="Search profile" isCorrect={loadSearchProfileOk || debugHarvestPage} />
          <Step name="Ranking definition" isOptional={true}/>
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
  harvestPage: state.ui.harvestPage
});

const mapDispatchToProps = dispatch => ({
  setHarvestPageField: (newState) => dispatch(setHarvestPageField(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);
