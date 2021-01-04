import React, { useState } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <About />
      <Projects />
    </>
  );
};

export default App;
