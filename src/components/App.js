import React, { useState } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import About from './About';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <About />
    </>
  );
}

export default App;
