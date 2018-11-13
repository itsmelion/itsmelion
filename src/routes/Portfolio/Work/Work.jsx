import React from 'react';
import Button from '../../../components/Button/Button';
import thumb from './default-thumbnail.svg';
import './Work.scss';

const Work = ({ work }) => (
  <article flex="auto" className="column Work">
    <img
      className="cover-fit"
      src={work.thumbnail || thumb}
      alt="Work Preview"
    />

    <div flex="" className="legend column p1" align="between">
      <div>
        <h4>{work.title}</h4>
        <p>{work.description}</p>
      </div>

      <Button theme="outline mt1" link={work.ref}>
        View Project
      </Button>
    </div>
  </article>
);

export default Work;
