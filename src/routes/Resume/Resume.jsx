import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import './Resume.scss';
import resumePDF from './resume.pdf';
import i18n from './Resume.i18n';
import {
  social, contact, address, bio, text, ocupation, name,
} from '../../data/hero';

const Resume = () => (
  <>
    <header hide-print="" contain="" align="start start" className="column Resume">
      <h1>{i18n.resume[window.lang]}</h1>

      <div row="">
        <Button newtab link={resumePDF} theme="default mr1" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileDownload} />
          Download PDF
        </Button>

        <Button onClick={() => window.print()}>
          <FontAwesomeIcon icon={faPrint} /> Print
        </Button>

        <Button
          mobile-flex="auto"
          link={social.instagram.url}
          theme="social instagram"
          newtab
        >
          <FontAwesomeIcon icon={social.instagram.icon} />
          <p>
            <span>{social.instagram.name}</span>
            <sub className="social-tag">
              @{social.instagram.user}
            </sub>
          </p>
        </Button>

        <Button
          mobile-flex="auto"
          link={social.facebook.url}
          theme="social facebook"
          newtab
        >
          <FontAwesomeIcon icon={social.facebook.icon} />
          <p><span>{social.facebook.name}</span></p>
        </Button>

        <Button
          mobile-flex="auto"
          link={social.linkedin.url}
          theme="social linkedin"
          newtab
        >
          <FontAwesomeIcon icon={social.linkedin.icon} />
          <p><span>{social.linkedin.name}</span></p>
        </Button>

        <Button
          mobile-flex="auto"
          link={social.github.url}
          theme="social github"
          newtab
        >
          <FontAwesomeIcon icon={social.github.icon} />
          <p>
            <span>{social.github.name}</span>
            <sub className="social-tag">
              @{social.github.user}
            </sub>
          </p>
        </Button>
      </div>
    </header>

    <main className="contain Resume">
      <header row="">
        <div flex="auto">
          <h2>{name[window.lang]}</h2>
          <h3>{ocupation[window.lang]}</h3>
          <p>{bio[window.lang]}</p>
          <br />
          <p>{text[window.lang]}</p>
        </div>

        <address flex="auto">
          <p>
            {address.city},{address.country}
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </p>
          <p>
            Skype:
            <a href={contact.skype.url}>
              {contact.skype.label}
            </a>
          </p>
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
