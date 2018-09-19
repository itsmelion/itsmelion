import React from 'react';
import './HeroFrame.scss';
import skills from '../../data/skills';

const HeroFrame = ({ picture }) => (
  <article className="HeroFrame">
    <div className="hud">

      <div className="skill-bars">
        {skills.bars.map(({ field, ratio }) => (
          <p className={field} key={field} style={{ width: `${ratio}%` }}>{field}</p>
        ))}
      </div>

    </div>

    <div className="skill-tags">
      <h6>Tags:</h6>
      {skills.tags[window.lang].map(tag => <span key={tag}>{tag}</span>)}
    </div>

    <div className="avatar hex">
      <img className="cover-fit hex" src={picture} alt="hero" />
    </div>
  </article>
);

export default HeroFrame;
