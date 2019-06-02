import React from "react";
import { connect } from "react-redux";

import { CSSTransition } from 'react-transition-group';

// Components.
import Field from "../common/Field";


class ResultsTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();
  }


  render() {
    const {
      props: { resultsTooltip },
      tooltipRef
    } = this;

    const tooltipHeight = tooltipRef.current ? tooltipRef.current.offsetHeight : 0;
    const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 0;

    const tooltipPosX =
      (window.innerWidth / 2) > resultsTooltip.posX ? resultsTooltip.posX + 20 :
      resultsTooltip.posX - tooltipWidth;

    const tooltipPosY =
      (window.innerHeight / 2) > resultsTooltip.posY ? resultsTooltip.posY + 20 :
      resultsTooltip.posY - tooltipHeight;

    const resultsTooltipStyle = {
      left: tooltipPosX,
      top: tooltipPosY,
    }

    return (
      <CSSTransition
        classNames='results-tooltip'
        in={resultsTooltip.lockedVisible ? true : resultsTooltip.hoverVisible}
        timeout={250}
      >
        <div
          className="results-tooltip"
          style={resultsTooltipStyle}
          ref={this.tooltipRef}
        >

          <div className="row">
            <div className="col align-self-center text-center">
              <Field name={resultsTooltip.name}/>
            </div>
          </div>

          <p className="results-tooltip-text mb-0">
            values: {JSON.stringify(resultsTooltip.contents)}
          </p>
        </div>
      </CSSTransition>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => {
  return { resultsTooltip: state.ui.resultsPage.resultsTooltip };
};


export default connect(mapStateToProps)(ResultsTooltip);
