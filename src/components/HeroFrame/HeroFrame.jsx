import './HeroFrame.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lang } from 'utils';
import skills from 'data/skills';
import { social, ocupation } from 'data/hero';

const HeroFrame = React.memo(({ picture }) => (
  <article className="HeroFrame">
    <h6 className="hero-role">{lang(ocupation)}</h6>
    <div className="row nowrap hud-decorated">
      <span flex="grow" />
      <span className="decoration" />

      <ul align="start end" className="row nowrap hero-social">
        {Object.keys(social).map((key) => (
          <a key={key} href={social[key].url}>
            <FontAwesomeIcon icon={social[key].icon} />
          </a>
        ))}
      </ul>
    </div>

    <div className="hud">
      <div className="skill-bars">
        {skills.bars.map(({ field, ratio }) => (
          <p key={field} className={field} style={{ width: `${ratio}%` }}>
            {field}
          </p>
        ))}
      </div>
    </div>

    <div className="skill-tags">
      <h6>Tags:</h6>
      {lang(skills.tags).map((tag) => <span key={tag}>{tag}</span>)}
    </div>

    <div className="avatar hex">
      <img alt="hero" className="cover-fit hex" src={picture} />
    </div>
  </article>
));

export default HeroFrame;
