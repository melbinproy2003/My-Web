import React from 'react';
import { ReactTyped } from 'react-typed'; // Use ReactTyped
import './style.css'; // Link to the CSS file
import resume from './Images/Melbin P Roy (Resume).pdf';

const Home = () => {
    return (
        <div id="Home">
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
                    <a href={resume} rel="noreferrer" className="cta-button">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
