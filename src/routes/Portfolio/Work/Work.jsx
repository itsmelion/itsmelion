import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../../components/Button/Button';
import thumb from './default-thumbnail.svg';
import './Work.scss';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';

const Work = React.memo(({ work }) => (
  <article className="column Work" flex="auto">
    {work.thumbnail && (
      <AsyncImage
        className="cover-fit thumbnail"
        path={work.thumbnail || thumb}
      />
    )}

    {work.logo && (
      <AsyncImage alt="logo" className="contain-fit logo" path={work.logo} />
    )}

    <div align="between" className="legend column p1" flex="">
      <div>
        <h4>{work.title}</h4>
        <p>{work.description}</p>

        <ul className="row tags">
          {work.tags && work.tags.map((tag) => (
            <li key={tag}>
              #
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div align="between" row="nowrap">
        <Button link={work.ref} theme="outline mt1">
          View Project
        </Button>

        {work.source && (
          <Button link={work.source} theme="outline mt1">
            <FontAwesomeIcon icon={faGithub} />
            Inspect source
          </Button>
        )}
      </div>
    </div>
  </article>
));

export default Work;
