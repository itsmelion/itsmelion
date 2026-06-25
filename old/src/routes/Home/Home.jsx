import Header from 'components/Header/Header';
import React from 'react';

import CardSection from './CardArticles/CardSection';
import SectionToAction from './SectionToAction/SectionToAction';

const Home = () => (
  <main id="Home">
    <Header />
    <CardSection />
    <SectionToAction />
  </main>
);

export default Home;
