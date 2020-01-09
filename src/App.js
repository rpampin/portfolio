import React from 'react';
import './App.css';

import Home from './components/Home/Home.component';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';

function App() {
  return (
    <div className="main-container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
