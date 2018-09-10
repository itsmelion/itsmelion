import React from 'react';
import './HeroFrame.scss';

const HeroFrame = ({ picture }) => (
  <article className="HeroFrame">
    <div className="hud">
      Lorem ipsum dolor sit amet consectetur,
      <br />
      adipisicing elit. Velit laudantium dolore
      <br />
      sunt harum odit amet alias labore? Explicabo fugiat dicta saepe ipsum earum quis
      hic?
    </div>

    <div className="avatar hex">
      <img className="cover-fit hex" src={picture} alt="hero" />
    </div>
  </article>
);

export default HeroFrame;
