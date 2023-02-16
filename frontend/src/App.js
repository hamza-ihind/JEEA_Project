import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import AOS from "aos";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import ServicesPage from "./components/ServicesPage/ServicesPage";

import "./App.scss";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Navbar toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
