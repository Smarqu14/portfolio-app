import React from 'react';
import TraitList from './TraitList';
import myPhoto from '../../images/myphoto.JPG';

const About = () => {
  return (
    <section className='about__section'>
      <div className='about__title'>
        <h1>About</h1>
      </div>
      <TraitList />

      <div className='test'>
        <div className='about__picture' />

        <div className='about__right'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim,
            nihil distinctio, pariatur laboriosam saepe officiis, tenetur
            explicabo sit placeat veritatis vero. Atque, nesciunt deserunt iste
            obcaecati adipisci error consectetur earum? Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Vero quibusdam eaque esse officia
            inventore rerum expedita culpa fugit veritatis dolorem, fuga quasi,
            blanditiis Lorem
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
