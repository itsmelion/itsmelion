import React from 'react';
import { social, lastName } from 'data/hero';
import logo from 'images/logo.png';
import { lang } from 'utils';

import './Footer.scss';

const Footer = React.memo(() => (
  <footer hide-print="" id="Footer">
    <div align="between stretch" className="contain row mobile-column footer">
      <aside className="footer-alia">
        <img alt="Logo Alia" src={logo} width="28" />
      </aside>

      <article className="footer-hero">
        <h6>
          Connect with&nbsp;
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
  </footer>
));

export default Footer;
