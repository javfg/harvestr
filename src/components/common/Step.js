import React from 'react';


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
      currentStep > stepNumber ? 'border-secondary' :
      currentStep === stepNumber ? 'border-secondary bg-secondary text-light' :
      'text-muted';

    const tailClasses = currentStep < stepNumber + 1 ? 'bg-grey' : 'bg-secondary';

    return (
      <>
        <div className={`d-flex  align-middle align-items-center ${divClasses}`}>
          <div className={`mx-2 step-fixed-width border rounded-circle text-center ${stepClasses}`}>
            {currentStep <= stepNumber && <span>{stepNumber}</span>}
          </div>
          <small className="text-muted w-100">{name}</small>
          {stepNumber < totalSteps && <div className={`mx-2 ${tailClasses} step-tail w-100`}></div>}
        </div>
      </>
    );
  }
}


export default Step;
