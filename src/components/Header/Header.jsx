import React from 'react';
import HeroFrame from '../HeroFrame/HeroFrame';
import holoDefault from './holo-sillhouete.svg';
import holoPlatform from './holo-base.svg';
import { bio, picture, name } from '../../data/hero';

import './Header.scss';

const Header = () => (
  <header
    className="contain row nowrap mobile-wrap"
    align="between center"
    id="home-header"
  >
    <div className="column" align="start start" flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>{name[window.lang]}</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>{bio[window.lang]}</p>
      </article>

      <HeroFrame picture={picture.avatar} />
    </div>

    <div flex="initial">
      <img src={holoDefault} alt="Hero holographic silhouette" />
      <img src={holoPlatform} alt="Hero hologram platform" />
    </div>
  </header>
);

export default Header;
