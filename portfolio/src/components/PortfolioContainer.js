/* eslint-disable no-unused-vars */
import React, { useState  } from "react";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

// This is the function that will render the appropriate component


    const renderPage = () => {
        if (currentPage === "Home") {
            return <Home />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>{renderPage()}</div>
        </div>
    );
}
