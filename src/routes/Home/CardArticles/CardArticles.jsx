import React from 'react';
import { Link } from 'react-router-dom';
import { lang } from 'utils';
import cards from './CardArticles.i18n';
import './CardArticles.scss';

const CardArticles = React.memo(() => cards.map((card) => (
  <article
    key={card.path}
    className={`column CardArticles ${card.disabled ? 'disabled' : ''}`}
    flex="30"
    mobile-flex="auto">
    <Link align="around center" className="column" flex="" to={card.path}>
      <div className="center">
        <img alt={lang(card.title)} flex="none" src={card.icon} />
        <h4>{lang(card.title)}</h4>
      </div>

      <p>{lang(card.description)}</p>
    </Link>
  </article>
)));

export default CardArticles;
