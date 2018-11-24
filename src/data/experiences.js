import {
  adobeIllustrator,
  adobeAfterEffects,
  angularJs,
  angular,
  wordpress,
  webpack,
  nginx,
  adobePhotoshop,
  react,
  invision,
  bash,
  nodeJs,
  mongo,
  docker,
  microServices,
  laravel,
} from './tools';

import destakLogo from '../images/brands/destak.jpg';
import mgRepresentacoesLogo from '../images/brands/mgrepresentacoes.png';
import crmLogo from '../images/brands/rd-station_crm.svg';
import aliaLogo from '../images/logo.png';
import backrLogo from '../images/brands/backr.svg';
import expatLogo from '../images/brands/planetexpat.png';
import robosLogo from '../images/brands/robos.png';

const backr = {
  logo: backrLogo,
  name: 'StudentBackr',
  ref: 'studentbackr.com',
  position: 'Frontend',
  business: 'Crowdfunding software, for students only',
  period: {
    start: {
      month: {
        semester: 1,
        en: 'early',
        pt: 'início de',
      },
      year: 2017,
    },
    end: {
      month: {
        semester: 0,
        en: 'late',
        pt: 'final de',
      },
      year: 2017,
    },
  },
  description: {
    en: 'Design and development of web applications and landing pages.',
    pt: 'Design and desenvolvimento de aplicações web e landing pages.',
  },
  archievements: [
    'Improved website speed and performance for over 80%',
    'Completely refactored the dashboard (backoffice) for staff and admnistrators manage content and users.',
    'Introduced component architecture to Angular/Laravel, increasing UI consistency, control, and speeding up development',
    'Introduced wireframing, design thinking concepts to increase team productivity and overall quality',
    'Leveraged garbage over the application, brought better/modern dependencies, and refactored code using better stardards',
  ],
  technologies: [
    adobeIllustrator,
    wordpress,
    webpack,
    angularJs,
    nginx,
    laravel,
  ],
};

const destak = {
  logo: destakLogo,
  name: 'Destakinox',
  ref: 'destakinox.com.br',
  position: 'Designer',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'início de',
      },
      year: 2012,
    },
    end: {
      month: {
        semester: 0,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2014,
    },
  },
  archievements: null,
  description: {
    en: 'Design of publicity and marketing content.',
    pt: 'Design de conteúdo publicitário e de marketing.',
  },
  technologies: [adobeIllustrator, adobePhotoshop],
};

const mg = {
  name: 'MG Representações',
  position: 'Designer',
  logo: mgRepresentacoesLogo,
  ref: 'mgrepresentacoes.com.br',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'início de',
      },
      year: 2012,
    },
    end: {
      month: {
        semester: 0,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2014,
    },
  },
  description: {
    en: 'Design of publicity and marketing content.',
    pt: 'Design de conteúdo publicitário e de marketing.',
  },
  technologies: [adobeIllustrator, adobePhotoshop],
};

const rd = {
  name: 'RD Station CRM (former PlugCRM)',
  ref: 'www.rdstation.com/crm/',
  position: 'Frontend and Designer',
  logo: crmLogo,
  period: {
    start: {
      month: {
        semester: 1,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2014,
    },
    end: {
      month: {
        semester: 0,
        en: 'late',
        pt: 'final de',
      },
      year: 2017,
    },
  },
  archievements: [
    "Revamped the CRM's app interface, following Material Design recomendations",
    'Completely refactored website',
    'Designed/Developed email templates from scratch for newsletter/notifications',
    'Produced dozens of Landing Pages',
    'Designed and diagrammed dozens of Ebooks',
    'Created a "Knowledge Center", gathering all content of past newsletters, like infographics, assets, ebooks for later download',
    'Produced hundreds of images for Marketing, like art for FacebookAds and social media',
    'Created videos, and animated GIFs',
  ],
  description: {
    en: `Design and development of web applications, Animations and videos,
    also images for publicity.`,
    pt: `Design e desenvolvimento de aplicações web, Vídeos e animações,
    e imagens com fins publicitários.`,
  },
  technologies: [
    adobeAfterEffects,
    adobeIllustrator,
    adobePhotoshop,
    angularJs,
  ],
};

const alia = {
  name: 'Autonomous as ALIA',
  position: 'FullStack',
  logo: aliaLogo,
  ref: 'alia.ml',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'ends',
        pt: 'final de',
      },
      year: 2016,
    },
    end: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'início de',
      },
      year: 2019,
    },
  },
  description: {
    en: 'Services of design and development of web apps',
    pt: 'Serviços de design and desenvolvimento de aplicações web',
  },
  technologies: [
    adobeAfterEffects,
    adobeIllustrator,
    adobePhotoshop,
    wordpress,
    invision,
    webpack,
    angularJs,
    angular,
    nodeJs,
    react,
    nginx,
    bash,
    mongo,
    docker,
    microServices,
  ],
};

const expat = {
  logo: expatLogo,
  name: 'Planet Expat',
  ref: 'planetexpat.org',
  business: 'Mentoring/Coaching, and recruitment focused on working abroad',
  position: 'Frontend and Designer',
  period: {
    start: {
      month: {
        semester: 1,
        en: 'early',
        pt: 'início de',
      },
      year: 2017,
    },
    end: {
      month: {
        semester: 1,
        en: 'late',
        pt: 'final de',
      },
      year: 2017,
    },
  },
  archievements: [
    'Improved website speed and performance for over 120%',
    'Implemented Webpack optimizations and standards for Wordpress',
    'Introduced wireframing, design thinking concepts to increase team productivity and overall quality',
    'Designed and Developed an easily maintainable, and fully customized wordpress theme for PlanetExpat',
  ],
  description: {
    en:
      'Design and development of web applications, widgets and landing pages.',
    pt:
      'Design and desenvolvimento de aplicações web, widgets e landing pages.',
  },
  technologies: [adobeIllustrator, adobePhotoshop, wordpress, webpack, nginx],
};

const robos = {
  name: 'ROBOS.IM',
  ref: 'robos.im',
  logo: robosLogo,
  position: 'Frontend',
  business: 'Chatbots as a Service and artificial intelligence',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'início de',
      },
      year: 2018,
    },
    end: {
      month: {
        semester: 0,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2018,
    },
  },
  description: {
    en:
      'Design and development of web applications, widgets and landing pages.',
    pt:
      'Design and desenvolvimento de aplicações web, widgets e landing pages.',
  },
  archievements: [
    'Improved app speed and performance and reduced bundle size for over 50%',
    'Created a standalone Live chat widget in React',
    'Introduced wireframing, design thinking concepts to increase team productivity and overall quality',
    'Completely redesigned homepage, and developed it using React',
    'Leveraged garbage over the application, brought better/modern dependencies, simplified/improved functions, and refactored code using better stardards',
    'Introduced Unit/Integration Tests',
  ],
  technologies: [
    adobeIllustrator,
    invision,
    webpack,
    angularJs,
    nodeJs,
    react,
    bash,
    mongo,
    docker,
    microServices,
  ],
  links: [
    'https://www.linkedin.com/company/robos.im/',
    'https://www.instagram.com/robos.im/',
    'https://www.facebook.com/wearerobos',
  ],
};

export default [destak, mg, rd, alia, backr, expat, robos];
