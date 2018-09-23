import React from 'react';
import './Experience.scss';
import experiences from '../../../data/experiences';

require.context('../../../images/brands', true);

const yearsFromNow = (y = 2016, m = 0) => {
  let year = parseInt(y, 10);
  const month = parseInt(m, 10);
  if (month >= 6) { year += 1; }

  return Math.ceil((new Date() - new Date(year, month, 0)) / 1000 / 60 / 60 / 24 / 365);
};

const Experience = () => (
  <ol id="Experience">
    {experiences.map(({
      name, position, description, technologies, ref, period, logo,
    }) => (
      <li row="" align="start start" key={name}>
        <div flex="auto">
          <h5>{position}</h5>
          <p>{description[window.lang]}</p>
          <p className="row technologies">
            {technologies.map(({ name: tech, year }) => (
              <span key={tech} title={`Years of Experience: ${yearsFromNow(year)}`}>
                {tech}
              </span>
            ))}
          </p>
        </div>

        <div flex="auto" row="" align="end">
          <div className="right" flex="initial">
            <h6>{name}</h6>
            <p><a href={`//${ref}`}>{ref}</a></p>

            <p>
              <small>
                <span>{period.start.month[window.lang]} {period.start.year}</span>
                <span>{period.end.month[window.lang]} {period.end.year}</span>
              </small>
            </p>
          </div>

          <img
            hide-print=""
            className="contain-fit"
            flex="none"
            src={logo}
            alt={name}
          />
        </div>
      </li>
    ))}
  </ol>
);

export default Experience;
