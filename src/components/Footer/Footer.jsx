import React from 'react';
import { lang } from 'utils';
import { social, lastName } from 'data/hero';
import logo from 'images/logo.png';

import PoweredBy from './PoweredBy';
import './Footer.scss';

const Footer = React.memo(() => (
  <footer id="Footer" hide-print="">
    <div className="contain row mobile-column footer" align="between stretch">
      <aside className="footer-alia">
        <img width="28" src={logo} alt="Logo Alia" />

        <p>
          Alia is a brand that represents Christhopher Lion as a Individual
          Entrepreneur
        </p>

        <a className="link" href="//instagram.com/go.alia">
          @go.alia
        </a>
      </aside>

      <article className="footer-hero">
        <h6>Connect with {lang(lastName)}</h6>
        <ul
          className="column mobile-row"
          align="start end"
          mobile-align="around center"
        >
          {Object.keys(social).map(key => (
            <a className="link" key={key} href={social[key].url}>
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
