import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTop';
import { Home } from './routes';
import Resume from './routes/Resume/Resume';
import Feed from './routes/Portfolio/Feed';
import Print from './routes/Resume/Print/Print';

render(
  <Router>
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
  </Router>,
  document.getElementById('root'),
);

library.add(
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
  faDribbble,
);
