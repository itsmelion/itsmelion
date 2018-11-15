import React from 'react';
// eslint-disable-next-line import/no-unresolved
import portfolio from 'data/portfolio';
import Work from './Work/Work';

const Feed = () => (
  <main contain="" flex="" id="Portfolio-feed">
    <header className="mv2 p1">
      <h2 className="mt2">Showcase</h2>

      <section className="alert-info p1 mv1">
        <h3>Notice:</h3>
        <p>
          this section is under development, and there is more content to be
          submitted.
          <br />
          Check back in a while.
        </p>
      </section>
    </header>

    <section row="">
      {portfolio.map(work => (
        <Work key={work.ref} work={work} />
      ))}
    </section>
  </main>
);

export default Feed;
