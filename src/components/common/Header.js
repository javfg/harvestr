import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faListOl,
  faPoll,
  faSearch,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navCollapsed: true
    };
  }


  handleToggleNav = () => {
    this.setState({navCollapsed: !this.state.navCollapsed});
  }

  render() {
    const {
      state: { navCollapsed },
      handleToggleNav
    } = this;

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-secondary shadow-sm">

          <a className="navbar-brand" href="#">
            <h2 className="mt-2">HARVESTR</h2>
          </a>

          <button className="navbar-toggler" type="button" onClick={handleToggleNav}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navCollapsed ? '' : 'show'}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                    <FontAwesomeIcon icon={faHome}/> HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/harvest" className="nav-link" activeClassName="active">
                    <FontAwesomeIcon icon={faSeedling}/> CREATE HARVEST
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/profile" className="nav-link" activeClassName="active">
                    <FontAwesomeIcon icon={faSearch}/> SEARCH PROFILE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/ranking" className="nav-link" activeClassName="active">
                    <FontAwesomeIcon icon={faListOl}/> RANKING
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/results" className="nav-link" activeClassName="active">
                    <FontAwesomeIcon icon={faPoll}/> RESULTS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}


export default Header;
