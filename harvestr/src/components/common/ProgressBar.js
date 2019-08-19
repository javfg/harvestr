import React from 'react';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { currentProgress, showLabel } = this.props;

    return(
      <div className="progressbar">
        <div className="progressbar-fill" style={{width: `${currentProgress * 3}px`}}></div>
        {showLabel && <small className="progressbar-label">{currentProgress}%</small>}
      </div>
    );
  }
}


export default ProgressBar;
