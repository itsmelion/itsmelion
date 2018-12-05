import React from 'react';
import './Recomendations.scss';
// eslint-disable-next-line import/no-unresolved
import recomendations from 'data/recomendations';

const i18n = {
  source: {
    en: 'Source',
    pt: 'Referência',
    he: 'Source',
  },
};

const Recomendations = React.memo(() => (
  <section contain="" id="Recomendations">
    {recomendations.map(recomendation => (
      <article key={recomendation.name}>
        <h4>{recomendation.name}</h4>
        <p>{recomendation.message[window.lang]}</p>

        <small>
          {i18n.source[window.lang]}:&nbsp;
          <a target="_blank" rel="noopener noreferrer" href={recomendation.ref}>
            {recomendation.ref}
          </a>
        </small>
      </article>
    ))}
  </section>
));

export default Recomendations;
