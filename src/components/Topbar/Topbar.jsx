import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import texts from './Topbar.i18n';
import './Topbar.scss';
import logo from './logo.svg';

class Topbar extends PureComponent {
  constructor(props) {
    super(props);
    this.lang = localStorage.getItem('lang');
  }

  render() {
    return (
      <nav hide-print="" id="topbar">
        <div className="contain row nowrap" align="between center">
          <ul className="hide-mobile" flex="" />

          <NavLink to="/">
            <li id="nav-logo" flex="none" className="row nowrap" align="start end">
              <img src={logo} alt="ALIA Logo" />
              <span style={{ marginLeft: '-10px' }} className="beta-tag">
                beta
              </span>
            </li>
          </NavLink>

          <ul className="row nowrap tabs" flex="" align="end">
            <li>
              <NavLink to="/portfolio">
                {texts.portfolio[this.lang]}
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume">
                {texts.resume[this.lang]}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Topbar;
