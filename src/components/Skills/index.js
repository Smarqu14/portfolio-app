import React from 'react';
import { Logos } from '../../data/index';

const index = () => {
  return (
    <section className='skills__container'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      <div className='skills_inner-container'>
        <div className='technologies__icons'>
          {Logos.map((logo) => {
            return (
              <div>
                <p style={{ color: logo.color }}>{logo.technology}</p>{' '}
                {logo.icon}
              </div>
            );
          })}
        </div>

        <div className='skills__bar'>
          <p>Front-end</p>
          <div className='container'>
            <div className='skills frontend'>90%</div>
          </div>

          <p>FullStackJS</p>
          <div className='container'>
            <div className='skills fullstack'>80%</div>
          </div>

          <p>ReactJS</p>
          <div className='container'>
            <div className='skills react'>90%</div>
          </div>

          <p>Flask</p>
          <div className='container'>
            <div className='skills flask'>60%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
