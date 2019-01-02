import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { social } from 'data/hero';
import certifications from 'data/certifications';
import Certifications from 'components/Certifications/Certifications';
import Button from 'components/Button/Button';

import Education from './Education/Education';
import Timeline from './Timeline/Timeline';
import SkillList from './Skills/Skill-List';
import Profile from './Profile/Profile';
import './Resume.scss';

const driveURL = 'https://drive.google.com/uc?export=download&id=';
const resume = {
  en: `${driveURL}1ZfczKsFOD5rbYbzSuERyGgVHqbLW46DV`,
  pt: `${driveURL}1Ech4HtSX6ntf3RRr1Q1wLnoAj8MspYdZ`,
};

const Resume = () => (
  <div id="Resume" column="" align="center">
    <main contain="" align="start">
      <Profile />

      <SkillList />

      <section id="Certifications">
        <h4>Certifications</h4>

        <div row="" align="start start">
          {certifications.map(certification => (
            <Certifications key={certification.name} data={certification} />
          ))}
        </div>
      </section>

      <h4>Experience and Contractors</h4>
      <Timeline />

      <h4>Education</h4>
      <Education />

      <footer hide-print="" className="column Resume">
        <div row="">
          <Button link={resume.en} newtab theme="default social">
            <FontAwesomeIcon icon={faFileDownload} />
            Download PDF
          </Button>

          {/*
          <Button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </Button>
          */}

          <Button
            mobile-flex="auto"
            link={social.instagram.url}
            theme="social instagram"
            newtab
          >
            <FontAwesomeIcon icon={social.instagram.icon} />
            <p>
              <span>{social.instagram.name}</span>
              <sub className="social-tag">@{social.instagram.user}</sub>
            </p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.facebook.url}
            theme="social facebook"
            newtab
          >
            <FontAwesomeIcon icon={social.facebook.icon} />
            <p>
              <span>{social.facebook.name}</span>
            </p>
          </Button>

          <Button
            mobile-flex="auto"
            link={social.linkedin.url}
            theme="social linkedin"
            newtab
          >
            <FontAwesomeIcon icon={social.linkedin.icon} />
            <p>
              <span>{social.linkedin.name}</span>
            </p>
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
              <sub className="social-tag">@{social.github.user}</sub>
            </p>
          </Button>
        </div>
      </footer>
    </main>
  </div>
);

export default Resume;
