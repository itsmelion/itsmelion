import React, { memo } from 'react';
import ReactTooltip from 'react-tooltip';
import { lang } from 'utils';
import { yearsFromNow } from 'utilities';

import Tools, { wishlist } from 'data/tools';
import './Skills.scss';
import SkillIcon from './Skill';

const tooltip = (year, tool) => ({
  en: `${yearsFromNow(year)} years of experience with&nbsp;<b>${tool}</b>`,
  pt: `${yearsFromNow(year)} anos de experiência com&nbsp;<b>${tool}</b>`,
  he: `${yearsFromNow(year)} years of experience with&nbsp;<b>${tool}</b>`,
});

const Skill = ({ name, logo, year }) => (
  <li key={name} data-tip={(year && lang(tooltip(year, name))) || name}>
    <SkillIcon logo={logo} />
    <p
      className="show-print"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: (year && lang(tooltip(year, name))) || name }}
    />
  </li>
);

const SkillList = () => (
  <section className="mv1 row" id="SkillList">
    <ul
      align="center center"
      className="center mv2 row design-list"
      flex="33"
      mobile-flex="100">
      <h6 flex="100">Design</h6>

      {Tools.design.map(Skill)}
    </ul>

    <ul
      align="center center"
      className="center mv2 row frontend-list"
      flex="33"
      mobile-flex="100">
      <h5 flex="100">Frontend</h5>

      {Tools.frontend.map(Skill)}
    </ul>

    <ul
      align="center center"
      className="center mv2 row backend-list"
      flex="33"
      mobile-flex="100">
      <h6 flex="100">Backend/DevOps</h6>

      {Tools.backend.map(Skill)}
    </ul>

    <ul align="center center" className="center row mb2 wish-list" flex="100">
      <h6 flex="100">Wishlist</h6>

      {wishlist.backend.map(Skill)}
    </ul>

    <ReactTooltip effect="solid" html place="bottom" />
  </section>
);

export default memo(SkillList);
