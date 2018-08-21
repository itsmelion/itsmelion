import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faInstagram, faLinkedin, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import holoDefault from './holo-sillhouete.svg';
import holoPlatform from './holo-base.svg';

import Button from '../Button/Button';
import './Header.scss';

const Header = () => (
  <header className="contain row nowrap mobile-wrap" align="between center" id="home-header">
    <div flex="auto">
      <article className="bio">
        <h6 className="dalaran">Hero:</h6>
        <h2>Christhopher Lion</h2>

        <h6 className="dalaran">Bio:</h6>
        <p>
          Im a <b>Developer <i>(also Designer)</i></b>
          , looking for a environment of growth and innovation.
          My specialty is Frontend, and im a performance freak, and UI Lover.
        </p>

        <h4>
          Welcome to my portifolio experience
          <span className="beta-tag">beta</span>
        </h4>
      </article>

      <div row="">
        <Button mobile-flex="auto" link="//instagram.com/chris.lion" newtab _style="instagram social">
          <FontAwesomeIcon icon={faInstagram} />
          <p>
            <span>Instagram</span>
            <sub className="social-tag">@chris.lion</sub>
          </p>
        </Button>

        <Button mobile-flex="auto" link="//facebook.com/christhopherleao" newtab _style="facebook">
          <FontAwesomeIcon icon={faFacebook} />
          <p><span>Facebook</span></p>
        </Button>

        <Button mobile-flex="auto" link="//linkedin.com/in/chrislion" newtab _style="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          <p><span>LinkedIn</span></p>
        </Button>

        <Button mobile-flex="auto" link="//github.com/itsmelion" newtab _style="github social">
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
