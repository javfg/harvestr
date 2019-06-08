import React from 'react';
import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

// Components.
import Badge from '../common/Badge';
import ResultsEntryList from './ResultsEntryList';
import { setResultsTooltip } from '../../actions/ResultsTooltip';

// Utils.
import { successToast } from '../../utils/dialogs';

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
      (window.innerWidth / 2) > resultsTooltip.posX ? resultsTooltip.posX + 14 :
      resultsTooltip.posX - tooltipWidth;

    const tooltipPosY =
      (window.innerHeight / 2) > resultsTooltip.posY ? resultsTooltip.posY + 14 :
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

  handleClickCopyToClipboard = () => {
    const { resultsTooltip } = this.props;

    const cols = resultsTooltip.entries.map(entry => `"${entry.name}"`).join(',');
    const rows = [...Array(resultsTooltip.entries[0].value.length).keys()].map((index) =>
      resultsTooltip.entries.map(entry => `"${entry.value[index]}"`).join(',')
    );

    const textToCopy = `${cols}\r\n${rows.join('\r\n')}`;

    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = textToCopy;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    successToast('Copied to clipboard');
  }

  handleTooltipTransitionExited = () => {
    this.props.setResultsTooltip({posX: 0, posY: 0});
  }


  render() {
    const {
      handleClickCopyToClipboard,
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
            <div className="col col-10 align-self-center text-center px-2 mb-2">
              <Badge name={resultsTooltip.name} type="field" noTooltip />
            </div>
            <div className="col col-2 align-self-right text-right">
              <button
                className="btn btn-sm btn-dark line-height-1"
                title="Copy to clipboard as csv"
                onClick={handleClickCopyToClipboard}
              >
                <FontAwesomeIcon icon={faClipboard} />
              </button>
            </div>
          </div>

          <div className="row no-gutters">
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
  setResultsTooltip: (settings) => dispatch(setResultsTooltip(settings))
})


export default connect(mapStateToProps, mapDispatchToProps)(ResultsTooltip);
