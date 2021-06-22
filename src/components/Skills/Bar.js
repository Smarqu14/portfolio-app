import React from 'react';

const Bar = () => {
  const information = [
    {
      technology: 'Front-end',
      percentage: '90%',
      class: 'frontend',
    },
    {
      technology: 'React',
      percentage: '90%',
      class: 'react',
    },
    {
      technology: 'FullStackJs',
      percentage: '80%',
      class: 'fullstack',
    },
    {
      technology: 'Flask',
      percentage: '60%',
      class: 'flask',
    },
  ];

  return (
    <div className='skills__bar'>
      {information.map((info) => {
        return (
          <>
            <p>{info.technology}</p>
            <div className='container'>
              <div className={`skills ${info.class}`}>{info.percentage}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Bar;
