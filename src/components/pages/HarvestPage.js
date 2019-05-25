import React from 'react';
import { connect } from 'react-redux';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions
import LoadItemList from '../harvestpage/LoadItemList';
import LoadSearchProfile from './harvestpage/LoadSearchProfile';
// import LoadRankingDefinition from './homepage/LoadRankingDefinition';
// import LaunchSearch from './homepage/LaunchSearch';
// import LoadSearchResults from './homepage/LoadSearchResults';

import PageTitle from '../common/PageTitle';
import Steps from '../common/Steps';
import Step from '../common/Step';
import { setField } from '../../actions/HarvestPage';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);
  }


  handlePrevClick = () => {
    const { harvestPage: { currentStep }, setField } = this.props;
    setField({currentStep: currentStep - 1});
  };

  handleNextClick = () => {
    const { harvestPage: { currentStep }, setField } = this.props;

    setField({currentStep: currentStep + 1});
  };


  render() {
    const {
      handleNextClick,
      handlePrevClick,
      props: { harvestPage: { currentStep, loadItemListOk, loadSearchProfileOk, loadRankingDefinitionOk } }
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
                    <div className="p-5 bg-light rounded text-center">
                      <LoadSearchProfile />
                    </div>
                  );

                case 3:
                  return (
                    <div className="p-5 bg-light rounded text-center">
                      {/* <LoadRankingDefinition /> */}
                    </div>
                  );

                case 4:
                  return (
                    <div className="p-5 bg-light rounded text-center">
                      {/* <LaunchSearch /> */}
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
          <Step name="Item list" isCorrect={loadItemListOk} />
          <Step name="Search profile" isCorrect={loadSearchProfileOk} />
          <Step name="Ranking definition" isCorrect={loadRankingDefinitionOk} />
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
  setField: (newState) => dispatch(setField(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(HarvestPage);
