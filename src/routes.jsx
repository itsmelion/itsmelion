import React from 'react';

import Header from './components/Header/Header';
import CardSection from './routes/Home/CardArticles/CardSection';
import SectionToAction from './routes/Home/SectionToAction/SectionToAction';

export const Home = () => (
  <main id="Home">
    <Header />
    <CardSection />
    <SectionToAction />
  </main>
);

export default { Home };
