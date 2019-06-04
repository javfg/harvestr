import React from "react";
import { connect } from "react-redux";

import { CSSTransition } from 'react-transition-group';

// Components.
import Field from "../common/Field";
import ResultsEntryList from './ResultsEntryList';
import { setResultsTooltipSettings } from '../../actions/resultsTooltip';


class ResultsTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();

    this.state = {
      style: {
        left: this.props.resultsTooltip.posX,
        top: this.props.resultsTooltip.posY
      }
    }
  }


  componentDidUpdate = () => {
    this.calculateTooltipStyle();
  }


  calculateTooltipStyle = () => {
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

    const style = {
      left: tooltipPosX,
      top: tooltipPosY
    }

    // Update only if coords have changed.
    if (this.state.style.left !== style.left || this.state.style.top !== style.top) {
      this.setState({style});
    }
  };

  handleTooltipTransitionExited = () => {
    this.props.setResultsTooltipSettings({posX: 0, posY: 0});
  }


  render() {
    const {
      handleTooltipTransitionExited,
      props: { resultsTooltip },
      state: { style }
    } = this;

    return (
      <CSSTransition
        classNames="results-tooltip"
        in={resultsTooltip.lockedVisible ? true : resultsTooltip.hoverVisible}
        timeout={250}
        onExited={handleTooltipTransitionExited}
      >
        <div
          className="results-tooltip container-mini"
          style={style}
          ref={this.tooltipRef}
        >

          <div className="row no-gutters">
            <div className="col align-self-center text-center px-2 mb-2">
              <Field name={resultsTooltip.name}/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ResultsEntryList entries={resultsTooltip.entries} />
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}


//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  resultsTooltip: state.ui.resultsPage.resultsTooltip
})

const mapDispatchToProps = (dispatch) => ({
  setResultsTooltipSettings: (settings) => dispatch(setResultsTooltipSettings(settings))
})


export default connect(mapStateToProps, mapDispatchToProps)(ResultsTooltip);
