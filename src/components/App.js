import React, { useState } from 'react';

import Banner from './Banner';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Luke from './Luke';

import { projectsInformation, test } from '../data';

const App = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <About />
      <Projects projectsInformation={projectsInformation} test={test} />
      <Contact />
      <Footer />
      <Luke />
    </>
  );
};

export default App;
