import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../Button/Button';
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

      <div row="">
        <Button
          mobile-flex="auto"
          link="//instagram.com/chris.lion"
          theme="social instagram"
          newtab
        >
          <FontAwesomeIcon icon={faInstagram} />
          <p>
            <span>Instagram</span>
            <sub className="social-tag">@chris.lion</sub>
          </p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//facebook.com/christhopherleao"
          theme="social facebook"
          newtab
        >
          <FontAwesomeIcon icon={faFacebook} />
          <p>
            <span>Facebook</span>
          </p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//linkedin.com/in/chrislion"
          theme="social linkedin"
          newtab
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <p>
            <span>LinkedIn</span>
          </p>
        </Button>

        <Button
          mobile-flex="auto"
          link="//github.com/itsmelion"
          theme="social github"
          newtab
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>
            <span>GitHub</span>
            <sub className="social-tag">@itsmelion</sub>
          </p>
        </Button>
      </div>
    </div>

    <div flex="initial">
      <img src={holoDefault} alt="Hero holographic silhouette" />
      <img src={holoPlatform} alt="Hero hologram platform" />
    </div>
  </header>
);

export default Header;
