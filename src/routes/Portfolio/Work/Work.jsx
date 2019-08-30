import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '../../../components/Button/Button';
import thumb from './default-thumbnail.svg';
import './Work.scss';
import AsyncImage from '../../../components/AsyncImage/AsyncImage';

const Work = React.memo(({ work }) => (
  <article flex="auto" className="column Work">
    {work.thumbnail && (
      <AsyncImage
        className="cover-fit thumbnail"
        path={work.thumbnail || thumb}
      />
    )}

    {work.logo && (
      <AsyncImage className="contain-fit logo" path={work.logo} alt="logo" />
    )}

    <div flex="" className="legend column p1" align="between">
      <div>
        <h4>{work.title}</h4>
        <p>{work.description}</p>

        <ul className="row tags">
          {work.tags && work.tags.map((tag) => <li key={tag}>#{tag}</li>)}
        </ul>
      </div>

      <div row="nowrap" align="between">
        <Button theme="outline mt1" link={work.ref}>
          View Project
        </Button>

        {work.source && (
          <Button theme="outline mt1" link={work.source}>
            <FontAwesomeIcon icon={faGithub} />
            Inspect source
          </Button>
        )}
      </div>
    </div>
  </article>
));

export default Work;
