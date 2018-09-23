import React from 'react';
import Loadable from 'react-loadable';

import Header from './components/Header/Header';
import CardSection from './routes/Home/CardArticles/CardSection';

export const loading = () => (
  <div flex="grow" align="center center" className="fill row">
    <h3><b className="pulse">Loading...</b></h3>
  </div>
);

export const Home = () => (
  <main id="Home">
    <Header />
    <CardSection />
  </main>
);

export const Cases = Loadable({
  loader: () => import('./routes/Cases/Cases'),
  loading,
});

export const Works = Loadable({
  loader: () => import('./routes/works/Works'),
  loading,
});

export default {
  loading, Home, Cases, Works,
};
