// @ts-nocheck
import AsyncImage from 'components/AsyncImage/AsyncImage';
import { memo } from 'react';
import { lang } from 'utils';

import './Experience.scss';
import i18n from './Experience.i18n';

const Business = memo(({ exp }) => (
  <div className="business">
    <AsyncImage
      alt={exp.name}
      className="contain-fit block"
      flex="none"
      path={exp.logo}
    />

    <h6 className="inline">
      {exp.name}
      <small>
        <span>(</span>

        <span>
          {lang(exp.period.start.month)}
          <b>
            {exp.period.start.year}
          </b>
        </span>

        <span>&nbsp;-&nbsp;</span>

        <span>
          {lang(exp.period.end.month)}
          <b>
            {exp.period.end.year}
          </b>
        </span>

        <span>)</span>
      </small>
    </h6>

    <div className="mb1">
      <a className="link" href={`//${exp.ref}`}>
        {exp.ref}
      </a>
    </div>
  </div>
));

const Archievements = memo(({ archievements }: {
  archievements: string[],
}) => (
  <ol className="mv1 archievements">
    <h6>Achievements</h6>
    {archievements.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ol>
));

export const Experience = ({ print, exp }: ExperienceProps) => (
  <article className={`Experience ${print ? 'print' : ''}`}>
    <div row="nowrap">
      <Business exp={exp} />
    </div>

    <div className="mv1 role">
      <h6>{exp.position}</h6>

      <p>
        {lang(i18n.tasks)}
        :
        {lang(exp.description)}
      </p>
    </div>

    {exp.archievements && <Archievements archievements={exp.archievements} />}

    <p className="row mv1 technologies">
      {exp.technologies.direct.map(({ name: tech }) => (
        <span key={tech}>{tech}</span>
      ))}
    </p>

    {exp.contractors && <h6 className="mb05">Main contractors:</h6>}

    {exp.contractors
      && exp.contractors.map((contractor) => (
        <section key={contractor.ref} className="pv1 ph2 contractor">
          <Business exp={contractor} />

          <div>
            <h6 className="inline">Business: </h6>
            <p className="inline">{contractor.business}</p>
          </div>

          <div>
            <h6 className="inline">Responsibilities: </h6>
            <p className="inline">{lang(contractor.description)}</p>
          </div>

          {contractor.archievements && (
            <Archievements archievements={contractor.archievements} />
          )}

          <h6 className="mt1">Technologies: </h6>
          <div>
            <ul className="row mv05 technologies">
              <b>Actively worked:&nbsp;</b>
              {contractor.technologies.direct.map(({ name: tech }) => (
                <li key={tech}>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>

            {contractor.technologies.indirect && (
              <ul className="row technologies">
                <b>Indirectly worked:&nbsp;</b>
                {contractor.technologies.indirect.map(({ name: tech }) => (
                  <li key={tech}>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

    <hr />
  </article>
);

interface ExperienceProps {
  print?: boolean;
  exp: ExperienceItem,
}

interface ExperienceItem {
  name: string,
  ref: string,
  position: string,
  period: object,
  description: object,
  logo: string,
  archievements: string[],
  technologies: {
    direct: Array<Record<string, string>>,
    indirect: Array<Record<string, string>>,
  },
}

Experience.defaultProps = {
  print: false,
};
