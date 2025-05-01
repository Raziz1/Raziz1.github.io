import React from 'react';
import '../styles/Skills.css';
import skills from "../helpers/SkillsList.js";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container pt-5">
        <h1 className="section-title">Skills</h1>
        <div className="line-break" style={{ backgroundColor: '#ffffff' }}></div>

        {Object.entries(skills).map(([category, icons], index) => (
          <div className="row mb-3" key={index}>
            <div className="col-lg-2 text-center text-lg-end mt-auto mb-auto">
              <h3 className="montserrat-text">{category}</h3>
            </div>
            <div className="col-lg-10 text-center text-lg-start">
              {icons.map((icon, i) => (
                <a key={i} className="btn btn-skills text-center" role="button">
                  <img src={icon.src} width="64px" height="64px" alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}