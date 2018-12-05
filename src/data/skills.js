import tools from './tools';

const bars = [
  { field: 'Design', ratio: 70 },
  { field: 'Frontend', ratio: 85 },
  { field: 'Backend', ratio: 37 },
];

const tags = {
  en: [
    'Resourceful Pro',
    'Command Line Scripts',
    'Micro Services',
    'Think Scalable',
    'Think Reusable',
  ],

  pt: [
    'Várias habilidades',
    'Utilidades de linha de comando',
    'Micro Serviços',
    'Pensamento Escalável',
    'Componentes Reutilizáveis',
  ],

  he: [
    'Resourceful Pro',
    'Command Line Scripts',
    'Micro Services',
    'Think Scalable',
    'Think Reusable',
  ],
};

const languages = [
  {
    language: 'English',
    level: 'Advanced',
    certification: 'TOEFL',
  },
  {
    language: 'Portuguese',
    level: 'Native',
  },
];

const skills = {
  bars,
  tags,
  languages,
  tools,
};

export default skills;
