import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-logo'>SteveCodes</div>
      <div className='nav-items'>
        <a href='/'>Home</a>
        <a href='/'>Projects</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
