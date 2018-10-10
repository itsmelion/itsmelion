import React from 'react';
import './Education.scss';
import { scholarity } from '../../../data/education';

const Education = () => (
  <ol id="Education" className="resume-section">
    {scholarity.map(school => (
      <li
        row=""
        align="start center"
        mobile-column=""
        key={school.institution}
      >
        <div>
          <h5>{school.course[window.lang]}</h5>
        </div>

        <span flex="" className="hide-mobile" />

        <div row="" align="end center" nowrap="">
          <div className="right">
            <h6>
              {school.institution}
              <sub>{school.initials && `(${school.initials})`}</sub>
            </h6>

            <p className="hide-mobile">{school.alternativeName}</p>
          </div>
          <img
            hide-print=""
            className="contain-fit"
            flex="none"
            src={school.logo}
            alt={`Logo ${school.institution}`}
          />
        </div>
      </li>
    ))}
  </ol>
);


export default Education;
