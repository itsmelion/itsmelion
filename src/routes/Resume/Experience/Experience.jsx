import React from 'react';
import AsyncImage from 'components/AsyncImage/AsyncImage';
import './Experience.scss';
import i18n from './Experience.i18n';

const Business = React.memo(({ exp }) => (
  <div className="business">
    <AsyncImage
      flex="none"
      className="contain-fit hide-print block"
      path={exp.logo}
      alt={exp.name}
    />

    <h6 className="inline">
      {exp.name}
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
    </h6>

    <a className="block link" href={`//${exp.ref}`}>
      {exp.ref}
    </a>

    <p>{exp.business}</p>
  </div>
));

const Archievements = React.memo(({ archievements }) => (
  <ol className="archievements">
    <h6>Achievements</h6>
    {archievements.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ol>
));

const Experience = React.memo(({ print, exp }) => (
  <article className={`Experience ${print ? 'print' : ''}`}>
    <div row="nowrap">
      <Business exp={exp} />
    </div>
    <div className="role">
      <h6>{exp.position}</h6>

      <p>
        {i18n.tasks[window.lang]}: {exp.description[window.lang]}
      </p>
    </div>

    {exp.archievements && <Archievements archievements={exp.archievements} />}

    <p className="row technologies">
      {exp.technologies.map(({ name: tech }) => (
        <span key={tech}>{tech}</span>
      ))}
    </p>

    {exp.contractors && <h6 className="mb1">Main contractors:</h6>}

    {exp.contractors &&
      exp.contractors.map(contractor => (
        <section key={contractor.ref} className="pv1 ph2 contractor">
          <Business exp={contractor} />

          <div>
            <h6 className="inline">Business: </h6>
            <p className="inline">{contractor.business}</p>
          </div>

          <div>
            <h6 className="inline">Responsibilities: </h6>
            <p className="inline">{contractor.description[window.lang]}</p>
          </div>

          {contractor.archievements && (
            <Archievements archievements={contractor.archievements} />
          )}
        </section>
      ))}

    <hr />
  </article>
));

export default Experience;
