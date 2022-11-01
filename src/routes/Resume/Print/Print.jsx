import { scholarity } from 'data/education';
import { experiences } from 'data/experiences';
import * as hero from 'data/hero';
import Tools, { wishlist } from 'data/tools';

import Experience from '../Experience/Experience';
import { lang } from 'utils';
import SkillIcon from '../Skills/Skill';
import Wrapper from './Print.styled';

const Skill = ({ name, ...props }) => (
  <div key={name} align="center center" className="tool center " column="">
    <SkillIcon {...props} />
    <p>{name}</p>
  </div>
);

const Print = () => (
  <Wrapper>
    <header>
      <h1>{lang(hero.name)}</h1>
      <h2>{hero.role}</h2>

      <div className="mv1">
        <p>{`${hero.address.city}, ${hero.address.country}`}</p>
        <p>{hero.contact.email}</p>
        <p>{hero.contact.phone}</p>
        <p>{hero.url}</p>
      </div>
    </header>

    <section row="nowrap">
      <div flex="75">
        <h5>Bio</h5>
        <p className="mb1">{lang(hero.bio)}</p>

        <h5>Strengths</h5>
        <p className="mb1">{lang(hero.text)}</p>

        <h5>In depth: A Lion heart</h5>
        <p className="mb1">{lang(hero.inDepth)}</p>
      </div>

      <aside className="right traits perks" flex="25">
        <h5>Traits</h5>
        <ul>
          <li>#UIUX</li>
          <li>#CommandLine</li>
          <li>#Gamification</li>
          <li>#Performance</li>
          <li>#CuttingEdgeSoftware</li>
          <li>#MicroServices</li>
          <li>#Versatile</li>
          <li>#GoodPractices</li>
          <li>#CleanCode</li>
        </ul>
      </aside>
    </section>

    <hr />

    <section align="between center" className="mv1 row" id="SkillList">
      <ul
        align="center center"
        className="center mv1 ph1 row design-list"
        flex="25"
        mobile-flex="100">
        <h6 flex="100">Design</h6>

        {Tools.design.map(Skill)}
      </ul>

      <ul
        align="center center"
        className="center mv1 ph1 row frontend-list"
        flex="25"
        mobile-flex="100">
        <h5 flex="100">Frontend</h5>

        {Tools.frontend.map(Skill)}
      </ul>

      <ul
        align="center center"
        className="center mv1 ph1 row backend-list"
        flex="25"
        mobile-flex="100">
        <h6 flex="100">Backend/DevOps</h6>

        {Tools.backend.map(Skill)}
      </ul>

      <ul
        align="center center"
        className="center mv1 ph1 row wish-list"
        flex="25"
        mobile-flex="100">
        <h6 flex="100">Wishlist</h6>

        {wishlist.backend.map(Skill)}
      </ul>
    </section>

    <hr style={{ pageBreakAfter: 'always' }} />

    <h4>Education and Certificates</h4>
    <ol className="mb2" id="Education">
      {scholarity.map((school) => (
        <li
          key={school.institution}
          align="start"
          row="nowrap">
          <h5>{lang(school.course)}</h5>
          <p>{school.alternativeName}</p>
        </li>
      ))}
    </ol>

    <h4>Work Experience</h4>

    {experiences.reverse().map((experience) => (
      <Experience key={experience.name} exp={experience} print />
    ))}
  </Wrapper>
);

export default Print;
