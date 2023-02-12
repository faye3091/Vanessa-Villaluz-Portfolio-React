import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./AboutMePage";
import Contact from "./ContactPage";
import Portfolio from "./PortfolioPage";
import Resume from "./ResumePage";

export default function PortfolioComponent() {
    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "Resume") {
            return <Resume />;
          }
          if (currentPage === "Portfolio") {
            return <Portfolio />;
          }
          if (currentPage === "Contact") {
            return <Contact />;
          }
          return <AboutMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="flex-column justify-flex-start min-100-vh">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="container portfolio-content">{renderPage()}</div>
            <Footer />
        </div>
    )
}