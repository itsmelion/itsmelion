import React from 'react';
import PoweredBy from './PoweredBy';
// import CallToActions from './CallToActions';
import './Footer.scss';
import logo from '../../images/logo.png';
import { social, name } from '../../data/hero';

const Footer = () => (
  <>
    {/* <CallToActions /> */}

    <footer id="Footer" hide-print="">
      <div className="contain row mobile-column footer" align="between stretch">
        <aside className="row footer-alia" align="center center">
          <img
            width="24"
            src={logo}
            alt="Logo Alia"
            title="Alia is a brand who represents Christhopher Lion"
          />
          <a href="//instagram.com/go.alia">@go.alia <span className="pulse">_</span></a>
        </aside>

        <article className="footer-hero">
          <h6>Connect with {name[window.lang]}</h6>
          <ul column="" align="start end">
            {Object.keys(social).map(key => (
              <a key={key} href={social[key].url}>{social[key].name}</a>
            ))}
          </ul>
        </article>
      </div>

      <PoweredBy />
    </footer>
  </>
);

export default Footer;
