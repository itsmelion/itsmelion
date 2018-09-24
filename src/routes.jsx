import React from 'react';

import Header from './components/Header/Header';
import CardSection from './routes/Home/CardArticles/CardSection';

export const Home = () => (
  <main id="Home">
    <Header />
    <CardSection />
  </main>
);

/**
  *Example of On-Demand loaded routes
  @description Import loading component
  import Loadable from 'react-loadable';

  @description Loading component
  export const loading = () => (
    <div flex="grow" align="center center" className="fill row">
      <h3><b className="pulse">Loading...</b></h3>
    </div>
  );

  @description The component/route to be loaded
  export const Cases = Loadable({
    loader: () => import('./routes/Cases/Cases'),
    loading,
  });
*/

export default {
  Home,
};
