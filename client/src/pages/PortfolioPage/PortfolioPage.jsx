import React from "react";
import jsPDF from "jspdf";
import assets from "../../constants/assets";
import "./PortfolioPage.scss";

const Portfolio = () => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("PORTFOLIO", 10, 10);
    doc.addImage(assets.jeea_logo, "JPEG", 10, 20, 50, 50);
    doc.text("JUNIOR ENTREPRISE ENSA AGADIR", 10, 80);
    doc.save("portfolio.pdf");
  };

  return (
    <div className="portfolio-page">
      <div className="portfolio">
        <div className="portfolio__img">
          <img src={assets.jeea_logo} alt="LOGO" />
        </div>
        <div className="portfolio__text">JUNIOR ENTREPRISE ENSA AGADIR</div>
      </div>
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
};

export default Portfolio;
