import uuidv1 from 'uuid/v1';
import upworkImage from '../images/upwork_gallery.jpg';
import deskProImg from '../images/deskpro.png';
import elliotImg from '../images/elliot.png';
import lurnImg from '../images/lurn.png';

// HEAD DATA
export const headData = {
  title: 'Yegor Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yegor Yanushkevich',
  subtitle: 'I am a senior Software Engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'coverimage3.jpg',
  paragraphOne:
    'A seasoned full stack developer with a flair for creating elegant solutions in the least amount of time.',
  paragraphTwo:
    'Specialized in web application development such as E-Commerce, Enterprise Application, SaaS Platform, SPA, Health Care System, CRM and Learning Management System.',
  paragraphThree: 'Love working with great team with Agile/Scrum methodology.',
  paragraph4: ' - Front-End',
  resume: 'https://drive.google.com/file/d/1olrccn_MDTrxXdvVjzdsebaRCvN5d-Ro/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: '1',
    img: upworkImage,
    title: 'Upwork Experience',
    info: 'I have 2 years of experience on upwork.',
    info2: 'I completed 27 jobs, earned around $200k and worked 3999hrs on remote jobs.',
    url: 'https://ibb.co/XVv4BW9',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: deskProImg,
    title: 'Helpdesk Software at Deskpro',
    info:
      'I was actively involved at development of Helpdesk Software Platform at Deskpro which founded 2002.',
    info2: 'Used React.js, TypeScript, GraphQL, React-Storybook, React Hooks, Context.',
    url: 'https://www.deskpro.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: elliotImg,
    title: 'Next generation E-Commerce system',
    info: 'Involved at development of next generation e-commerce system at Elliot, Inc.',
    info2: 'Used React.js, TypeScript, GraphQL and Formik, Context API, React Hooks, UI Kit.',
    url: 'https://elliot.store/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: lurnImg,
    title: 'Entreprenuer Online Platform',
    info: 'Involved at development of Entreprenuer Online Platform at Lurn.',
    info2: 'Used PHP, Laravel 5.6, Vue.js.',
    url: 'https://lurn.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'yegoryanushkevich@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'angellist',
      url: 'https://angel.co/u/yegor-yanushkevich',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yegor-yanushkevich-509460165/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/yegor92',
    },
    {
      id: uuidv1(),
      name: 'laptop',
      url: 'https://www.hiremotely.com/profile/Yegor-Y-full-stack-mobile-web-developer',
    },
    {
      id: uuidv1(),
      name: 'user',
      url: 'https://www.guru.com/freelancers/yegor-yanushikevich',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
