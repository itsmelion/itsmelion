import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTop';
import Splash from './components/Splash/Splash';
import Topbar from './components/Topbar/Topbar';

import Home from './routes/Home/Home';
import Resume from './routes/Resume/Resume';

const Print = lazy(() => import('./routes/Resume/Print/Print'));
const Feed = lazy(() => import('./routes/Portfolio/Feed'));

render(
  <Router>
    <ScrollToTop />

    <Topbar />

    <Suspense fallback={<Splash />}>
      <Switch>
        <Route component={Home} exact path="/" />
        {/* <Route path="/cases" component={Cases} /> */}
        <Route component={Feed} path="/portfolio" />
        <Route component={Resume} path="/resume" />
        <Route component={Print} path="/print" />
      </Switch>
    </Suspense>

    <Footer />
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
);
