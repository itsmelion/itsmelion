import React, { memo } from 'react';
import ReactTooltip from 'react-tooltip';
import { lang } from 'utils';
import { yearsFromNow } from 'utilities';

import Tools, { wishlist } from 'data/tools';
import './Skills.scss';
import Skill from './Skill';

const tooltip = (year, tool) => ({
  en: `${yearsFromNow(year)} years of experience with&nbsp;<b>${tool}</b>`,
  pt: `${yearsFromNow(year)} anos de experiência com&nbsp;<b>${tool}</b>`,
  he: `${yearsFromNow(year)} years of experience with&nbsp;<b>${tool}</b>`,
});

// eslint-disable-next-line react/prop-types
const mapSkill = ({ name, logo, year }) => (
  <li key={name} data-tip={(year && lang(tooltip(year, name))) || name}>
    <Skill logo={logo} />
    {/* eslint-disable-next-line react/no-danger */}
    <p className="show-print" dangerouslySetInnerHTML={{ __html: (year && lang(tooltip(year, name))) || name }} />
  </li>
);

const mapToolset = (dataset, area, func = mapSkill) => dataset[area].map(func);

const SkillList = () => (
  <section className="mv1 row" id="SkillList">
    <ul
      align="center center"
      className="center mv2 row design-list"
      flex="33"
      mobile-flex="100">
      <h6 flex="100">Design</h6>

      {mapToolset(Tools, 'design')}
    </ul>

    <ul
      align="center center"
      className="center mv2 row frontend-list"
      flex="33"
      mobile-flex="100">
      <h5 flex="100">Frontend</h5>

      {mapToolset(Tools, 'frontend')}
    </ul>

    <ul
      align="center center"
      className="center mv2 row backend-list"
      flex="33"
      mobile-flex="100">
      <h6 flex="100">Backend/DevOps</h6>

      {mapToolset(Tools, 'backend')}
    </ul>

    <ul align="center center" className="center row mb2 wish-list" flex="100">
      <h6 flex="100">Wishlist</h6>

      {mapToolset(wishlist, 'backend')}
    </ul>

    <ReactTooltip effect="solid" html place="bottom" />
  </section>
);

export default memo(SkillList);
