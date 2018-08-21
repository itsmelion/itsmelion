import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import texts from './Topbar.i18n';
import './Topbar.scss';
import resumePDF from '../../routes/Resume/resume.pdf';
import logo from './logo.svg';

class Topbar extends PureComponent {
  constructor(props) {
    super(props);
    this.lang = localStorage.getItem('lang');
  }

  render() {
    return (
      <nav id="topbar">
        <div className="contain row nowrap" align="between center">
          <ul className="hide-mobile" flex="" />

          <li id="nav-logo" flex="none" className="row nowrap" align="start end">
            <img src={logo} alt="ALIA Logo" />
            <span style={{ marginLeft: '-10px' }} className="beta-tag">
              beta
            </span>
          </li>

          <ul className="row nowrap tabs" flex="" align="end">
            <li>
              <NavLink to="/cases">
                {texts.cases[this.lang]}
              </NavLink>
            </li>

            <li>
              <a target="_blank" rel="noopener noreferrer" href={resumePDF}>
                {texts.resume[this.lang]}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Topbar;
