import React from 'react';
import { Logos } from '../../data/index';
import Bar from './Bar';

const index = () => {
  return (
    <div className='skills__container'>
      <div id='skills' className='title'>
        <h2>Skills</h2>
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
        <Bar />
      </div>
    </div>
  );
};

export default index;
