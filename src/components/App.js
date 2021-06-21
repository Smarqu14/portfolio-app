import React, { useState } from 'react';

import Banner from './Banner';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Skills from './Skills';

import { projectsInformation, test } from '../data';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects projectsInformation={projectsInformation} test={test} />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
