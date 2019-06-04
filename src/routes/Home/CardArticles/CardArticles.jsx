import React from 'react';
import { Link } from 'react-router-dom';
import { lang } from 'utils';
import cards from './CardArticles.i18n';
import './CardArticles.scss';

const CardArticles = React.memo(() => cards.map(card => (
  <article
    key={card.path}
    className={`column CardArticles ${card.disabled ? 'disabled' : ''}`}
    flex="30"
    mobile-flex="auto"
  >
    <Link to={card.path} flex="" className="column" align="around center">
      <div className="center">
        <img flex="none" src={card.icon} alt={lang(card.title)} />
        <h4>{lang(card.title)}</h4>
      </div>

      <p>{lang(card.description)}</p>
    </Link>
  </article>
)));

export default CardArticles;
