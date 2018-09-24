import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import Resume from './routes/Resume/Resume';
import Portfolio from './routes/Portfolio/Feed';

import { Home } from './routes';

require.context('./images/favicons', true);

const getQueryParams = (parameter) => {
  let param;
  const query = window.location.search.substring(1);
  const params = query.split('&');
  const result = params.map((item) => {
    const pair = item.split('=');
    if (pair[0] === parameter) return pair[1];
    return false;
  });

  result.forEach((res) => {
    if (res) param = res;
  });

  return param;
};

const getLanguage = () => {
  const available = ['pt', 'en', 'he'];
  const defaultLang = 'en';
  const browserLang = window.navigator.userLanguage || window.navigator.language;
  const lang = (`${browserLang[0]}${browserLang[1]}`).toLowerCase();
  const local = localStorage.getItem('lang');
  const queryLang = getQueryParams('lang');
  const language = (available.includes(queryLang) && queryLang)
    || local || (available.includes(lang) && lang) || defaultLang;

  if (queryLang) return language;
  if (local) return local;
  if (!browserLang) return defaultLang;

  return language;
};

window.lang = getLanguage() || 'en';
localStorage.setItem('lang', window.lang);

render(
  <BrowserRouter>
    <>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/cases" component={Cases} /> */}
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>,
  document.getElementById('root'),
);
