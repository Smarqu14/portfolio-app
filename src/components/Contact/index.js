import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='section__contact'>
      <div>
        <div id='contact' className='title'>
          <h2>Contact</h2>
        </div>
        <div className='button-container'>
          <button>Let's work together</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
