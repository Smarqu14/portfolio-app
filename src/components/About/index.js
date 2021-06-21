import React from 'react';
import TraitList from './TraitList';
import PersonalInfo from './PersonalInfo';
import { traits } from '../../data/index';

const About = () => {
  return (
    <div className='about__section'>
      <div id='about' className='title'>
        <h1>About</h1>
      </div>
      <TraitList traits={traits} />
      <PersonalInfo />
    </div>
  );
};

export default About;
