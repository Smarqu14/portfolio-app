import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../../images/Steve codes (1).png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 790) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let head = ['navbar'];
  if (scrolled) {
    head.push('scrolled');
  }

  return (
    <nav className={head.join(' ')}>
      <div className='logo'>
        <img src={logo} alt='logo' height='300px' width='400px' />
      </div>
      <div className='nav-items'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Portfolio</a>
        <a href='#'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
