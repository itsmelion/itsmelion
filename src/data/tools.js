import illustratorLogo from '../images/brands/illustrator.svg';
import afterEffectsLogo from '../images/brands/after-effects.svg';
import angularLogo from '../images/brands/angular.svg';
import wordpressLogo from '../images/brands/wordpress.svg';
import webpackLogo from '../images/brands/webpack.svg';
import nginxLogo from '../images/brands/nginx.svg';
import adobePhotoshopLogo from '../images/brands/photoshop.svg';
import reactLogo from '../images/brands/react.svg';
import invisionLogo from '../images/brands/invision.svg';
import bashLogo from '../images/brands/terminal.svg';
import nodeJsLogo from '../images/brands/nodejs-alt.svg';
import mongoLogo from '../images/brands/mongodb.svg';
import dockerLogo from '../images/brands/docker.svg';

export const adobeIllustrator = { name: 'Illustrator', year: 2012, logo: illustratorLogo };
export const sketch = { name: 'Sketch App', year: 2017, logo: '' };
export const adobeAfterEffects = { name: 'Adobe After Effects', year: 2015, logo: afterEffectsLogo };
export const angularJs = { name: 'Angular.js', year: 2014, logo: angularLogo };
export const angular = { name: 'Angular', year: 2016, logo: angularLogo };
export const wordpress = { name: 'Wordpress', year: 2015, logo: wordpressLogo };
export const webpack = { name: 'Webpack', year: 2016, logo: webpackLogo };
export const nginx = { name: 'nGinx', year: 2017, logo: nginxLogo };
export const adobePhotoshop = { name: 'Photoshop', year: 2012, logo: adobePhotoshopLogo };
export const react = { name: 'React', year: 2017, logo: reactLogo };
export const invision = { name: 'inVision', year: 2016, logo: invisionLogo };
export const bash = { name: 'Bash scripts', year: 2015, logo: bashLogo };
export const nodeJs = { name: 'Node.js', year: 2017, logo: nodeJsLogo };
export const mongo = { name: 'MongoDB', year: 2017, logo: mongoLogo };
export const docker = { name: 'Docker', year: 2018, logo: dockerLogo };
export const microServices = { name: 'Micro-Services', year: 2018, logo: dockerLogo };
export const laravel = { name: 'Laravel', year: 2017 };

const tools = {
  design: [
    adobeAfterEffects,
    adobeIllustrator,
    adobePhotoshop,
    invision,
  ],

  frontend: [
    react,
    webpack,
    angular,
    bash,
    wordpress,
  ],

  backend: [
    nginx,
    nodeJs,
    mongo,
    docker,
  ],
};

export const wishlist = {
  design: null,
  frontend: [
    {
      name: 'GraphQL',
    },
  ],

  backend: [
    {
      name: 'GraphQL',
    },
    {
      name: 'Next.js',
    },
  ],
};

export default tools;
