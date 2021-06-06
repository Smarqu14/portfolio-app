import React from 'react';

const Luke = () => {
  let name = 'luke';
  let age = 23;
  let classmatesNames = ['Steve', 'Calvin', 'Christine'];
  let professor = { prof1: 'Anish', prof2: 'Dr.Khaled' };

  return (
    <div className='luke'>
      <h1>Hello my name is {name} </h1>
      <h2>I am {age}</h2>
      {classmatesNames.map((name) => (
        <h1>{name}</h1>
      ))}
      <p>My professor name is {professor.prof1}</p>
      <p>My professor name is {professor.prof2}</p>
    </div>
  );
};

export default Luke;
