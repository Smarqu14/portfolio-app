import React from 'react';

const TraitList = ({ traits }) => {
  return (
    <>
      <ul className='about__traits'>
        {traits.map((item) => {
          return (
            <li>
              <div className='about__icon'>{item.icon}</div>
              <div className='about__info'>
                <h1>{item.trait}</h1>
                <p>{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TraitList;
