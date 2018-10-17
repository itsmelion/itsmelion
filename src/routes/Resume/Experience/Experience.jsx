import React from 'react';
import './Experience.scss';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';

const Experience = ({
  experience: {
    name, position, description, technologies, ref, period, logo,
  },
}) => (
  <div className="Experience">
    <div flex="auto">
      <h5>{position}</h5>

      <p>{description[window.lang]}</p>

      <p className="row technologies">
        {technologies.map(({ name: tech }) => <span key={tech}>{tech}</span>)}
      </p>
    </div>

    <div flex="auto" row="" align="end">
      <div className="right" flex="initial">
        <h6>{name}</h6>

        <p><a href={`//${ref}`}>{ref}</a></p>

        <p>
          <small>
            <span>{period.start.month[window.lang]} <b>{period.start.year}</b></span>
            <span>&nbsp;-&nbsp;</span>
            <span>{period.end.month[window.lang]} <b>{period.end.year}</b></span>
          </small>
        </p>
      </div>

      <AsyncImage
        className="contain-fit"
        flex="none"
        path={logo}
        alt={name}
      />
    </div>
  </div>
);

export default Experience;
