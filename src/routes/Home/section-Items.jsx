import React from 'react';
import { Link } from 'react-router-dom';
import worksIcon from './icons8-open_box.png';
import resumeIcon from './icons8-paper.png';
import casesIcon from './icons8-microscope.png';
import './section-Items.scss';

const HomeItems = () => (
  <div className="dark-container landscape-bg">
    <div className="tech-strip">
      <h2 className="center"><b>Find</b> what you need to know</h2>
    </div>

    <div className="contain">
      <section id="home-items" className="row nowrap">
        <Link className="items" to="/works" flex="auto" align="start start">
          <div><img flex="none" src={worksIcon} alt="" /></div>

          <div flex="">
            <h4>My Works</h4>
            <p>
              lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
          </div>
        </Link>

        <Link className="items" to="/cases" flex="auto" align="start start">
          <div><img flex="none" src={casesIcon} alt="" /></div>

          <div flex="">
            <h4>Case Studies</h4>
            <p>
              lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
          </div>
        </Link>

        <Link className="items" to="/resume" flex="auto" align="start start">
          <div><img flex="none" src={resumeIcon} alt="" /></div>

          <div flex="">
            <h4>Resume</h4>
            <p>
              lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            </p>
          </div>
        </Link>
      </section>
    </div>
  </div>
);

export default HomeItems;
