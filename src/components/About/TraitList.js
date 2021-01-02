import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { BsCloudUpload } from 'react-icons/bs';
import { IoIosLaptop } from 'react-icons/io';
import { AiOutlineInteraction } from 'react-icons/ai';

const TraitList = () => {
  const traits = [
    {
      trait: 'Fast',
      description: 'Fast load times and lag free interaction.',
      icon: <BsCodeSlash />,
    },
    {
      trait: 'Dynamic',
      description:
        "Websites don't have to be static, I love making pages come to life.",
      icon: <IoIosLaptop />,
    },
    {
      trait: 'Responsive',
      description: 'My layouts will work on any device, big or small.',
      icon: <BsCloudUpload />,
    },
    {
      trait: 'Interactive',
      description: 'Strong preference for easy to use, intuitive UX/UI.',
      icon: <AiOutlineInteraction />,
    },
  ];
  return (
    <>
      <ul className='about__traits'>
        {traits.map((item) => {
          return (
            <li>
              <div className='about__icon'>{item.icon}</div>
              <div className='about__info'>
                <h1>{item.trait}</h1>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TraitList;
