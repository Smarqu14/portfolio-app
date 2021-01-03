import React from 'react';
import TraitList from './TraitList';
import PersonalInfo from './PersonalInfo';
import myPhoto from '../../images/myphoto.JPG';

const About = () => {
  return (
    <section className='about__section'>
      <div className='about__title'>
        <h1>About</h1>
      </div>
      <TraitList />
      <PersonalInfo />
    </section>
  );
};

export default About;
