import React from 'react';
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#212122'}}>
      <div className="container-fluid">
        <a href="#" className="navbar-brand" style={{ color: '#efefef', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '2rem' }}>
          Rahim Aziz
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#main-nav" 
          aria-controls="main-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="main-nav" className="collapse navbar-collapse justify-content-end align-center">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
