import { useEffect, useState, useContext } from "react";
import { Route, Routes } from "react-router";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";

import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import RecrutePage from "./pages/RecrutePage/RecrutePage";

import "./App.scss";

//Theme context
import { ThemeModeContext } from "./contexts/ThemeModeContext";

function App() {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  return (
    <div className={isDarkModeActive ? "App dark" : "App light"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Teams" element={<TeamsPage />} />
        <Route path="/Activities" element={<ActivitiesPage />} />
        <Route path="/Recrutement" element={<RecrutePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
