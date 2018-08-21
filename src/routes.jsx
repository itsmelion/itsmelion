import React from 'react';
import Loadable from 'react-loadable';

import Header from './components/Header/Header';
import HomeItems from './routes/Home/section-Items';

const loading = () => (
  <div flex="grow" align="center center" className="fill row">
    <h3><b className="pulse">Loading...</b></h3>
  </div>
);

const Home = () => (
  <main>
    <Header />
    <HomeItems />
  </main>
);

const Page = Loadable({
  loader: () => import('./routes/works/MySite'),
  loading,
});

const Cases = Loadable({
  loader: () => import('./routes/Cases/Cases'),
  loading,
});

const Works = Loadable({
  loader: () => import('./routes/works/Works'),
  loading,
});

const Resume = Loadable({
  loader: () => import('./routes/Resume/Resume'),
  loading,
});

export {
  loading, Home, Cases, Works, Page, Resume,
};
