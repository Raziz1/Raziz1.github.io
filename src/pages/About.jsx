import React, { useState, useEffect } from 'react';
import "../styles/About.css";

import McMasterIcon from "../assets/mac_crest.webp";
import MACFEIcon from "../assets/mac_formula.webp";
import NordSpaceIcon from "../assets/NordSpace_Logo.webp";
import ProgrammingIcon from "../assets/github.svg";

function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const carousel = document.getElementById('carouselExampleIndicators');

    const handleSlide = (event) => {
      const activeItem = event.target.querySelector('.carousel-item.active');
      const index = Array.from(event.target.querySelectorAll('.carousel-item')).indexOf(activeItem);
      setActiveSlide(index);
    };

    carousel.addEventListener('slid.bs.carousel', handleSlide);

    return () => {
      carousel.removeEventListener('slid.bs.carousel', handleSlide);
    };
  }, []);

  const highlightText = (text, index) => {
    return (
      <span className={activeSlide === index ? 'highlight' : ''}>
        {text}
      </span>
    );
  };

  return (
    <>
      <section id="about">
        <div className="container pt-5">
          <div className="row justify-content-around align-items-center">
            <div className="col-sm-7">
              <h1 className="section-title" style={{ color: '#efefef' }}>Hello!</h1>
              <div className="line-break" style={{ backgroundColor: '#ffffff' }}></div>
              <p className="about-text">
                Hello! My name is <b>Rahim Aziz</b>, and I’m a third-year Electrical Engineering student at {highlightText("McMaster University", 0)}.
                I’m passionate about designing and building systems that bridge the gap between hardware and software.
              </p>
              <p className="about-text">
                This summer, I’ll be joining {highlightText("NordSpace", 1)} as an Electrical Intern.
                Previously, I worked as a Hardware Development Intern at Ford and Ciena, where I gained experience in PCB design, hardware validation, and embedded systems development.
                Outside of work, I’m the High Voltage Subteam Lead for McMaster’s {highlightText("Formula Electric", 2)} racing team, where I help design and implement vehicle safety and power systems.
              </p>
              <p className="about-text">
                In my free time, you’ll find me working on {highlightText("personal electronics projects", 3)}, playing the saxophone, or producing music.
              </p>
            </div>

            <div className="col-8 col-md-3">
              <div className="row justify-content-around align-items-center">
                <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" data-bs-interval="5000">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a className="btn btn-skills m-5" href='https://www.eng.mcmaster.ca/' role="button">
                        <img src={McMasterIcon} alt="McMaster Crest" className="intrest-image" loading="lazy" />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="btn btn-skills m-5" href='https://www.nordspace.com/' role="button">
                        <img src={NordSpaceIcon} alt="NordSpace Logo" className="intrest-image" loading="lazy" />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="btn btn-skills m-5" href='https://macfe.mcmaster.ca/' role="button">
                        <img src={MACFEIcon} alt="Formula Electric" className="intrest-image" loading="lazy" />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="btn btn-skills m-5" href='https://github.com/' role="button">
                        <img src={ProgrammingIcon} alt="GitHub Logo" className="intrest-image" style={{ filter: 'invert(1)' }} loading="lazy" />
                      </a>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="divider" id="projects-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#383838"
            fillOpacity="1"
            d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,218.7C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
}

export default About;
