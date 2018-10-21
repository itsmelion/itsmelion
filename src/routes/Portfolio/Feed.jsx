import React from 'react';
import Work from './Work/Work';
import portfolio from '../../data/portfolio';

const Feed = () => (
  <main contain="" flex="" id="Portfolio-feed">
    <header className="mv2">
      <h2 className="mt2">
        Showcase
        <span style={{ marginLeft: '-5px' }} className="beta-tag">
          beta
        </span>
      </h2>
    </header>

    <section row="">
      {portfolio.map(work => <Work work={work} />)}
    </section>

    <section className="alert-info p1 mv1">
      <h3>Notice:</h3>
      <p>
        this section is under development, and there is more content to be submitted.
        <br />
        Check back in a while.
      </p>
    </section>
  </main>
);

export default Feed;
