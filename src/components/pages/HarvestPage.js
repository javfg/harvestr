import React from 'react';

import { faSeedling } from '@fortawesome/free-solid-svg-icons';

// Actions
import LoadItemList from '../harvestpage/LoadItemList';
// import LoadSearchProfile from './homepage/LoadSearchProfile';
// import LoadRankingDefinition from './homepage/LoadRankingDefinition';
// import LaunchSearch from './homepage/LaunchSearch';
// import LoadSearchResults from './homepage/LoadSearchResults';

import PageTitle from '../common/PageTitle';
import Steps from '../common/Steps';
import Step from '../common/Step';


class HarvestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      loadItemListOk: false,
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
                      {/* <LoadSearchProfile /> */}
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
          <Step name="Item list" isCorrect={this.props.loadItemListOk} />
          <Step name="Search profile" isCorrect={this.props.loadSearchProfileOk} />
          <Step name="Ranking definition" isCorrect={this.props.loadRankingDefinitionOk} />
          <Step name="Launch" isCorrect={this.props.launchSearchOk} />
        </Steps>
      </div>
    );
  }
}


export default HarvestPage;
