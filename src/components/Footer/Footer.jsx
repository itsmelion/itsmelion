import React from 'react';
import logo from '../../images/logo.png';

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
          <a href="//github.com/itsmelion">GitHub</a>
          <a href="//linkedin.com/in/chrislion">LinkedIn</a>
          <a href="//behance.net/lion_red">Behance</a>
          <a href="//facebook.com/christhopherleao">Facebook</a>
          <a href="//instagram.com/chris.lion">@chris.lion</a>
        </ul>
      </article>
    </footer>
  </section>
);

export default Footer;
