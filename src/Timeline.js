import React from 'react';
import './style.css';
import {timelineData} from './updates.js';

const Timeline = () => {
  return (
    <div id="Timeline">
      <section className="about-section">
        <h1 style={{ color: '#f7c14d' }}>Career Timeline</h1>
      </section>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-block ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-box">
                <h3>{item.title}</h3>
                <p className="timeline-subheading">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;



