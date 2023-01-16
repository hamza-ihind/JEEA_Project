<<<<<<< HEAD:frontend/src/App.js
import './App.scss';
=======
import './App.css';
import { useEffect } from 'react';

// aos : animate on scroll package
import AOS from 'aos';
import 'aos/dist/aos.css';


//Components
import JeeaPresentation from './components/jeeapresentation';
>>>>>>> 369c28e2051fa4540339639b789099704c8ee4b3:frontend/src/App.jsx
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/Footer' ;
import Contact from './components/Contact/Contact' ;


function App() {
   useEffect(()=>{
    AOS.init();
   },[])

  return (
<<<<<<< HEAD:frontend/src/App.js
    <div className="App">
      <Navbar />
      <Hero />
=======
    <div>
      <h1>
        JEEA
      </h1>
      <JeeaPresentation/>
>>>>>>> 369c28e2051fa4540339639b789099704c8ee4b3:frontend/src/App.jsx
    </div>
  );
}

export default App;
