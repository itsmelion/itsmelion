import React from 'react';
import skillSet from './skillSet';
import Skill from './Skill';

const Skills = () => (
  <div className="dark-container">
    <section className="contain">
      <h2 className="center mb2">A Full House</h2>
      <ul>{skillSet.design.map(data => <Skill skill={data} key={data.id} />)}</ul>
      <ul>{skillSet.development.map(data => <Skill skill={data} key={data.id} />)}</ul>
    </section>
  </div>
);

export default Skills;
