import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
  // faDribbble,
} from '@fortawesome/free-brands-svg-icons';

import HeroBody from 'components/Header/Hero.png';
import avatar from 'images/hero/square.jpg';

export const social = {
  github: {
    icon: faGithub,
    name: 'Github',
    user: 'itsmelion',
    url: 'https://github.com/itsmelion',
  },
  linkedin: {
    icon: faLinkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chrislion',
  },
  // dribble: {
  //   icon: faDribbble,
  //   name: 'Dribble',
  //   url: 'https://dribbble.com/ChrisLion',
  // },
  behance: {
    icon: faBehance,
    name: 'Behance',
    url: 'https://behance.net/lion_red',
  },
  facebook: {
    icon: faFacebook,
    name: 'Facebook',
    url: 'https://facebook.com/christhopherleao',
  },
  instagram: {
    icon: faInstagram,
    name: 'Instagram',
    user: 'chris.lion',
    url: 'https://instagram.com/chris.lion',
  },
};

export const ocupation = {
  en: 'Software Developer & Designer',
};
export const role = ocupation.en;

export const picture = {
  avatar,
  micro: '/images/hero/micro-lion.jpg',
  body: HeroBody,
};

export const lastName = {
  en: 'Lion',
  pt: 'Leão',
  he: 'ארי',
};

export const name = {
  en: `Christhopher ${lastName.en}`,
  pt: `Christhopher ${lastName.pt}`,
  he: `כריסטופר ${lastName.he}`,
};

export const contact = {
  email: process.env.REACT_APP_EMAIL,
  skype: {
    icon: faSkype,
    label: 'christhopher.amaral',
    url: 'https://join.skype.com/invite/QRZJqK4phjyU',
  },
  phone: '+31682135435',
  agenda: 'https://calendly.com/itsmelion/talk',
};

export const address = {
  street: 'Henri Hermanslaan 538',
  complement: '',
  code: '6162GW',
  city: 'Geleen',
  country: 'Netherlands',
};

export const bio = {
  en: `
    Im a Frontend Developer, that loves growth and innovation.
    Im performance obsessed, love cutting edge software,
    and i also am a Design and UIUX enthusiast.
  `,
  pt: `
    Eu sou um Desenvolvedor Frontend,
    que gosta de trabalhar em ambientes de crescimento e inovação.
    Me importo bastante com desempenho, software de ponta,
    além de ser um amante de Design e entusiasta de interface/experiência de usuário.
  `,
};

export const text = {
  en: `
    My range of skills gives me the ability to take solid decisions
    on building a beautiful and performant software.
    Resolve development problems with strategy,
    building scalable and easy maintainable software.
    I can serve improving communication between Designers and Developers,
    lead teams, and mentor less experienced Designers or Frontend Developers.
  `,
  pt: `
    Minha experiência, me traz a habilidade de tomar decisões mais concretas
    no desenvolvimento de um software mais bonito e com performance.
    Resolvendo problemas com estratégia,
    e construindo software escalável, de fácil manutenção, e distribuído.
    Posso aprimorar a comunicação entre Design e Desenvolvimento,
    liderar equipes e mentorear a carreira de designers e desenvolvedores menos experientes.
  `,
};

export const inDepth = {
  en: `
  My journey as a professional since the very beginning always required for me to making decisions,
  prioritise, explore, and be aware of core things like data flow and layout consistency.
  I always were responsible for deliver all or majority of software developed,
  and my work alone having direct impact on what stakeholders would get in the end of the day.
  This shaped my way to think, and how i relate to the product and team.
  It leaded me to be criterious, humble, and pro-active.
  In daily basis i am called on to to argue about course of actions,
  do or don't, and to listen others.
  As if work wasn't enough to make this point, in life it follows the same pattern.
  Im constantly involved leadership of theological study groups, or church ministry,
  that requires loads of skills like: public speaking,
  systematic argumentation and clear communication, mentoring,
  serve in humility, honor, commitment,
  care and regard of other peoples opinions, beliefs, sexual orientation and rights.
  I am also a father of a beautiful girl,
  and if that alone doesn't require a lot of responsibility,
  we find ourselves living on a foreign country.
  All of these responsibilities though may seem overwhelming, i do with joy,
  and don't see myself doing something else.
  All i seek are greater environments where i can be even more fruitful and deliver even
  more, building a better tomorrow for me, and everyone around me.
  `,
  get pt() { return this.en; },
};

export const url = 'https://lion-portfolio.netlify.app/';
