import { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";

import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Home from "./pages/Home/Home";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";

import "./App.scss";

//Theme context
import { ThemeModeContext } from "./contexts/ThemeModeContext";

function App() {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "App dark" : "App light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Activities" element={<ActivitiesPage />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
