import React, { useState } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import { projectsInformation, test } from '../data';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <About />
      <Projects projectsInformation={projectsInformation} test={test} />
      <About />
    </>
  );
};

export default App;
