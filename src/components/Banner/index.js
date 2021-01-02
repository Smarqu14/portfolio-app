import React from 'react';
import Typed from 'react-typed';

import { motion } from 'framer-motion';

import feelingProud from '../../images/undraw_feeling_proud_qne1.svg';
import webDeveloper from '../../images/undraw_Freelancer_re_irh4.svg';
import appDevelopment from '../../images/undraw_progressive_app_m9ms.svg';

const Banner = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className='banner__container'>
      <div className='banner__content'>
        <div className='banner__left'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi. My name is <span className='name'>Steve Marquez</span>
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
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
          </motion.p>
          <motion.button>View my work</motion.button>
        </div>
        <div className='banner__right'>
          <motion.img
            src={feelingProud}
            alt='Feeling Proud of coding session'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <motion.img
            src={webDeveloper}
            alt='Web developer image'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <motion.img
            src={appDevelopment}
            alt='Mobile and web development'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
