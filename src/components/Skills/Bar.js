import React from 'react';

const Bar = () => {
  const information = [
    {
      technology: 'Front-end',
      percentage: '90%',
    },
    {
      technology: 'FullStackJs',
      percentage: '80%',
    },
    {
      technology: 'React',
      percentage: '90%',
    },
    {
      technology: 'Flask',
      percentage: '60%',
    },
  ];

  return (
    <div className='skills__bar'>
      {information.map((info) => {
        return (
          <>
            <p>{info.technology}</p>
            <div className='container'>
              <div className='skills frontend'>{info.percentage}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bar;
