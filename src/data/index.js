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
} from 'react-icons/si';
import { GrNode } from 'react-icons/gr';

export const projectsInformation = [
  { id: 1, category: 'React', name: 'MobilityReact', information: 'Project1' },
  { id: 2, category: 'Express', name: 'Expresatio', information: 'Project2' },
  { id: 3, category: 'React', name: 'Reactito', information: 'Project3' },
  { id: 4, category: 'AWS', name: 'Awsito', information: 'Project4' },
  { id: 5, category: 'Express', name: 'Exp', information: 'Project5' },
  { id: 6, category: 'React', name: 'React-native', information: 'Project6' },
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
  },
  {
    technology: 'JavaScript',
    icon: <IoLogoJavascript />,
  },
  {
    technology: 'Redux',
    icon: <SiRedux />,
  },
  {
    technology: 'NodeJS',
    icon: <GrNode />,
  },
  {
    technology: 'HTML5',
    icon: <IoLogoHtml5 />,
  },
  {
    technology: 'CSS3',
    icon: <DiCss3 />,
  },
  {
    technology: 'AWS',
    icon: <SiAmazonaws />,
  },
  {
    technology: 'Git',
    icon: <AiOutlineGithub />,
  },
  {
    technology: 'Python',
    icon: <SiPython />,
  },
];
export const test = ['All', 'React', 'Express', 'AWS'];
