import { useEffect, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import TeamsPage from "./pages/TeamsPage/TeamsPage";
import BureauPage from "./pages/BureauPage/BureauPage";
import RecrutePage from "./pages/RecrutePage/RecrutePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

import "./App.scss";
import assets from "./constants/assets";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <img src={assets.pattern} alt="pattern" className="pattern" />

        <div className="blue__blob"></div>
        <div className="orange__blob"></div>
        <div className="white__blob"></div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Teams" element={<TeamsPage />} />
          <Route path="/Bureau" element={<BureauPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* <Route path="/Admin" element={<AdminPage />} /> */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Recrutement" element={<RecrutePage />} />
          {/* <Route path="/signup" element={<SignupPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
