/* eslint-disable import/no-unresolved */
import {
  faDocker,
  faAngular,
  faWordpressSimple,
  faNodeJs,
  faReact,
  faLaravel,
  faJs,
  faGit,
  faSass,
  faEnvira,
  faInvision,
  faSketch,
} from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as illustratorLogo } from 'images/brands/illustrator.svg';
import { ReactComponent as afterEffectsLogo } from 'images/brands/after-effects.svg';
import { ReactComponent as webpackLogo } from 'images/brands/webpack.svg';
import { ReactComponent as adobePhotoshopLogo } from 'images/brands/photoshop.svg';
import nginxLogo from 'images/brands/nginx.png';
import lightroomLogo from 'images/brands/lightroom.svg';
import autodeskLogo from 'images/brands/3dsmax.svg';

export const adobeIllustrator = {
  name: 'Illustrator',
  year: 2012,
  logo: illustratorLogo,
};
export const adobeAfterEffects = {
  name: 'Adobe After Effects',
  year: 2015,
  logo: afterEffectsLogo,
};

export const angularJs = { name: 'AngularJS', year: 2014, logo: faAngular };
export const angular = { name: 'Angular', year: 2016, logo: faAngular };
export const wordpress = {
  name: 'Wordpress',
  year: 2015,
  logo: faWordpressSimple,
};
export const webpack = { name: 'Webpack', year: 2015, logo: webpackLogo };
export const nginx = { name: 'nGinx', year: 2017, logo: nginxLogo };
export const adobePhotoshop = {
  name: 'Photoshop',
  year: 2012,
  logo: adobePhotoshopLogo,
};
export const react = { name: 'React', year: 2017, logo: faReact };
export const invision = { name: 'inVision', year: 2016, logo: faInvision };
export const bash = { name: 'Shell scripts', year: 2015, logo: faTerminal };
export const nodeJs = { name: 'Node.js', year: 2017, logo: faNodeJs };
export const mongo = { name: 'MongoDB', year: 2017, logo: faEnvira };
export const docker = { name: 'Docker', year: 2018, logo: faDocker };
export const microServices = {
  name: 'Micro-Services',
  year: 2018,
  logo: faDocker,
};
export const laravel = { name: 'Laravel', year: 2017, logo: faLaravel };
export const tests = { name: 'Automated Tests', year: 2017, logo: faJs };
export const git = { name: 'Version Control', year: 2015, logo: faGit };
export const sass = { name: 'Sass Styles', year: 2014, logo: faSass };
export const sketch = { name: 'Sketch App', year: 2017, logo: faSketch };
export const threeD = { name: '3ds Max', year: 2012, logo: autodeskLogo };
export const lightroom = {
  name: 'Adobe Lightroom',
  year: 2016,
  logo: lightroomLogo,
};
export const graphQL = { name: 'GraphQL', logo: faQuestion };
export const gatsby = { name: 'Gatsby', logo: faQuestion };
export const reactNative = { name: 'React Native', logo: faReact };

const tools = {
  design: [
    adobeAfterEffects,
    adobeIllustrator,
    adobePhotoshop,
    lightroom,
    invision,
    sketch,
    threeD,
  ],

  frontend: [webpack, react, angular, wordpress, tests, sass, git],

  backend: [bash, nginx, nodeJs, mongo, docker],
};

export const wishlist = {
  design: null,

  frontend: [graphQL, reactNative],

  backend: [
    graphQL,
    reactNative,
    {
      name: 'Next.js',
      logo: faQuestion,
    },
    {
      name: 'Circle CI',
      logo: faQuestion,
    },
    {
      name: 'Redis',
      logo: faQuestion,
    },
  ],
};

export default tools;
