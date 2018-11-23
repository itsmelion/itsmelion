import React from 'react';
import AsyncImage from 'components/AsyncImage/AsyncImage';
import './Experience.scss';
import i18n from './Experience.i18n';

const Archievements = React.memo(({ archievements }) => (
  <ol className="p1 archievements">
    <h6>Archievements</h6>
    {archievements.map(item => (
      <li>{item}</li>
    ))}
  </ol>
));

const Experience = React.memo(({ print, exp }) => (
  <article className={`Experience ${print ? 'print' : ''}`}>
    <AsyncImage
      className="contain-fit"
      flex="none"
      path={exp.logo}
      alt={exp.name}
    />

    <div row="">
      <div className="header" flex="initial">
        <h6 className="inline">{exp.name}</h6>

        <small>
          <span>(</span>

          <span>
            {exp.period.start.month[window.lang]}
            <b>&nbsp;{exp.period.start.year}</b>
          </span>

          <span>&nbsp;-&nbsp;</span>

          <span>
            {exp.period.end.month[window.lang]}
            <b>&nbsp;{exp.period.end.year}</b>
          </span>

          <span>)</span>
        </small>

        <a className="block link" href={`//${exp.ref}`}>
          {exp.ref}
        </a>

        <h6>
          {i18n.role[window.lang]}: {exp.position}
        </h6>

        <p>
          {i18n.tasks[window.lang]}: {exp.description[window.lang]}
        </p>

        <p className="row technologies">
          {exp.technologies.map(({ name: tech }) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
      </div>
    </div>

    {exp.archievements && <Archievements archievements={exp.archievements} />}
  </article>
));

export default Experience;
