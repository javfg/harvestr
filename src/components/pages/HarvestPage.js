import React from 'react';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions
import LoadItemList from './HomePage/LoadItemList';
import LoadSearchProfile from './HomePage/LoadSearchProfile';
import LoadRankingDefinition from './HomePage/LoadRankingDefinition';
import LaunchSearch from './HomePage/LaunchSearch';
import LoadSearchResults from './HomePage/LoadSearchResults';

import PageTitle from '../common/PageTitle';
import Steps from '../common/Steps';
import Step from '../common/Step';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      loadSearchProfileOk: false,
      loadRankingDefinitionOk: false,
      launchSearchOk: false
    }
  }

  handlePrevClick = () => {this.setState({currentStep: this.state.currentStep - 1});};
  handleNextClick = () => {this.setState({currentStep: this.state.currentStep + 1});};


  render() {
    const {
      handleNextClick,
      handlePrevClick,
      state: { currentStep }
    } = this;

    return (
      <div className="container my-4">
        <PageTitle
          icon={faSeedling}
          title="Create a harvest"
          description="To begin creating a harvest, select a CSV file or paste some data."
        />

        <div className="row mb-2">
          <div className="col">
            {(() => {
              switch (currentStep) {
                case 1:
                  return (
                    <div className="p-5 bg-light rounded text-center">
                      STEP 1
                    </div>
                  );

                case 2:
                  return (
                    <div className="p-5 bg-light rounded text-center">
                      STEP 2
                    </div>
                  );

                case 3:
                  return (
                    <div className="p-5 bg-light rounded text-center">
                      STEP 3
                    </div>
                  );
              }
            })()}
          </div>
        </div>

        <Steps
          currentStep={currentStep}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        >
          <Step name="Search profile" isCorrect={this.props.loadSearchProfileOk} />
          <Step name="Ranking definition" isCorrect={this.props.loadRankingDefinitionOk} />
          <Step name="Launch" isCorrect={this.props.launchSearchOk} />
        </Steps>


        {/*<LoadItemList />
        <LoadSearchProfile />
        <LoadRankingDefinition />
        <LaunchSearch />
        <LoadSearchResults />*/}
      </div>
    );
  }
}


export default HarvestPage;
