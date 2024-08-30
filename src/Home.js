import React from 'react';
import { ReactTyped } from 'react-typed'; // Use ReactTyped
import './style.css'; // Link to the CSS file
import resume from './Images/Melbin P Roy (Resume).pdf';

const Home = () => {
    return (
        <div id="Home">
             <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav nav">
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
                    </div>
                </div>
            </nav>

            <div className="hero-section">
                <div className="content">
                    <h1><b>
                        <ReactTyped
                            strings={[
                                "Hi Welcome",
                                "I'm Melbin P Roy",
                                "Basicaly I'm a BackEnd Developer",
                            ]}
                            typeSpeed={100}
                            backSpeed={50}
                            backDelay={200}
                            startDelay={500}
                            loop={true}
                        />
                    </b></h1>
                    <h2>BackEnd Developer</h2>
                    <a href={resume} target="_blank" rel="noreferrer" className="cta-button">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
