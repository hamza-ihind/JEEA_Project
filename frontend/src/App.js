import "./App.scss";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Cjem from "./components/Cjem/Cjem";
import Jeea from "./components/Jeea/Jeea";
import Services from "./components/Services/Services";

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
    </div>
  );
}

export default App;
