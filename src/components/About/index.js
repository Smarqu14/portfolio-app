import React from 'react';
import TraitList from './TraitList';
import PersonalInfo from './PersonalInfo';

const About = () => {
  return (
    <section className='about__section'>
      <div className='title'>
        <h1>About</h1>
      </div>
      <TraitList />
      <PersonalInfo />
    </section>
  );
};

export default About;
