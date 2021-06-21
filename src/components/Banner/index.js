import React from 'react';
import Typed from 'react-typed';

import futuristic from '../../images/futuristic.gif';

const Banner = () => {
  return (
    <div className='banner__container'>
      <div className='banner__content'>
        <div className='banner__left'>
          <h1>
            Hi. My name is <span className='name'>Steve Marquez</span>
          </h1>
          <p className='banner-typed-text'>
            I am{' '}
            <Typed
              strings={[
                'a fullstack web developer.',
                'passionate about technology.',
                'an entrepreneur.',
              ]}
              typeSpeed={80}
              backSpeed={80}
              loop
            />{' '}
          </p>
          <button>View my work</button>
        </div>
        <div className='banner__right'>
          <img src={futuristic} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
