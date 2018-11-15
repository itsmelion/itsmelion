import voceMusicoThumb from './voce_musico/thumbnail.png';
import senseThumb from './sense_bikes/thumbnail.png';
import live8Logo from './live8/Live8.svg';
import live8Thumb from './live8/live8-BG.jpg';

const sense = {
  type: 'all',
  title: 'Sense Bikes',
  thumbnail: senseThumb,
  description: `Design and development of the new version
  of Sense Bikes website.`,
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
  tags: ['open-source', 'react', 'wordpress'],
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
  ref: '//npmjs.com/packages/flamework/',
  source: 'https://github.com/itsmelion/flamework',
};

export default [sense, voceMusico, live8, flamework];
