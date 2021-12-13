import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contact } from 'data/hero';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { lang } from 'utils';
import Hex from '../Hex/Hex';
import logo from './logo.svg';
import texts from './Topbar.i18n';
import './Topbar.scss';

class Topbar extends PureComponent {
  state = {
    collapsed: false,
  };

  closeMenu = () => this.setState({ collapsed: false });

  toggle = () => this.setState(({ collapsed }) => ({
    collapsed: !collapsed,
  }));

  render() {
    const { collapsed } = this.state;
    const collapse = collapsed ? 'opened' : 'closed';

    return (
      <nav className={collapse} hide-print="" id="topbar">
        <div align="between center" className="contain row nowrap">
          <NavLink
            align="start end"
            className="row nowrap above-left"
            flex="none"
            id="nav-logo"
            onClick={this.closeMenu}
            to="/">
            <Hex>
              <img alt="Alia logo" src={logo} />
            </Hex>

            <span className="beta-tag">beta</span>
          </NavLink>

          <button
            className="show-mobile above-right"
            flex="none"
            id="nav-toggle"
            onClick={this.toggle}
            type="button">
            <FontAwesomeIcon className="icon-closed" icon={faTimes} />
            <FontAwesomeIcon className="icon-menu" icon={faBars} />
          </button>

          <ul align="end" className={`tabs ${collapse}`} flex="">
            <NavLink onClick={this.closeMenu} to="/portfolio">
              {lang(texts.portfolio)}
            </NavLink>

            <NavLink onClick={this.closeMenu} to="/resume">
              {lang(texts.resume)}
            </NavLink>

            <a className="default-to-action" href={contact.agenda}>
              {lang(texts.book)}
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Topbar;
