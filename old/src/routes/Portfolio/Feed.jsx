import portfolio from 'data/portfolio';
import React from 'react';
import Work from './Work/Work';

const Feed = () => (
  <main contain="" flex="" id="Portfolio-feed">
    <header className="mv2 p1">
      <h2 className="mt2">Showcase</h2>
    </header>

    <section row="">
      {portfolio.map((work) => (
        <Work key={work.ref} work={work} />
      ))}
    </section>
  </main>
);

export default Feed;
