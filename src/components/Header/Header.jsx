import React from 'react';
import { lang } from 'utils';
import HeroFrame from '../HeroFrame/HeroFrame';
import AsyncImage from '../AsyncImage/AsyncImage';
import holoDefault from './holo-sillhouete.svg';
import holoPlatform from './holo-base.svg';
import { bio, picture, name } from '../../data/hero';

import './Header.scss';

const Header = React.memo(() => (
  <header
    className="contain row nowrap mobile-wrap"
    align="between center"
    id="home-header"
  >
    <div className="column" align="start start" flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>{lang(name)}</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>{lang(bio)}</p>
      </article>

      <HeroFrame picture={picture.thumbnail || picture.avatar} />
    </div>

    <div className="column flex-initial Hologram" align="center">
      <AsyncImage
        className="hero-hologram"
        path={picture.body || holoDefault}
        alt="Hero holographic silhouette"
      />
      <img
        className="hologram-platform"
        src={holoPlatform}
        alt="Hero hologram platform"
      />
    </div>
  </header>
));

export default Header;
