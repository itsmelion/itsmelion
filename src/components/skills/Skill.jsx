import React from 'react';

const Skill = ({ skill }) => {
  const icon = <i className={skill.icon} />;
  const image = <img flex="none" width="36" alt={skill.name} src={skill.image} />;

  return (
    <li row="" align="start center" title={skill.description}>
      <span className="icon">{skill.icon ? icon : image }</span>
      <h6>{skill.name}</h6>
    </li>
  );
};

export default Skill;
