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

// temporarely adding GraphQL icon, white Fontawesome doesnt add it
const faGraphQl = {
  prefix: 'fac',
  iconName: 'graphql', // Any name you like
  icon: [
    400, // width
    400, // height
    [], // ligatures
    '', // unicode (if relevant)
    'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z M39.8 272.2h320.3v16.6H39.8z M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9',
  ],
};

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
export const graphQL = { name: 'GraphQL', logo: faGraphQl };
export const gatsby = { name: 'Gatsby', logo: faQuestion };
export const flutter = { name: 'Flutter', logo: faQuestion };
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

  frontend: [graphQL, reactNative, flutter],

  backend: [
    graphQL,
    reactNative,
    flutter,
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
