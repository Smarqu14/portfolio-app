import React from 'react';

const TraitList = () => {
  const traits = ['Fast', 'Dynamic', 'Responsive', 'Interactive'];
  return (
    <>
      <ul className='about__traits'>
        {traits.map((trait) => {
          return <li>{trait}</li>;
        })}
      </ul>
    </>
  );
};

export default TraitList;
