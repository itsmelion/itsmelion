import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button/Button';
import Certifications from 'components/Certifications/Certifications';
import certifications from 'data/certifications';
import { social } from 'data/hero';

import { lang } from 'utils';
import Education from './Education/Education';
import Profile from './Profile/Profile';
import SkillList from './Skills/Skill-List';
import Timeline from './Timeline/Timeline';
import './Resume.scss';

const driveURL = 'https://drive.google.com/uc?export=download&id=';
const resume = {
  en: `${driveURL}1ZfczKsFOD5rbYbzSuERyGgVHqbLW46DV`,
  pt: `${driveURL}1Ech4HtSX6ntf3RRr1Q1wLnoAj8MspYdZ`,
};

const Resume = () => (
  <div align="center" column="" id="Resume">
    <main align="start" contain="">
      <Profile />

      <SkillList />

      <section id="Certifications">
        <h4>Certifications</h4>

        <div align="start start" row="">
          {certifications.map((certification) => (
            <Certifications key={certification.name} data={certification} />
          ))}
        </div>
      </section>

      <h4>Experience and Contractors</h4>
      <Timeline />

      <h4>Education</h4>
      <Education />

      <footer className="column Resume" hide-print="">
        <div row="">
          <Button link={lang(resume)} newtab theme="default social">
            <FontAwesomeIcon icon={faFilePdf} />
            Download PDF
          </Button>

          {/*
          <Button onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> Print
          </Button>
          */}

          <Button
            link={social.instagram.url}
            mobile-flex="auto"
            newtab
            theme="social instagram">
            <FontAwesomeIcon icon={social.instagram.icon} />
            <p>
              <span>{social.instagram.name}</span>
              <sub className="social-tag">
                @
                {social.instagram.user}
              </sub>
            </p>
          </Button>

          <Button
            link={social.facebook.url}
            mobile-flex="auto"
            newtab
            theme="social facebook">
            <FontAwesomeIcon icon={social.facebook.icon} />
            <p>
              <span>{social.facebook.name}</span>
            </p>
          </Button>

          <Button
            link={social.linkedin.url}
            mobile-flex="auto"
            newtab
            theme="social linkedin">
            <FontAwesomeIcon icon={social.linkedin.icon} />
            <p>
              <span>{social.linkedin.name}</span>
            </p>
          </Button>

          <Button
            link={social.github.url}
            mobile-flex="auto"
            newtab
            theme="social github">
            <FontAwesomeIcon icon={social.github.icon} />
            <p>
              <span>{social.github.name}</span>
              <sub className="social-tag">
                @
                {social.github.user}
              </sub>
            </p>
          </Button>
        </div>
      </footer>
    </main>
  </div>
);

export default Resume;
