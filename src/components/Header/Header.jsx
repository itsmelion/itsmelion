import React from 'react';
import { bio, picture, name } from '../../data/hero';
import AsyncImage from '../AsyncImage/AsyncImage';
import HeroFrame from '../HeroFrame/HeroFrame';
import holoPlatform from './holo-base.svg';
import holoDefault from './holo-sillhouete.svg';
import { lang } from 'utils';

import './Header.scss';

const Header = React.memo(() => (
  <header
    align="between center"
    className="contain row nowrap mobile-wrap"
    id="home-header">
    <div align="start start" className="column" flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>{lang(name)}</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>{lang(bio)}</p>
      </article>

      <HeroFrame picture={picture.thumbnail || picture.avatar} />
    </div>

    <div align="center" className="column flex-initial Hologram">
      <AsyncImage
        alt="Hero holographic silhouette"
        className="hero-hologram"
        path={picture.body || holoDefault}
      />
      <img
        alt="Hero hologram platform"
        className="hologram-platform"
        src={holoPlatform}
      />
    </div>
  </header>
));

export default Header;
