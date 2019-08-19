import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Step extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      stepNumber,
      currentStep,
      totalSteps,
      name
    } = this.props;

    const divClasses = stepNumber < totalSteps ? 'flex-grow-1' : '';

    const stepClasses =
      currentStep > stepNumber ? 'border-success' :
      currentStep === stepNumber ? 'border-secondary bg-secondary text-light' :
      'text-muted';

    const tailClasses = currentStep < stepNumber + 1 ? 'bg-grey' : 'bg-secondary';

    return (
      <>
        <div className={`d-flex align-middle align-items-center ${divClasses}`}>
          <div className={`mx-2 step-fixed-width border rounded-circle text-center ${stepClasses}`}>
            {currentStep <= stepNumber ?
              <span>{stepNumber}</span> :
              <span className="text-success"><FontAwesomeIcon icon={faCheck} /></span>
            }
          </div>
          <small className="text-muted step-label">{name}</small>
          {stepNumber < totalSteps && <div className={`mx-2 ${tailClasses} step-tail w-100`}></div>}
        </div>
      </>
    );
  }
}


export default Step;
