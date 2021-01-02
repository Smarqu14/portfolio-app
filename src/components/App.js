import React, { useState } from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Banner />
      <Navbar />
    </>
  );
}

export default App;
