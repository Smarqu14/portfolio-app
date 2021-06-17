import { BsCodeSlash } from 'react-icons/bs';
import { BsCloudUpload } from 'react-icons/bs';
import { IoIosLaptop } from 'react-icons/io';
import { AiOutlineInteraction } from 'react-icons/ai';

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
    icon: <BsCodeSlash />,
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
    icon: <BsCloudUpload />,
    color: '#4f759b',
  },
  {
    trait: 'Interactive',
    description: 'Strong preference for easy to use, intuitive UX/UI.',
    icon: <AiOutlineInteraction />,
    color: '#028090',
  },
];
export const test = ['All', 'React', 'Express', 'AWS'];
