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
                <p>{logo.technology}</p> {logo.icon}
              </div>
            );
          })}
        </div>

        <div className='skills__bar'>
          <p>Front-end</p>
          <div className='container'>
            <div className='skills html'>90%</div>
          </div>

          <p>FullStackJS</p>
          <div className='container'>
            <div className='skills css'>80%</div>
          </div>

          <p>ReactJS</p>
          <div className='container'>
            <div className='skills js'>90%</div>
          </div>

          <p>Flask</p>
          <div className='container'>
            <div className='skills php'>60%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
