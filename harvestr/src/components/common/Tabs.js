import React from 'react';


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

    return (
      <ul className="nav nav-tabs card-header-tabs">
        {preparedChildren}
      </ul>
    );
  }
}


export default Tabs;
