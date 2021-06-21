import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='section__contact'>
      <div className='form__container'>
        <div id='contact' className='title'>
          <h1>Get In Touch </h1>
        </div>
        {/* <form className='form__contact' onSubmit={handleSubmit(onSubmit)}>
          <h3>Contact me </h3>
          <h4>Lets work together</h4>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <input
              name='firstName'
              placeholder='Enter your first name'
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstName && errors.firstName.type === 'required' && (
              <span>This is field required </span>
            )}
          </div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
              name='lastName'
              placeholder='Enter your last name'
              ref={register({ required: true, minLength: 2 })}
            />

            {errors.lastName && errors.lastName.type === 'required' && (
              <span>This field is required</span>
            )}
          </div>

          <div>
            <label htmlFor='number'>Phone Number</label>
            <input
              name='number'
              placeholder='Enter your phone number'
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.number && errors.number.type === 'required' && (
              <span>This field is required</span>
            )}
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              placeholder='Enter your email address'
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span>This field is required</span>
            )}
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              placeholder='Enter your message'
              name='message'
              tabindex='5'
              ref={register({ required: true, minLength: 2 })}
            />
            {errors.message && errors.message.type === 'required' && (
              <span>This field is required</span>
            )}
          </div>
          <div className='btn'>
            <input type='submit' />
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
