import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faBehance,
  faSkype,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import avatar from '../images/hero/lion.jpg';

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
  dribble: {
    icon: faDribbble,
    name: 'Dribble',
    url: 'https://dribbble.com/ChrisLion',
  },
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
  en: 'Senior Frontend and Designer',
  pt: 'Senior Frontend e Designer',
};

export const picture = {
  avatar,
  micro: '/images/hero/micro-lion.jpg',
  body: '',
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
  email: 'christhopherleao@icloud.com',
  skype: {
    icon: faSkype,
    label: 'christhopher.amaral',
    url: 'https://join.skype.com/invite/QRZJqK4phjyU',
  },
  phone: '+55 31 982875204',
  agenda: 'https://calendly.com/itsmelion',
};

export const address = {
  street: 'Rua Patrocínio, 127',
  city: 'Belo Horizonte',
  country: 'Brazil',
};

export const bio = {
  en: `Im a Frontend Developer,
    looking for a environment of growth and innovation.
    I love performance, cutting edge software,
    and also an Design and UIUX enthusiast.`,
  pt: `Eu sou um Desenvolvedor Frontend,
    procurando por um ambiente de crescimento e inovação.
    E me importo bastante com desempenho, software de ponta,
    além de ser um amante de Design
    e entusiasta de interface e experiência de usuário.`,
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
