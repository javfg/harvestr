import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      children,
      currentTab,
      handleClick
    } = this.props;

    const preparedChildren = React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        currentTab,
        handleClick,
        tabNumber: index
      })
    )

    console.log('children', children);

    return (
      <ul className="nav nav-tabs card-header-tabs">
        {preparedChildren}
      </ul>
    );
  }
}


export default Tabs;
