import React from 'react';

import { CSSTransition } from 'react-transition-group';

// Utils.
import { rem2px } from '../../utils/utils';


class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.tooltipRef = React.createRef();
    this.state = {visible: false, style: {left: 0, top: 0}};
  }


  show(parentRect) {
    const style = this.calculateTooltipPosition(parentRect);

    this.setState({visible: true, style});
  }

  hide() {
    this.setState({visible: false});
  }

  calculateTooltipPosition = (parentRect) => {
    const { props: { margin }, tooltipRef } = this;

    const tooltipHeight = tooltipRef.current ? tooltipRef.current.offsetHeight : 0;
    const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 0;

    // Is tooltip placed starting on the left or right / top or bottom of parent?
    let placementX = 'left';
    let placementY = 'top';

    // Initial X pos.
    let left;
    if (window.innerWidth / 2 > parentRect.left) {
      left = parentRect.left;
    } else {
      left = parentRect.right - tooltipWidth;
      placementX = 'right';
    }

    // Initial Y pos.
    let top;
    if (window.innerHeight / 2 > parentRect.top) {
      top = parentRect.bottom;
    } else {
      top = parentRect.top - tooltipHeight;
      placementY = 'bottom';
    }

    // Add margin if specified.
    if (margin) {
      left += placementX === 'left' ? rem2px(margin) : -rem2px(margin);
      top += placementY === 'top' ? rem2px(margin) : -rem2px(margin);
    }

    return {left, top};
  };


  render() {
    const {
      props: { children },
      state: { visible, style }
    } = this;

    return (
      <CSSTransition
        classNames="results-tooltip"
        in={visible}
        timeout={250}
      >
        <div
          className="tooltip-box"
          ref={this.tooltipRef}
          style={style}
        >
          {children}
        </div>
      </CSSTransition>
    );
  }
}


export default Tooltip;
