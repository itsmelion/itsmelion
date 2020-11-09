import React from 'react';

import CardSection from './CardArticles/CardSection';
import SectionToAction from './SectionToAction/SectionToAction';
import Header from 'components/Header/Header';

const Home = () => (
  <main id="Home">
    <Header />
    <CardSection />
    <SectionToAction />
  </main>
);

export default Home;
