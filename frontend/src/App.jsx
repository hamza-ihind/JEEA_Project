import './App.css';
import { useEffect } from 'react';

// aos : animate on scroll package
import AOS from 'aos';
import 'aos/dist/aos.css';


//Components
import JeeaPresentation from './components/jeeapresentation';


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
