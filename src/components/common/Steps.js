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
        isCurrent: index + 1 === currentStep
      })
    );

    const currentChildren = preparedChildren[currentStep - 1];

    const isDisabled = !currentChildren.props.isOptional && !currentChildren.props.isCorrect;
    const isOptional = currentChildren.props.isOptional;

    return (
      <div className="row mt-3">
        <div className="col col-xs-12 col-sm-2 col-lg-2">
          <CSSTransition
            in={currentStep !== 1}
            timeout={250}
            classNames='step-button'
            unmountOnExit
          >
            <button
              className="btn btn-primary btn-block step-button"
              onClick={handlePrevClick}
            >
              <p className="mb-0"><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" /></p>
                Go back
            </button>
          </CSSTransition>
        </div>

        <div className="col col-xs-4 col-sm-8 col-lg-8 d-flex">
          {preparedChildren}
        </div>

        <div className="col col-xs-4 col-sm-2 col-lg-2 text-right">
          <CSSTransition
              in={currentStep !== totalSteps}
              timeout={250}
              classNames='step-button'
              unmountOnExit
          >
            <button
              className="btn btn-primary btn-block step-button ml-auto"
              onClick={handleNextClick}
              disabled={isDisabled}
            >

              <p className="mb-0"><FontAwesomeIcon icon={faArrowCircleRight} size="2x" /></p>
              Continue
            </button>
          </CSSTransition>
        </div>
          <div className="col d-flex justify-content-end">
            <CSSTransition
              in={isOptional}
              timeout={500}
              classNames='step-optional-tooltip'
              unmountOnExit
            >
              <p className="border-tooltip bg-tooltip m-2 py-0 px-1">
                This step is optional, you can skip it.
              </p>
            </CSSTransition>
          </div>
      </div>
    );
  }
}


export default Steps;
