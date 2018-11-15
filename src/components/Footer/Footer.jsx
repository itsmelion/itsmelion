import React from 'react';
import PoweredBy from './PoweredBy';
// import CallToActions from './CallToActions';
import './Footer.scss';
import logo from '../../images/logo.png';
import { social, lastName } from '../../data/hero';

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
        <h6>Connect with {lastName[window.lang]}</h6>
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
