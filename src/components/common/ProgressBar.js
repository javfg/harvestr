import React from 'react';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { currentMessage, currentProgress } = this.props;

    return(
      <div>
        {currentMessage}-{currentProgress}%
      </div>
    );
  }
}


export default ProgressBar;
