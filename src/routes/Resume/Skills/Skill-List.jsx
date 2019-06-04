import React from 'react';
import ReactTooltip from 'react-tooltip';
import { lang } from 'utils';
import { yearsFromNow } from 'utilities';

import Tools, { wishlist } from 'data/tools';
import './Skills.scss';
import Skill from './Skill';

const tooltip = (year, tool) => ({
  en: `${yearsFromNow(year)} years of experience with <b>${tool}</b>`,
  pt: `${yearsFromNow(year)} anos de experiência com <b>${tool}</b>`,
  he: `${yearsFromNow(year)} years of experience with <b>${tool}</b>`,
});

const SkillList = React.memo(() => (
  <section id="SkillList" className="mv1 row">
    <ul
      flex="33"
      mobile-flex="100"
      align="center center"
      className="center mv2 row design-list"
    >
      <h6 flex="100">Design</h6>

      {Tools.design.map(({ name, logo, year }) => (
        <li data-tip={lang(tooltip(year, name))} key={name}>
          <Skill logo={logo} />
        </li>
      ))}
    </ul>

    <ul
      flex="33"
      mobile-flex="100"
      align="center center"
      className="center mv2 row frontend-list"
    >
      <h5 flex="100">Frontend</h5>

      {Tools.frontend.map(({ name, logo, year }) => (
        <li data-tip={lang(tooltip(year, name))} key={name}>
          <Skill logo={logo} />
        </li>
      ))}
    </ul>

    <ul
      flex="33"
      mobile-flex="100"
      align="center center"
      className="center mv2 row backend-list"
    >
      <h6 flex="100">Backend/DevOps</h6>

      {Tools.backend.map(({ name, logo, year }) => (
        <li data-tip={lang(tooltip(year, name))} key={name}>
          <Skill logo={logo} />
        </li>
      ))}
    </ul>

    <ul flex="100" className="center row mb2 wish-list" align="center center">
      <h6 flex="100">Wishlist</h6>

      {wishlist.backend.map(({ name, logo }) => (
        <li data-tip={name} key={name}>
          <Skill logo={logo} />
        </li>
      ))}
    </ul>

    <ReactTooltip place="bottom" effect="solid" html />
  </section>
));

export default SkillList;
