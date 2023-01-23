import "./App.scss";
import { useEffect } from "react";

// aos : animate on scroll package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Cjem from "./components/Section1/Cjem";
import Jeea from "./components/section2/Jeea";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cjem />
      <Jeea />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;