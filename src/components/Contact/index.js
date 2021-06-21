import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='section__contact'>
      <div>
        <div id='contact' className='title'>
          <h2>Contact</h2>
        </div>
        <div className='button-container'>
          <a
            href='mailto:steveantonio00@gmail.com?Subject=I am interested in a website'
            target='_top'
          >
            <button>Let's work together</button>
          </a>
        </div>
        <div className='icon-container'>
          <a href='#'>
            <AiOutlineArrowUp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
