import pitagorasLogo from '../images/brands/pitagoras.png';
import pucLogo from '../images/brands/puc.png';
import unaLogo from '../images/brands/una.png';
import cefetLogo from '../images/brands/cefet.png';

export const scholarity = [
  {
    institution: 'Faculdade Pitágoras',
    alternativeName: 'Pitágoras',
    initials: '',
    logo: pitagorasLogo,
    course: { en: 'Computer Science', pt: 'Ciência da Computação' },
  },
  {
    institution: 'PUC Minas',
    alternativeName: 'Pontifícia Universidade Católica de Minas Gerais',
    initials: 'PUC-MG',
    logo: pucLogo,
    course: { en: 'Production and Multimedia', pt: 'Produção Multimídia' },
  },
  {
    institution: 'Universidade UNA',
    alternativeName: 'Centro Universitário UNA',
    initials: 'UNA',
    logo: unaLogo,
    course: { en: 'Digital Games', pt: 'Jogos Digitais' },
  },
  {
    institution: 'CEFET-MG',
    alternativeName: 'Centro Federal de Educação Tecnológica de Minas Gerais',
    initials: 'CEFET-MG',
    logo: cefetLogo,
    course: { en: 'HighSchool', pt: 'Ensino-Médio' },
  },
];

export const certifications = [];

export default { scholarity, certifications };
