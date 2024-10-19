// App.js
import React from 'react';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import ViMi from './Components/Vision&mision'
import Msg from './Components/Msg';
import './App.css';
import Aboutc from './Components/Aboutc';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Aboutc />
      <ViMi/>
      <AboutUs />
      <Msg/>
      <Services/>
      <Contact/>
      <Footer />
      
    </div>
  );
}

export default App;
