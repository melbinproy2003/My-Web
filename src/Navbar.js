import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Timeline">Career</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Project">Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Achievements">Achievements</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>

            <a href="#" className="fixed-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708z" />
                </svg>
            </a>
        </>
    );
};

export default Navbar;
