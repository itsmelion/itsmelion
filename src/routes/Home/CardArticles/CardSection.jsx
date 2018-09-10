import React from 'react';
import mountainSmall from './fel-mountain@0,3x.jpg';
import mountainMedium from './fel-mountain@0,5x.jpg';
import mountainLarge from './fel-mountain@1x.jpg';
import CardArticles from './CardArticles';
import './CardArticles.scss';

const CardSection = () => (
  <>
    <div id="CardSection" contain="">
      <section row="nowrap" align="around center" mobile-align="start center">
        <CardArticles />
      </section>
    </div>

    <picture style={{ zIndex: 0 }} className="cover-fit fel-mountain">
      <source media="(max-width: 50rem)" srcSet={mountainSmall} />
      <source media="(min-width: 50.01rem)" srcSet={mountainLarge} />
      <img className="cover-fit" src={mountainMedium} alt="Fel Mountain" />
    </picture>
  </>
);

export default CardSection;
