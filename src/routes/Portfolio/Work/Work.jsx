import React from 'react';
import Button from '../../../components/Button/Button';
import './Work.scss';

const Work = ({ work }) => (
  <article flex="auto" className="Work">
    <img className="cover-fit" src={work.icon} alt="Work Preview" />

    <div className="p1">
      <h3>{work.title}</h3>
      <p>{work.description}</p>

      <Button theme="outline" link={work.ref}>View Project</Button>
    </div>
  </article>
);


export default Work;
