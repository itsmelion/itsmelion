import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import * as serviceWorker from './serviceWorker';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTop';
import { Home } from './routes';
import Resume from './routes/Resume/Resume';
import Feed from './routes/Portfolio/Feed';
import Print from './routes/Resume/Print/Print';
import LanguageService from './Language';

// Setup application Language (locale) to global context
const languageService = new LanguageService(['pt', 'en', 'he']);
window.lang = languageService.getLanguage() || process.env.REACT_APP_DEFAULT_LANG;
localStorage.setItem('lang', window.lang);

render(
  <BrowserRouter>
    <ScrollToTop>
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/cases" component={Cases} /> */}
        <Route path="/portfolio" component={Feed} />
        <Route path="/resume" component={Resume} />
        <Route path="/print" component={Print} />
      </Switch>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);


if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
