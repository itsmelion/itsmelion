import casesIcon from './icons8-microscope.png';
import worksIcon from './icons8-open_box.png';
import resumeIcon from './icons8-paper.png';

export default [
  {
    path: '/portfolio',
    icon: worksIcon,
    disabled: false,
    title: {
      en: 'Portfolio',
      pt: 'Portifólio',
      he: 'Portfolio',
    },
    description: {
      en: 'A collection of showcases and stuff i made. Separated for you',
      pt: 'Uma coleção de casos e trabalhos que fiz, e separei para você.',
      he: 'A collection of showcases and stuff i made. Separated for you',
    },
  },

  {
    path: '/resume',
    icon: resumeIcon,
    disabled: false,
    title: {
      en: 'Resume and Skills',
      pt: 'Currículo e Habilidades',
      he: 'Resume and Skills',
    },
    description: {
      en: `Find further information about past experiences, academic formation,
      and technologies i work with.`,
      pt: `Encontre mais informações de experiencias, formação acadêmica,
      tecnologias que domino e etc.`,
      he: `Find further information about past experiences, academic formation,
      and technologies i work with`,
    },
  },

  {
    path: '/cases',
    icon: casesIcon,
    disabled: true,
    title: {
      en: 'Case Studies',
      pt: 'Estudos de Caso',
      he: 'Case Studies',
    },
    description: {
      en: 'Unavailable because its under development',
      pt: 'Indisponível. Sessão em desenvolvimento',
      he: 'Unavailable because its under development',
    },
  },
];
