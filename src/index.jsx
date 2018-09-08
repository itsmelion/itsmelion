import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import {
  Home, Cases, Works, Resume,
} from './routes';

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
  const language = queryLang || (available.includes(lang) && lang) || defaultLang;
  localStorage.setItem('lang', language);

  if (queryLang) return queryLang;
  if (local) return local;
  if (!browserLang) return defaultLang;

  return language;
};

window.lang = getLanguage();

render(
  <BrowserRouter>
    <>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cases" component={Cases} />
        <Route path="/works" component={Works} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>,
  document.getElementById('root'),
);
