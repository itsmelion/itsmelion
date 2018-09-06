import React from 'react';
import './Resume.scss';
import resumePDF from './resume.pdf';
import i18n from './Resume.i18n';

const Resume = () => (
  <main>
    <header id="Resume">
      <a className="button" target="_blank" rel="noopener noreferrer" href={resumePDF}>
        <h1>{i18n.resume[window.lang]}</h1>
      </a>
    </header>

    <section>
      <h2>contnet</h2>
    </section>
  </main>
);

export default Resume;
