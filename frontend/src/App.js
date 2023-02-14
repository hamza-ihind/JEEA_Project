import "./App.scss";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";

import { Route,Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'App dark' : 'App light'}>
      <Navbar toggleMode={toggleMode}/>
      <Hero isDarkMode={isDarkMode}/>
      <Cjem isDarkMode={isDarkMode}/>
      <Jeea isDarkMode={isDarkMode}/>
      <Services isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Error" element={<Error/>} />
        </Routes>
      <Footer/>
    </div>
    
   

  );
}

export default App;
