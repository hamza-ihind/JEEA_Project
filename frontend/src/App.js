<<<<<<< HEAD

import './App.scss';
import { useEffect } from 'react';
=======
import "./App.scss";
import { useEffect } from "react";
>>>>>>> e6dc29564c1734c9f9ac212d73ccf55adcec1e3e

// aos : animate on scroll package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
<<<<<<< HEAD

import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/Footer' ;
import Contact from './components/Contact/Contact' ;

=======
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Cjem from "./components/Section1/Cjem";
import Jeea from "./components/section2/Jeea";
>>>>>>> e6dc29564c1734c9f9ac212d73ccf55adcec1e3e

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
      <Hero/>
     <Contact/>
     <Footer/>
     
    
=======
      <Navbar />
      <Hero />
      <Cjem />
      <Jeea />
      <Contact />
      <Footer />
>>>>>>> e6dc29564c1734c9f9ac212d73ccf55adcec1e3e
    </div>
  );
}

export default App;