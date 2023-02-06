import "./App.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Cjem from "./components/Cjem/Cjem";
import Jeea from "./components/Jeea/Jeea";

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
