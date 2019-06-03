import React from 'react';
import { connect } from "react-redux";

// Actions.
import { setResultsTooltipSettings } from "../../actions/resultsTooltip";

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
        resultsTooltip: { lockedVisible },
        setResultsTooltipSettings,
        name,
        value
      }
    } = this;

    // If a tooltip is locked, don't.
    if (lockedVisible) {
      return;
    }

    const buttonBoundingRect = e.target.getBoundingClientRect();

    setResultsTooltipSettings({
      name,
      contents: value,
      posX: buttonBoundingRect.left,
      posY: buttonBoundingRect.top,
      hoverVisible: true
    });
  };

  handleMouseOutDetailsButton = () => {
    this.props.setResultsTooltipSettings({hoverVisible: false});
  }

  handleClickDetailsButton = () => {
    const {
      setResultsTooltipSettings,
      resultsTooltip: { lockedVisible }
    } = this.props;

    // If another tooltip is locked, don't.
    if (lockedVisible && !this.state.lockedVisible) {
      return;
    }

    this.setState({lockedVisible: !this.state.lockedVisible});
    setResultsTooltipSettings({lockedVisible: !lockedVisible});
  }



  render() {
    const {
      handleClickDetailsButton,
      handleMouseOutDetailsButton,
      handleMouseOverDetailsButton,
      props: { value },
      state: { lockedVisible }
    } = this;

    return (
      <>
        <td
          className={`border text-break td-normal`}
        >
          <div className="results-field">
            <ResultsEntryList entries={value} limit={2} />
            <button
              className={`btn btn-mini ${lockedVisible ? 'btn-primary' : 'btn-dark'}`}
              onMouseOver={handleMouseOverDetailsButton}
              onMouseOut={handleMouseOutDetailsButton}
              onClick={handleClickDetailsButton}
            >
              +
            </button>
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
  resultsTooltip: state.ui.resultsPage.resultsTooltip
});

const mapDispatchToProps = dispatch => ({
  setResultsTooltipSettings: (settings) => dispatch(setResultsTooltipSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsField);
