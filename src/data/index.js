import {
  IoMdSpeedometer,
  IoLogoJavascript,
  IoLogoHtml5,
  IoIosLaptop,
} from 'react-icons/io';
import { DiResponsive, DiNodejs, DiCss3 } from 'react-icons/di';
import { AiOutlineInteraction, AiOutlineGithub } from 'react-icons/ai';
import {
  SiRedux,
  SiMysql,
  SiAmazonaws,
  SiReact,
  SiPython,
  SiGmail,
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

import lego from '../images/lego.png';
import builder from '../images/builder.png';
import reviews from '../images/reviews.png';
import foodtruck from '../images/foodtruck.png';
import jobs from '../images/jobs.png';
import portfolio from '../images/portfolio.png';

export const projectsInformation = [
  {
    id: 1,
    category: 'React',
    name: 'Gallery Component',
    information: 'Full-stack application',
    src: lego,
    link: 'https://github.com/Smarqu14/GalleryComponent',
  },
  {
    id: 2,
    category: 'React',
    name: 'Construction Website',
    information: 'React application',
    src: builder,
    link: 'https://www.brighterbaybuilders.com/',
  },
  {
    id: 3,
    category: 'Fullstack',
    name: 'Adidas Reviews Component',
    information: 'Backend application',
    src: reviews,
    link: 'https://github.com/abibas-hrsf127/reviews-module-steve',
  },
  {
    id: 4,
    category: 'Fullstack',
    name: 'Food Truck Website',
    information: 'Fullstack application',
    src: foodtruck,
    link: 'https://github.com/Smarqu14/FoodTruckApp',
  },
  {
    id: 5,
    category: 'Flask',
    name: 'Python Application',
    information: 'Flask Job Board Application',
    src: jobs,
    link: 'https://github.com/Smarqu14/PythonFlask-JobBoard',
  },
  {
    id: 6,
    category: 'React',
    name: 'Portfolio Website',
    information: 'React & SaSS application',
    src: portfolio,
    link: 'https://github.com/Smarqu14/portfolio-app',
  },
];

export const traits = [
  {
    trait: 'Fast',
    description: 'Fast load times and lag free interaction.',
    icon: <IoMdSpeedometer />,
    color: '#b33951',
  },
  {
    trait: 'Dynamic',
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: <IoIosLaptop />,
    color: '#4b3f72',
  },
  {
    trait: 'Responsive',
    description: 'My layouts will work on any device, big or small.',
    icon: <DiResponsive />,
    color: '#4f759b',
  },
  {
    trait: 'Interactive',
    description: 'Strong preference for easy to use, intuitive UX/UI.',
    icon: <AiOutlineInteraction />,
    color: '#028090',
  },
];

export const Logos = [
  {
    technology: 'ReactJS',
    icon: <SiReact />,
    color: '#61DBFB',
  },
  {
    technology: 'JavaScript',
    icon: <IoLogoJavascript />,
    color: '#F0DB4F',
  },
  {
    technology: 'Redux',
    icon: <SiRedux />,
    color: '#764abc',
  },
  {
    technology: 'NodeJS',
    icon: <GrNode />,
    color: '#68A063',
  },
  {
    technology: 'HTML5',
    icon: <IoLogoHtml5 />,
    color: '#000',
  },
  {
    technology: 'CSS3',
    icon: <DiCss3 />,
    color: '#264de4',
  },
  {
    technology: 'AWS',
    icon: <SiAmazonaws />,
    color: '#FF9900',
  },
  {
    technology: 'Git',
    icon: <AiOutlineGithub />,
    color: '#333',
  },
  {
    technology: 'Python',
    icon: <SiPython />,
    color: '#4b8bbe',
  },
];

export const contactLogos = [
  {
    technology: 'LinkedIn',
    icon: <FaLinkedin />,
    color: '#0077b5',
    link: 'https://www.linkedin.com/in/steveantonio00/',
  },
  {
    technology: 'Youtube',
    icon: <FaYoutube />,
    color: '#c4302b',
    link: 'https://www.youtube.com/channel/UCNvemqjtbl_H1dQY2ZL96Yg',
  },
  {
    technology: 'Github',
    icon: <AiOutlineGithub />,
    color: 'white',
    link: 'https://github.com/Smarqu14',
  },
];
export const category = ['All', 'React', 'Fullstack', 'Flask'];
