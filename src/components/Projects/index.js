import React, { useState } from 'react';
import lego from '../../images/lego.png';

import CategoryList from './CategoryList.js';

const Projects = ({ projectsInformation, category }) => {
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
    <div className='projects__section'>
      <div id='projects' className='title'>
        <h2>Projects</h2>
      </div>
      <div className='category__container'>
        <CategoryList
          category={category}
          projectsInformation={projectsInformation}
          isSelected={isSelected}
        />
      </div>
      <div className='projects__container'>
        {results.length
          ? results.map((project) => {
              return (
                <div className='projects__item'>
                  <a href={project.link} target='_blank'>
                    <h2>{project.name}</h2>
                    <p>{project.information}</p>
                    <div>
                      <img src={project.src} alt='imagecodie' />
                    </div>
                  </a>
                </div>
              );
            })
          : projectsInformation.map((project) => {
              return (
                <div className='projects__item'>
                  <a href={project.link} target='_blank'>
                    <h2>{project.name}</h2>
                    <p>{project.information}</p>
                    <div>
                      <img src={project.src} alt='imagecodie' />
                    </div>
                  </a>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Projects;
