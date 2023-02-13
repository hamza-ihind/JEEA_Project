import "./App.scss";
import { useEffect } from "react";
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

  return (
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
