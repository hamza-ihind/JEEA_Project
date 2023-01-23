
import './App.scss';
import { useEffect } from 'react';

// aos : animate on scroll package
import AOS from 'aos';
import 'aos/dist/aos.css';


//Components

import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/Footer' ;
import Contact from './components/Contact/Contact' ;


function App() {
   useEffect(()=>{
    AOS.init();
   },[])

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
     <Contact/>
     <Footer/>
     
    
    </div>
  );
}

export default App;