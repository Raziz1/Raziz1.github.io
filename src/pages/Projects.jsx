import React, { useState } from 'react';
import "../styles/Projects.css";
import projects from "../helpers/ProjectList.js";
import ExternalLinkImage from "../assets/external-link.png"

function Projects() {
  const [filter, setFilter] = useState('hardware');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.group === filter);

    const filters = [
      { key: 'hardware', label: 'Hardware', icon: 'memory' },
      { key: 'games', label: 'Games', icon: 'sports_esports' },
      { key: 'other', label: 'Other', icon: 'terminal' },
      { key: 'music', label: 'Music', icon: 'piano' },
    ];
    
  return (
    <>
      <section id="projects">
        <div className="container pt-5">
          <h1 className="section-title" style={{color: '#383838'}}>Projects</h1>
          <div className="line-break" style={{backgroundColor: '#978249'}}></div>
          
          {/* Filter Buttons */}
          <div className="btn-group my-3" role="group">
            {filters.map(({ key, label, icon }) => (
              <button
                key={key}
                className={`btn btn-projects ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                <span className="align-middle material-icons-outlined" style={{ fontSize: '3rem' }}>
                  {icon}
                </span> {label}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className={`row ${filter === 'games' ? 'g-0' : 'g-4'}`}>
            {filteredProjects.map(project => {
              if (filter === 'games') {
                // Render large horizontal card
                return (
                  <div key={project.id} className="card projects-large-cards mb-3 card-container">
                    <div className="row g-0">
                      <div className="col-lg-5 d-flex flex-column justify-content-start mb-3">
                        <div className="card-body-large-cards">
                          <h2 style={{ color: '#383838' }}>{project.title}</h2>
                          <p className="card-text">{project.description}</p>
                        </div>
                        <div className="badges-group-large">
                          <a href={project.link}>
                            <span className="badge projects-link-badge">
                              <img
                                src={ExternalLinkImage}
                                className="projects-badge-icons"
                              />
                            </span>
                          </a>
                          <span className="badge skill-badge">{project.badge_1}</span>
                          <span className="badge skill-badge">{project.badge_2}</span>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <img className={project.imageType} src={project.image} alt={project.title} loading="lazy"/>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // Render standard small vertical card
                return (
                  <div key={project.id} className="col-lg-4 mb-2 card-container">
                    <div className="card projects-small-cards">
                      <img src={project.image} alt={project.title} id={project.imageType} className="small-cards-img" loading="lazy"/>
                      <div className="card-body">
                        <h2>{project.title}</h2>
                        <p className="card-text">{project.description}</p>
                      </div>
                      <div className="badges-group-small">
                        {project.group === 'music' ? (
                          <audio controls preload="none">
                            <source src={project.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        ) : (
                          <>
                            <a href={project.link}>
                              <span className="badge projects-link-badge">
                                <img src={ExternalLinkImage} className="projects-badge-icons" />
                              </span>
                            </a>
                            <span className="badge skill-badge">{project.badge_1}</span>
                            <span className="badge skill-badge">{project.badge_2}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>

        {/* SVG divider */}
      <section className="divider" id="projects-divider" style={{backgroundColor: '#383838'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,208C672,213,768,171,864,176C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg>
      </section>
    </>
  );
}


export default Projects;
