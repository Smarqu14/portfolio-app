import React from 'react';
import Codereview from '../../images/undraw_Code_review_re_woeb.svg';
import Programming from '../../images/undraw_programming_2svr.svg';

const Projects = () => {
  const projectsInformation = [
    { name: 'Test', information: 'Loreasdasdm' },
    { name: 'test2', information: 'asdasdasdlorem2' },
    { name: 'Test3', information: 'adasdadsasdasd' },
    { name: 'test4', information: '132123132' },
    { name: 'Test', information: 'Loreasdasdm' },
    { name: 'test2', information: 'asdasdasdlorem2' },
    { name: 'Test3', information: 'adasdadsasdasd' },
    { name: 'test4', information: '132123132' },
  ];

  return (
    <section className='projects__section'>
      <div className='title'>
        <h1>Projects</h1>
      </div>
      <div className='projects__container'>
        {projectsInformation.map((project) => {
          return (
            <div className='projects__item'>
              <h2>{project.name}</h2>
              <p>{project.information}</p>
              <img src={Programming} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
