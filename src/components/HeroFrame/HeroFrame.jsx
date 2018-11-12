import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeroFrame.scss';
import skills from '../../data/skills';
import { social, ocupation } from '../../data/hero';

const HeroFrame = ({ picture }) => (
  <article className="HeroFrame">
    <h6 className="hero-role">{ocupation[window.lang]}</h6>
    <div className="row nowrap hud-decorated">
      <span flex="grow" />
      <span className="decoration" />

      <ul className="row nowrap hero-social" align="start end">
        {Object.keys(social).map(key => (
          <a key={key} href={social[key].url}>
            <FontAwesomeIcon icon={social[key].icon} />
          </a>
        ))}
      </ul>
    </div>

    <div className="hud">
      <div className="skill-bars">
        {skills.bars.map(({ field, ratio }) => (
          <p className={field} key={field} style={{ width: `${ratio}%` }}>
            {field}
          </p>
        ))}
      </div>
    </div>

    <div className="skill-tags">
      <h6>Tags:</h6>
      {skills.tags[window.lang].map(tag => (
        <span key={tag}>{tag}</span>
      ))}
    </div>

    <div className="avatar hex">
      <img className="cover-fit hex" src={picture} alt="hero" />
    </div>
  </article>
);

export default HeroFrame;
