import React, { useState } from 'react';
import "../styles/Experience.css";
import experience from "../helpers/ExperienceList.js";

function ExperienceCard({ experience }) {
    return (
      <div className="timeline mt-5">
        <div className="row timeline-container pt-5">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${experience.image})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <h2 style={{ color: '#efefef', paddingTop: '2%' }}>{experience.org}</h2>
                <h3 style={{ color: '#efefef', fontSize: '1rem' }}>{experience.role}</h3>
                <h3 className="sourcesanspro-text" style={{ fontStyle: 'italic' }}>{experience.duration}</h3>
                <div className="d-none d-sm-block mt-auto mb-auto">
                  <a className="btn btn-skills mx-0" style={{ maxWidth: '8rem', minWidth: '50px' }} href={experience.link}>
                    <img src={experience.logo} alt={`${experience.org} Logo`} className="timeline-icon" loading="lazy" />
                  </a>
                </div>
              </div>
              <div className="flip-card-back">
                <h2 style={{ color: '#efefef', paddingTop: '2%' }}>{experience.role}</h2>
                <h3 className="sourcesanspro-text">{experience.skills}</h3>
                <ul>
                  {experience.bullets.map((item, idx) => (
                    <li key={idx} className="sourcesanspro-text">{item}</li>
                  ))}
                </ul>
                <div className="col-12 text-end text-sm-start">
                  <a className="btn btn-contact" href={experience.link}>View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default function ExperienceSection() {
    return (
      <section id="experience">
        <div className="container pt-5">
          <h1 className="section-title">Experience</h1>
          <div className="line-break" style={{ backgroundColor: '#ffffff' }}></div>
            <div className="timeline">
            {experience.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>
    );
  }