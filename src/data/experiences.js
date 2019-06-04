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
  graphQL,
  gatsby,
} from './tools';

import destakLogo from 'images/brands/destak.jpg';
import mgRepresentacoesLogo from 'images/brands/mgrepresentacoes.png';
import crmLogo from 'images/brands/rd-station_crm.svg';
import aliaLogo from 'images/logo.png';
import backrLogo from 'images/brands/backr.svg';
import expatLogo from 'images/brands/planetexpat.png';
import robosLogo from 'images/brands/robos.png';

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
    en: 'Design and development of web applications, widgets and landing pages.',
    pt: 'Design and desenvolvimento de aplicações web, widgets e landing pages.',
  },
  technologies: {
    direct: [adobeIllustrator, adobePhotoshop, wordpress, webpack, nginx],
  },
};

const robos = {
  name: 'ROBOS.IM',
  ref: 'robos.alia.ml',
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
    'Leveraged garbage over the application, brought better/modern dependencies, simplified/improved functions, and refactored code using better standards',
    'Introduced Unit/Integration Tests',
    'See CTO recomendation: https://angel.co/chrislion',
  ],
  technologies: {
    direct: [
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
  },
  links: [
    'https://www.linkedin.com/company/robos.im/',
    'https://www.instagram.com/robos.im/',
    'https://www.facebook.com/wearerobos',
    'http://robos.im',
  ],
};

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
    'Completely refactored the dashboard (backoffice) for staff and administrators manage content and users.',
    'Introduced component architecture to Angular/Laravel, increasing UI consistency, control, and speeding up development',
    'Introduced wireframing, design thinking concepts to increase team productivity and overall quality',
    'Leveraged garbage over the application, brought better/modern dependencies, and refactored code using better standards',
  ],
  technologies: {
    direct: [
      adobeIllustrator,
      wordpress,
      webpack,
      angularJs,
      nginx,
      laravel,
    ],
    indirect: [laravel],
  },
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
  technologies: { direct: [adobeIllustrator, adobePhotoshop] },
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
  technologies: { direct: [adobeIllustrator, adobePhotoshop] },
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
  technologies: {
    direct: [
      adobeAfterEffects,
      adobeIllustrator,
      adobePhotoshop,
      angularJs,
    ],
  },
};

const indenizou = {
  name: 'Indenizou',
  ref: 'indenizou.com',
  // logo: robosLogo,
  position: 'Frontend, Design and Marketing',
  business: 'Indenizations for flight and luggage problems',
  period: {
    start: {
      month: {
        semester: 1,
        en: 'ends',
        pt: 'final de',
      },
      year: 2018,
    },
    end: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'inicio de',
      },
      year: 2019,
    },
  },
  description: {
    en: `Design and development of conversion focused Landing pages,
    marketing strategy, SEO Optimizations.`,
    pt: `Design and desenvolvimento de langinng pages focadas em conversão,
    elaboração de estratégias de marketing e otimizações de SEO`,
  },
  archievements: [
    'Improved app speed and performance',
    `Produced landing pages with high performance and SEO friendly using
    Gatsby for pre-rendering static content`,
    `Leveraged garbage over the application,
    brought better/modern dependencies,
    simplified/improved functions, and refactored code using better standards`,
    'Implemented and configured Chatbots for customer assistance automation',
    'Managed and created newsletter flows (onboarding, followup..) and campaigns',
  ],
  technologies: {
    direct: [
      docker,
      nodeJs,
      react,
      gatsby,
      mongo,
      webpack,
      adobeIllustrator,
      invision,
    ],
  },
  links: ['http://indenizou.alia.ml'],
};

const Drover = {
  name: 'Drover',
  ref: 'joindrover.com',
  logo: 'https://static.siliconmilkroundabout.com/prod/logos/68/a5f5b774e1-1bd6800b-620e-48c4-adc9-577c2a187918-original.png',
  position: 'Frontend Developer',
  business: 'Drover is a flexible car subscription service to make cars easier for everyone',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'inicio de',
      },
      year: 2019,
    },
    end: {
      month: {
        semester: 1,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2019,
    },
  },
  description: {
    en: 'Development of web apps and sites with performance and code-reusability',
  },
  archievements: [
    'Drover counts with a diverse and international environment, where english is the default(required) language.',
    'Daily meetings with collaborators based in London & Portugal.',
    `Leveraged garbage over the application,
    brought better/modern dependencies,
    simplified/improved functions, and refactored code using better standards`,
    'Me and all colaborators were able take part of architectural decison making, contributing and improving different parts of the product and creating better standards and workflow.',
    'SCRUM methodology',
    'Responsible for strategies for code-reuse, performance, development of CLI functions'
  ],
  technologies: {
    direct: [
      docker,
      nodeJs,
      react,
      webpack,
      invision,
    ],
  },
  links: ['http://joindrover.com/'],
};

const VisionBox = {
  name: 'VisionBox',
  ref: 'vision-box.com',
  logo: 'https://www.vision-box.com/assets/images/vb-logo-color.svg',
  position: 'Frontend Developer',
  business: 'Vision-Box™ acts on airports, airlines, governments and private entities with critical security and identification challenges, supporting them to optimize the identification and flow of travelers, establishing trusted biometric identity enrollment, verification and authentication processes.',
  period: {
    start: {
      month: {
        semester: 1,
        en: 'mid',
        pt: 'meados de',
      },
      year: 2019,
    },
    end: {
      month: {
        semester: 1,
        en: 'ends',
        pt: 'final de',
      },
      year: 2019,
    },
  },
  description: {
    en: `Development and implementation of integrated, user-centric,
    digital identity management solutions and services built upon trusted biometric tokens`,
  },
  archievements: [
    'VisionBox counts with a diverse and international environment.',
    'Collaborate with clients based all over the world.',
    'Responsible for strategies for code-reuse, performance, development of CLI functions'
  ],
  technologies: {
    direct: [
      docker,
      nodeJs,
      react,
      webpack,
    ],
  },
  links: ['https://www.vision-box.com/'],
};

const PrimeIT = {
  name: 'PrimeIT Consulting',
  position: 'Senior Frontend Developer',
  logo: 'https://www.primeit.pt/public/imgs/id/png/id-primeit-it-positive.png',
  ref: 'primeit.pt',
  period: {
    start: {
      month: {
        semester: 0,
        en: 'early',
        pt: 'inicio de',
      },
      year: 2019,
    },
    end: {
      month: {
        semester: 1,
        en: 'mid',
        pt: 'meados de',
      },
    },
  },
  description: {
    en: 'Consultancy and services of development and design of web software',
    pt: 'Consultoria e serviços de desenvolvimento e design de aplicações web',
  },
  technologies: {
    direct: [
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
      gatsby,
      graphQL,
      nginx,
      bash,
      mongo,
      docker,
      microServices,
    ],
  },
  contractors: [VisionBox, Drover],
};

const alia = {
  name: 'Autonomous as ALIA',
  position: 'Frontend Developer and Designer',
  logo: aliaLogo,
  ref: 'alia.ml',
  period: {
    start: {
      month: {
        semester: 1,
        en: 'ends',
        pt: 'final de',
      },
      year: 2012,
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
    en: 'Consultancy and services of development and design of web software',
    pt: 'Consultoria e serviços de desenvolvimento e design de aplicações web',
  },
  technologies: {
    direct: [
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
      gatsby,
      graphQL,
      nginx,
      bash,
      mongo,
      docker,
      microServices,
    ],
  },
  contractors: [indenizou, robos, expat, backr, rd, destak, mg],
};

export default [alia, PrimeIT];
