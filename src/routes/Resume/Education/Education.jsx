import React from 'react';
import AsyncImage from 'components/AsyncImage/AsyncImage';
import { scholarity } from 'data/education';
import { lang } from 'utils';
import './Education.scss';

const Education = React.memo(() => (
  <ol className="mb2" id="Education">
    {scholarity.map((school) => (
      <li
        key={school.institution}
        align="start"
        className="resume-section"
        row="nowrap">
        <h5>{lang(school.course)}</h5>

        <span flex="" />

        <div align="end center" row="nowrap">
          <div className="right">
            <h6 column="">
              {school.institution}
              <sub>{school.initials && `(${school.initials})`}</sub>
            </h6>

            <p className="hide-mobile">{school.alternativeName}</p>
          </div>

          <AsyncImage
            alt={`Logo ${school.institution}`}
            className="hide-mobile contain-fit"
            flex="none"
            path={school.logo}
          />
        </div>
      </li>
    ))}
  </ol>
));

export default Education;
