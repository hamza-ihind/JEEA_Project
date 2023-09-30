import { useEffect, useState, useContext } from "react";
import { Route, Routes, useLocation } from "react-router";
import AuthRoute from "./components/AuthRoute";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/Error/Error";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ActivitiesPage from "./pages/ActivitiesPage/ActivitiesPage";
import ActivityPage from "./pages/ActivityPage/ActivityPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import BureauPage from "./pages/BureauPage/BureauPage";
import RecrutePage from "./pages/RecrutePage/RecrutePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import "./App.scss";

//Theme context
import { ThemeModeContext } from "./contexts/ThemeModeContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const { isDarkModeActive } = useContext(ThemeModeContext);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <div className={isDarkModeActive ? "App dark" : "App light"}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/Teams" element={<TeamsPage />} />
        <Route path="/Bureau" element={<BureauPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/Activities" element={<ActivitiesPage />} />
        <Route path="/Activities/:id" element={<ActivityPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Recrutement" element={<RecrutePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
