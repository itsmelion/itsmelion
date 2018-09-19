import React from 'react';
import { Link } from 'react-router-dom';
import cards from './CardArticles.i18n';
import './CardArticles.scss';

const CardArticles = () => cards.map(card => (
  <article
    key={card.path}
    className={`column CardArticles ${card.disabled ? 'disabled' : ''}`}
    flex="30"
    mobile-flex="auto"
  >
    <Link
      to={card.path}
      flex=""
      className="column"
      align="around center"
    >
      <div className="center">
        <img flex="none" src={card.icon} alt="" />
        <h4>{card.title[window.lang]}</h4>
      </div>

      <p>{card.description[window.lang]}</p>
    </Link>
  </article>
));

export default CardArticles;
