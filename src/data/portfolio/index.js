import voceMusicoThumb from './voce_musico/thumbnail.png';
import senseThumb from './sense_bikes/thumbnail.png';
import live8Logo from './live8/Live8.svg';
import live8Thumb from './live8/live8-BG.jpg';

const sense = {
  type: 'all',
  title: 'Sense Bikes',
  thumbnail: senseThumb,
  description: `Design and development of the new version
  of Sense Bikes website (https://sensebike.com.br)`,
  ref: 'https://invis.io/B2O7C7MN9JE',
};

const live8 = {
  type: 'all',
  title: 'Live8 Sound',
  thumbnail: live8Thumb,
  logo: live8Logo,
  description: "Design and development of Live8's website.",
  ref: 'https://live8.alia.ml',
  source: 'https://github.com/itsmelion/live8',
  tags: ['open-source', 'React', 'Wordpress'],
};

const voceMusico = {
  type: 'design',
  title: 'Logo: Você Músico',
  thumbnail: voceMusicoThumb,
  description: 'Design of the logo and Identity of VocêMusico channel.',
  ref: 'https://projects.invisionapp.com/boards/282BUHXDP4SWR/',
};

const flamework = {
  type: 'frontend',
  title: 'NPM: Flamework',
  description: 'A SCSS toolkit for Flexbox layouts',
  tags: ['open-source', 'Sass', 'npm'],
  ref: 'https://www.npmjs.com/package/flamework',
  source: 'https://github.com/itsmelion/flamework',
};

const arcaneCapsule = {
  type: 'all',
  title: 'Arcane Capsule',
  description: 'A video converter for the web',
  tags: ['open-source', 'NodeJS', 'Micro-Services', 'React'],
  ref: '//arcane.capsule.gq',
  source: 'https://github.com/itsmelion/arcane-capsule',
};

const expat = {
  type: 'all',
  title: 'PlanetExpat',
  description: 'Website and blog for working abroad internships, and coaching.',
  tags: ['Wordpress'],
  ref: '//planetexpat.org',
};

const worldStock = {
  type: 'all',
  title: 'WorldStock',
  description: 'Search stock markets worldwide',
  tags: ['open-source', 'NodeJS', 'Micro-Services', 'React', 'Redux'],
  ref: '//worldstock.gq',
  source: 'https://github.com/itsmelion/worldstock',
};

const brewser = {
  type: 'all',
  title: 'Brewser',
  description: 'A Beer catalog, that allows people to browse beer specs',
  tags: ['open-source', 'Angular'],
  ref: 'https://github.com/itsmelion/brewser',
  source: 'https://github.com/itsmelion/brewser',
};

const abs = {
  type: 'frontend',
  title: 'ABS Minas',
  description: 'Brazillian Sommellier Association of Minas Gerais portal',
  tags: ['open-source', 'Wordpress'],
  ref: '//abs-minas.com.br',
};

const plugLib = {
  type: 'all',
  title: 'Plug Academy',
  description: 'RD Station CRM (former PlugCRM) index of materials and content',
  tags: ['open-source', 'Angular'],
  ref: '//materiais.plugcrm.net',
};

const oMelhorCRM = {
  type: 'all',
  title: 'O Melhor CRM',
  description: 'Calculates the best CRM app for you.',
  tags: ['Angular'],
  ref: 'https://omelhorcrm.com.br/',
};

const benvenuto = {
  type: 'frontend',
  title: 'Benvenuto',
  description: 'A landing page for the imobiliary industry.',
  ref: 'https://benvenuto.com.br/',
};

const backr = {
  type: 'frontend',
  title: 'StudentBackr',
  description: 'Crowdfunding Software, for students only',
  tags: ['Angular', 'Sass'],
  ref: 'https://studentbackr.com/',
};

const plugCRM = {
  type: 'all',
  title: 'RD Station | CRM',
  description: 'former PlugCRM',
  tags: ['Angular', 'Sass'],
  ref: '//www.rdstation.com/crm/',
};

const robos = {
  type: 'all',
  title: 'ROBOS.IM',
  description: 'Homepage and app of ROBOS, an AI as Service platform',
  tags: ['Angular', 'Sass', 'React', 'Micro-Services', 'NodeJS'],
  ref: '//robos.alia.ml',
};

const indenizou = {
  type: 'all',
  title: 'Indenizou.com',
  description: 'Landing pages and marketing stategy and automations for indenizou.com',
  tags: ['React', 'Gatsby', 'GraphQL', 'NodeJS', 'Nginx'],
  ref: '//indenizou.com',
};

export default [
  sense,
  voceMusico,
  live8,
  flamework,
  indenizou,
  expat, // job
  backr, // job
  plugCRM, // job
  robos, // job
  benvenuto,
  plugLib,
  oMelhorCRM,
  brewser,
  arcaneCapsule,
  worldStock,
  abs,
];
