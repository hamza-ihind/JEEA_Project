import "./App.scss";
import { useEffect } from "react";
<<<<<<< HEAD
import AOS from "aos";
import "aos/dist/aos.css";

=======

// aos : animate on scroll package
import AOS from "aos";
import "aos/dist/aos.css";

//Components
>>>>>>> 2f91801f3b8919fa034e7db0f75b8f92c55c20f8
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
<<<<<<< HEAD
import Cjem from "./components/Cjem/Cjem";
import Jeea from "./components/Jeea/Jeea";
=======
import Cjem from "./components/Section1/Cjem";
import Jeea from "./components/section2/Jeea";
import Cards from "./components/section3/cards";
>>>>>>> 2f91801f3b8919fa034e7db0f75b8f92c55c20f8

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
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
