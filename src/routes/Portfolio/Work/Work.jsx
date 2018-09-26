import React from 'react';
import Button from '../../../components/Button/Button';
import thumb from './default-thumbnail.svg';
import './Work.scss';

const Work = ({ work }) => (
  <article flex="auto" className="Work">
    <img className="contain-fit" src={work.thumbnail || thumb} alt="Work Preview" />

    <div className="p1">
      <h3>{work.title}</h3>
      <p>{work.description}</p>

      <Button theme="outline" link={work.ref}>View Project</Button>
    </div>
  </article>
);

export default Work;
