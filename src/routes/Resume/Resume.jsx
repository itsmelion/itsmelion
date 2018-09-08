import React from 'react';
import './Resume.scss';
import Button from '../../components/Button/Button';
import resumePDF from './resume.pdf';
import i18n from './Resume.i18n';
import hero from '../../data/hero';
// import academy from '../../data/academy';
// import experiences from '../../data/experiences';

const Resume = () => (
  <>
    <header hide-print="" contain="" align="start start" className="column Resume">
      <h1>{i18n.resume[window.lang]}</h1>

      <Button
        newtab
        link={resumePDF}
        rel="noopener noreferrer"
      >
        Download PDF
      </Button>
    </header>

    <main contain="" className="Resume">
      <h2>{hero.name[window.lang]}</h2>
      <h3>{hero.ocupation[window.lang]}</h3>

      <address>
        <p>
          {hero.address.city},
          {hero.address.country}
        </p>
        <p><a href={`mailto:${hero.contact.email}`}>{hero.contact.email}</a></p>
        <p><a href={`tel:${hero.contact.phone}`}>{hero.contact.phone}</a></p>
        <p>{hero.contact.skype}</p>
      </address>

      <p>{hero.bio[window.lang]}</p>
    </main>
  </>
);

export default Resume;
