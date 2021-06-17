import React from 'react';
import Chart from './Chart';

const index = () => {
  return (
    <section className='skills__container'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      {/* <Chart /> */}
      <div>
        <p>HTML</p>
        <div className='container'>
          <div className='skills html'>90%</div>
        </div>

        <p>CSS</p>
        <div className='container'>
          <div className='skills css'>80%</div>
        </div>

        <p>JavaScript</p>
        <div className='container'>
          <div className='skills js'>65%</div>
        </div>

        <p>PHP</p>
        <div className='container'>
          <div className='skills php'>60%</div>
        </div>
      </div>
    </section>
  );
};

export default index;
