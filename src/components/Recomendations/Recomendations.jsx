import React from 'react';
import './Recomendations.scss';
import { lang } from 'utils';
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
    {recomendations.map((recomendation) => (
      <article key={recomendation.name}>
        <h4>{recomendation.name}</h4>
        <p>{lang(recomendation.message)}</p>

        <small>
          {lang(i18n.source)}
          :&nbsp;
          <a href={recomendation.ref} rel="noopener noreferrer" target="_blank">
            {recomendation.ref}
          </a>
        </small>
      </article>
    ))}
  </section>
));

export default Recomendations;
