import React from 'react';
import { connect } from 'react-redux';

// Actions.
import { setResultsTooltip } from '../../actions/ResultsTooltip';

// Components.
import ResultsEntryList from './ResultsEntryList';


class ResultsField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lockedVisible: false };
  }


  handleMouseOverDetailsButton = (e) => {
    const {
      props: {
        name,
        resultsTooltip: { lockedVisible },
        setResultsTooltip,
        entries
      }
    } = this;

    // If a tooltip is locked, don't.
    if (lockedVisible) {
      return;
    }

    const buttonBoundingRect = e.target.getBoundingClientRect();

    setResultsTooltip({
      name,
      entries,
      posX: buttonBoundingRect.left,
      posY: buttonBoundingRect.top,
      hoverVisible: true
    });
  };

  handleMouseOutDetailsButton = () => {
    this.props.setResultsTooltip({hoverVisible: false});
  }

  handleClickDetailsButton = () => {
    const {
      setResultsTooltip,
      resultsTooltip: { lockedVisible }
    } = this.props;

    // If another tooltip is locked, don't.
    if (lockedVisible && !this.state.lockedVisible) {
      return;
    }

    this.setState({lockedVisible: !this.state.lockedVisible});
    setResultsTooltip({lockedVisible: !lockedVisible});
  }


  render() {
    const {
      handleClickDetailsButton,
      handleMouseOutDetailsButton,
      handleMouseOverDetailsButton,
      props: { config, entries },
      state: { lockedVisible }
    } = this;

    return (
      <>
        <td
          className={`border td-normal`}
        >
          <div className="results-field">
            <ResultsEntryList entries={entries} limit={config.shortTableResultsElementsToShow} />
            {
              entries[0].value.length > config.shortTableResultsElementsToShow && (
                <button
                  className={`btn btn-tooltip ${lockedVisible ? 'btn-primary' : 'btn-dark'}`}
                  onMouseOver={handleMouseOverDetailsButton}
                  onMouseOut={handleMouseOutDetailsButton}
                  onClick={handleClickDetailsButton}
                >
                  +
                </button>
              )
            }
          </div>
        </td>
      </>
    );
  }
}

//
// Redux mapping functions.
//
const mapStateToProps = (state) => ({
  config: state.config,
  resultsTooltip: state.ui.resultsPage.resultsTooltip
});

const mapDispatchToProps = dispatch => ({
  setResultsTooltip: (newState) => dispatch(setResultsTooltip(newState))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsField);
