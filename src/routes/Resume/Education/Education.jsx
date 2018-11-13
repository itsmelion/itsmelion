import React from 'react';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';
import './Education.scss';
import { scholarity } from '../../../data/education';

const Education = () => (
  <ol id="Education" className="mb2">
    {scholarity.map(school => (
      <li
        row="nowrap"
        className="resume-section"
        align="start"
        key={school.institution}
      >
        <h5>{school.course[window.lang]}</h5>

        <span flex="" />

        <div row="nowrap" align="end center">
          <div className="right">
            <h6 column="">
              {school.institution}
              <sub>{school.initials && `(${school.initials})`}</sub>
            </h6>

            <p className="hide-mobile">{school.alternativeName}</p>
          </div>

          <AsyncImage
            className="hide-mobile contain-fit"
            flex="none"
            path={school.logo}
            alt={`Logo ${school.institution}`}
          />
        </div>
      </li>
    ))}
  </ol>
);

export default Education;
