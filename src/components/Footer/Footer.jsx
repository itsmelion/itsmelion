import React from 'react';
import logo from '../../images/logo.png';
import { social } from '../../data/hero';

const Footer = () => (
  <section hide-print="" contain="" className="p1">
    <h2 className="mv2">Lets talk</h2>

    <footer row="" mobile-column="" align="between stretch">
      <aside>
        <img
          width="24"
          src={logo}
          alt="Logo Alia"
          title="Alia is a brand who represents Christhopher Lion"
        />
        <a href="//instagram.com/go.alia">@go.alia <span className="pulse">_</span></a>
      </aside>

      <article>
        <h6>Hero useful links</h6>
        <ul column="" align="start end">
          {Object.keys(social).map(key => (
            <a key={key} href={social[key].url}>{social[key].name}</a>
          ))}
        </ul>
      </article>
    </footer>
  </section>
);

export default Footer;
