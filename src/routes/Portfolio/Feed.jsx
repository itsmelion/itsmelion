import React from 'react';
import Work from './Work/Work';
import portfolio from '../../data/portfolio';

const Feed = () => (
  <main contain="" flex="" id="Portfolio-feed">
    <header className="mv2">
      <h1>
        Showcase
        <span style={{ marginLeft: '-5px' }} className="beta-tag">
          beta
        </span>
      </h1>
    </header>

    <section row="">
      {portfolio.map(work => <Work work={work} />)}
    </section>
  </main>
);

export default Feed;
