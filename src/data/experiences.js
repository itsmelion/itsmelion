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

export default [
  {
    name: 'Destakinox',
    position: 'Designer',
    logo: destakLogo,
    ref: 'destakinox.com.br',
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
  },
  {
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
  },

  {
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
  },

  {
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
      en: 'Design and development of websites',
      pt: 'Design and desenvolvimento websites',
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
  },

  {
    name: 'StudentBackr',
    position: 'Frontend',
    logo: backrLogo,
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
    ref: 'studentbackr.com',
    description: {
      en:
        'Design and development of web applications, widgets and landing pages.',
      pt:
        'Design and desenvolvimento de aplicações web, widgets e landing pages.',
    },
    technologies: [
      adobeIllustrator,
      wordpress,
      webpack,
      angularJs,
      nginx,
      laravel,
    ],
  },

  {
    name: 'Planet Expat',
    position: 'Frontend and Designer',
    logo: expatLogo,
    ref: 'planetexpat.org',
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
    description: {
      en:
        'Design and development of web applications, widgets and landing pages.',
      pt:
        'Design and desenvolvimento de aplicações web, widgets e landing pages.',
    },
    technologies: [adobeIllustrator, adobePhotoshop, wordpress, webpack, nginx],
  },

  {
    name: 'ROBOS.IM',
    ref: 'robos.im',
    logo: robosLogo,
    position: 'Frontend',
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
  },
];
