import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import './Resume.scss';
import resumePDF from './resume.pdf';
import i18n from './Resume.i18n';
import hero from '../../data/hero';

const Resume = () => (
  <>
    <header hide-print="" contain="" align="start start" className="column Resume">
      <h1>{i18n.resume[window.lang]}</h1>

      <div row="">
        <Button
          newtab
          link={resumePDF}
          theme="default mr1"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFileDownload} />
          Download PDF
        </Button>

        <Button onClick={() => window.print()}>
          <FontAwesomeIcon icon={faPrint} /> Print
        </Button>
      </div>
    </header>

    <main contain="" className="Resume">
      <header row="">
        <div flex="auto">
          <h2>{hero.name[window.lang]}</h2>
          <h3>{hero.ocupation[window.lang]}</h3>
          <p>{hero.bio[window.lang]}</p>
        </div>

        <address flex="auto">
          <p>
            {hero.address.city},
            {hero.address.country}
          </p>
          <p><a href={`mailto:${hero.contact.email}`}>{hero.contact.email}</a></p>
          <p><a href={`tel:${hero.contact.phone}`}>{hero.contact.phone}</a></p>
          <p>Skype: {hero.contact.skype}</p>
        </address>
      </header>

      <hr />
      <h4>Experience</h4>
      <Experience />

      <hr />
      <h4>Education</h4>
      <Education />
    </main>
  </>
);

export default Resume;
