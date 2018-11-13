import React from 'react';
import Button from '../../../components/Button/Button';
import thumb from './default-thumbnail.svg';
import './Work.scss';

const Work = ({ work }) => (
  <article flex="auto" className="Work">
    <img
      className="cover-fit"
      src={work.thumbnail || thumb}
      alt="Work Preview"
    />

    <div className="p1">
      <h4>{work.title}</h4>
      <p>{work.description}</p>

      <Button theme="outline mt1" link={work.ref}>
        View Project
      </Button>
    </div>
  </article>
);

export default Work;
