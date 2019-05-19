import React from 'react';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


class Steps extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {
      children,
      currentStep,
      handleNextClick,
      handlePrevClick
    } = this.props;

    const totalSteps = children.length;

    const preparedChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        stepNumber: index + 1,
        currentStep,
        totalSteps,
        isCorrect: false,
        isCurrent: index + 1 === currentStep
      })
    )

    console.log('children', children);

    return (
      <div className="row">
        <div className="col col-xs-4 col-sm-3 col-md-2">
          <CSSTransition
            in={currentStep !== 1}
            timeout={250}
            classNames='step-button'
            unmountOnExit
          >
            <button
              className="btn btn-primary btn-block"
              onClick={handlePrevClick}
            >
              <p className="mb-0"><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" /></p>
                Go back
            </button>
          </CSSTransition>
        </div>

        <div className="col col-xs-4 col-sm-6 col-md-8 d-flex">
          {preparedChildren}
        </div>

        <div className="col col-xs-4 col-sm-3 col-md-2 text-right">
          <CSSTransition
              in={currentStep !== totalSteps}
              timeout={250}
              classNames='step-button'
              unmountOnExit
          >
            <button
              className="btn btn-primary btn-block"
              onClick={handleNextClick}
            >

              <p className="mb-0"><FontAwesomeIcon icon={faArrowCircleRight} size="2x" /></p>
              Continue
            </button>
          </CSSTransition>
        </div>
      </div>
    );
  }
}


export default Steps;
