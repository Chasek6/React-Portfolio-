import React from "react";

function NavTaps({currentPage, HandlePageChange}) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#Home"
                    onClick={() => HandlePageChange("Home")}
                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}
                >
                    Home
                </a>
                <a
                    href="#about"
                    onClick={() => HandlePageChange("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => HandlePageChange("Projects")}
                    className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => HandlePageChange("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}