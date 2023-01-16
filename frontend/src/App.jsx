import './App.css';
import { useEffect } from 'react';

// aos : animate on scroll package
import AOS from 'aos';
import 'aos/dist/aos.css';


//Components
import JeeaPresentation from './components/jeeapresentation';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer' ;
import Contact from './components/Contact/Contact' ;


function App() {
   useEffect(()=>{
    AOS.init();
   },[])

  return (
    <div>
      <h1>
        JEEA
      </h1>
      <JeeaPresentation/>
    </div>
  );
}

export default App;
