import React from 'react';
import { useEffect, useState } from 'react';

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
      <div className='logo'>Logo</div>
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
