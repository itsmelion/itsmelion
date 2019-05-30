import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
  // faDribbble,
} from '@fortawesome/free-brands-svg-icons';

import avatar from '../images/hero/square.jpg';
import HeroBody from '../components/Header/Hero.png';

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
  en: 'Frontend Developer',
  pt: 'Frontend Developer',
};

export const picture = {
  avatar,
  micro: '/images/hero/micro-lion.jpg',
  body: HeroBody,
};

export const lastName = {
  en: 'Lion',
  pt: 'Leão',
  he: 'אריה',
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
  phone: '+351913840493',
  agenda: 'https://calendly.com/itsmelion/talk',
};

export const address = {
  street: 'R. Bombeiros Voluntários 20, Odivelas',
  complement: 'C/V Esq.',
  code: '2675-218',
  city: 'Lisbon',
  country: 'Portugal',
};

export const bio = {
  en: `Im a Frontend Developer, that loves growth and innovation.
    Im performance obsessed, love cutting edge software,
    and i also am a Design and UIUX enthusiast.`,
  pt: `Eu sou um Desenvolvedor Frontend,
    que gosta de trabalhar em ambientes de crescimento e inovação.
    Me importo bastante com desempenho, software de ponta,
    além de ser um amante de Design
    e entusiasta de interface/experiência de usuário.`,
};

export const text = {
  en: `My range of skills gives me the ability to take solid decisions
  on building a beautiful and performant software.
  Improve the communication between Designers and Developers, lead teams, and
  mentor less experienced Designers or Frontend Developers.`,
  pt: `Minha experiência, me traz a habilidade de tomar decisões mais concretas
  no desenvolvimento de um software mais bonito e com performance.
  Posso aprimorar a comunicação entre Design e Desenvolvimento, liderar equipes e
  mentorear a carreira de designers e desenvolvedores menos experientes.`,
};

export default {
  role: ocupation.en,
  name,
  bio,
  text,
  address,
  contact,
  picture,
  lastName,
};
