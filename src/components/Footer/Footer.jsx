import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => (
  <section contain="" className="p1">
    <h2 className="mv2">
      &gt; let MAKE = new Code(together);
      <span className="pulse">_</span>
    </h2>
    <footer row="" flex="" align="between stretch">
      <aside>
        <img width="24" src={logo} alt="Logo Alia" />
        Alia is a brand who represents is Christhopher Lion as a Legal person
        <li>Instagram</li>
      </aside>
      <article>
        <ul>
          <li>GitHub</li>
        </ul>
        <ul>
          <li>Behance</li>
          <li>Invision</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </article>
    </footer>
  </section>
);

export default Footer;
