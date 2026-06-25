import React from 'react';
import CardArticles from './CardArticles';
import mountainSmall from './fel-mountain@0,3x.jpg';
import mountainMedium from './fel-mountain@0,5x.jpg';
import mountainLarge from './fel-mountain@1x.jpg';
import './CardArticles.scss';

const CardSection = React.memo(() => (
  <>
    <div contain="" id="CardSection">
      <section align="around center" mobile-align="start center" row="nowrap">
        <CardArticles />
      </section>
    </div>

    <picture className="cover-fit fel-mountain" style={{ zIndex: 0 }}>
      <source media="(max-width: 50rem)" srcSet={mountainSmall} />
      <source media="(min-width: 50.01rem)" srcSet={mountainLarge} />
      <img alt="Fel Mountain" className="cover-fit" src={mountainMedium} />
    </picture>
  </>
));

export default CardSection;
