import React from 'react';
import HeroFrame from '../HeroFrame/HeroFrame';
import holoDefault from './holo-sillhouete.svg';
import holoPlatform from './holo-base.svg';
import hero from '../../data/hero';

import './Header.scss';

const Header = () => (
  <header
    className="contain row nowrap mobile-wrap"
    align="between center"
    id="home-header"
  >
    <div className="ph10" flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>{hero.name[window.lang]}</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>{hero.bio[window.lang]}</p>
        <br />
        <h4>
          Welcome to my portifolio experience
          <span className="beta-tag">beta</span>
        </h4>
      </article>

      <HeroFrame picture={hero.picture.avatar} />
    </div>

    <div flex="initial">
      <img src={holoDefault} alt="Hero holographic silhouette" />
      <img src={holoPlatform} alt="Hero hologram platform" />
    </div>
  </header>
);

export default Header;
