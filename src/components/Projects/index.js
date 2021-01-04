import React, { useState } from 'react';
import Codereview from '../../images/undraw_Code_review_re_woeb.svg';
import Programming from '../../images/undraw_programming_2svr.svg';

import CategoryList from './CategoryList.js';

const Projects = ({ projectsInformation, test }) => {
  const [isToggled, setToggle] = useState(false);
  const [isCategory, setCategory] = useState('');

  const isSelected = (e) => {
    const category = e.target.attributes.category.value;
    setCategory(category);
  };

  const results = projectsInformation.filter((project) => {
    return project.category === isCategory;
  });

  return (
    <section className='projects__section'>
      <div className='title'>
        <h1>Projects</h1>
      </div>
      <div className='category__container'>
        <CategoryList
          test={test}
          projectsInformation={projectsInformation}
          isSelected={isSelected}
        />
      </div>
      <div className='projects__container'>
        {results.length
          ? results.map((project) => {
              return (
                <div className='projects__item'>
                  <h2>{project.name}</h2>
                  <p>{project.information}</p>
                  <div>
                    <img src={Programming} alt='imagecodie' />
                  </div>
                </div>
              );
            })
          : projectsInformation.map((project) => {
              return (
                <div className='projects__item'>
                  <h2>{project.name}</h2>
                  <p>{project.information}</p>
                  <div>
                    <img src={Programming} alt='imagecodie' />
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Projects;