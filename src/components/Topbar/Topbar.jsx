import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { contact } from '../../data/hero';
import texts from './Topbar.i18n';
import logo from './logo.svg';
import Hex from '../Hex/Hex';
import './Topbar.scss';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.lang = localStorage.getItem('lang');
    this.state = {
      collapsed: false,
    };
  }

  closeMenu = () => this.setState({ collapsed: false });

  toggle = () =>
    this.setState(({ collapsed }) => ({
      collapsed: !collapsed,
    }));

  render() {
    const collapse = this.state.collapsed ? 'opened' : 'closed';

    return (
      <nav hide-print="" id="topbar" className={collapse}>
        <div className="contain row nowrap" align="between center">
          <NavLink
            flex="none"
            id="nav-logo"
            onClick={this.closeMenu}
            className="row nowrap above-left"
            align="start end"
            to="/"
          >
            <Hex>
              <img src={logo} alt="Alia logo" />
            </Hex>

            <span className="beta-tag">beta</span>
          </NavLink>

          <button
            type="button"
            onClick={this.toggle}
            className="show-mobile above-right"
            id="nav-toggle"
            flex="none"
          >
            <FontAwesomeIcon className="icon-closed" icon={faTimes} />
            <FontAwesomeIcon className="icon-menu" icon={faBars} />
          </button>

          <ul flex="" align="end" className={`tabs ${collapse}`}>
            <NavLink to="/portfolio" onClick={this.closeMenu}>
              {texts.portfolio[this.lang]}
            </NavLink>

            <NavLink to="/resume" onClick={this.closeMenu}>
              {texts.resume[this.lang]}
            </NavLink>

            <a className="default-to-action" href={contact.agenda}>
              {texts.book[this.lang]}
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Topbar;
