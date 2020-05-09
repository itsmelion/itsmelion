import React from 'react';
import { lang } from 'utils';
import { social, lastName } from 'data/hero';
import logo from 'images/logo.png';

import PoweredBy from './PoweredBy';
import './Footer.scss';

const Footer = React.memo(() => (
  <footer hide-print="" id="Footer">
    <div align="between stretch" className="contain row mobile-column footer">
      <aside className="footer-alia">
        <img alt="Logo Alia" src={logo} width="28" />

        <p>
          Alia is a brand that represents Christhopher Lion as a Individual
          Entrepreneur
        </p>

        <a className="link" href="//instagram.com/go.alia">
          @go.alia
        </a>
      </aside>

      <article className="footer-hero">
        <h6>
          Connect with
          {lang(lastName)}
        </h6>
        <ul
          align="start end"
          className="column mobile-row"
          mobile-align="around center">
          {Object.keys(social).map((key) => (
            <a key={key} className="link" href={social[key].url}>
              {social[key].name}
            </a>
          ))}
        </ul>
      </article>
    </div>

    <PoweredBy />
  </footer>
));

export default Footer;
