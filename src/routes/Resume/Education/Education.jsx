import React from 'react';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';
import './Education.scss';
import { scholarity } from '../../../data/education';


const Education = () => (
  <ol id="Education">
    {scholarity.map(school => (
      <li
        row=""
        className="resume-section"
        align="start center"
        mobile-column=""
        key={school.institution}
      >
        <h5>{school.course[window.lang]}</h5>

        <span flex="" className="hide-mobile" />

        <div row="nowrap" align="end center">
          <div className="right">
            <h6>
              {school.institution}
              <sub>{school.initials && `(${school.initials})`}</sub>
            </h6>

            <p className="hide-mobile">{school.alternativeName}</p>
          </div>

          <AsyncImage
            className="contain-fit"
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
