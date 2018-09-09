import React from 'react';
import './Experience.scss';
import experiences from '../../../data/experiences';

require.context('../../../images/brands', true);

const Experience = () => (
  <ol id="Experience">
    {experiences.map(job => (
      <li row="" align="start start" key={job.name}>
        <div flex="auto">
          <h5>{job.position}</h5>
          <p>{job.description[window.lang]}</p>
          <p className="row technologies">
            {job.technology.map(technology => <span key={technology}>{technology}</span>)}
          </p>
        </div>

        <div flex="auto" row="" align="end">
          <div className="right" flex="initial">
            <h6>{job.name}</h6>
            <p><a href={`//${job.ref}`}>{job.ref}</a></p>

            <p>
              <small>
                <span>{job.period.start.month[window.lang]} {job.period.start.year}</span>
                <span>{job.period.end.month[window.lang]} {job.period.end.year}</span>
              </small>
            </p>
          </div>

          <img
            hide-print=""
            className="contain-fit"
            flex="none"
            src={job.logo}
            alt={job.name}
          />
        </div>
      </li>
    ))}
  </ol>
);

export default Experience;
