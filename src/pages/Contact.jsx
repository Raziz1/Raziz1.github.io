import React from 'react';
import '../styles/Contact.css';
import GithubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";

export default function ContactSection() {
  return (
    <>
      <section id="contact">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h1 className="section-title">Contact</h1>
              <h3 className="sourcesanspro-text" style={{ fontSize: '1.25rem', paddingBottom: '1rem' }}>
                Contact me here by sending me a message directly or find me on my social platforms below!
              </h3>
              <div className="text-center">
                <button className="social-buttons" onClick={() => window.location.href = 'https://github.com/Raziz1'}>
                  <img src={GithubIcon} alt="Github Logo" width="50rem" height="auto" />
                </button>
                <button className="social-buttons" onClick={() => window.location.href = 'https://www.linkedin.com/in/rahim-aziz'}>
                  <img src={LinkedInIcon} alt="Linkedin Logo" width="50rem" height="auto" />
                </button>
                <button className="social-buttons" onClick={() => window.location.href = 'mailto:rahimaziz31@gmail.com'}>
                  <img src="https://img.icons8.com/material-rounded/512/ffffff/mail.png" alt="Email Logo" width="50rem" height="auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-5" style={{ backgroundColor: '#212122' }}>
        <div className="container text-center">
          <div className="col-12 p-2">
            <h3 style={{ color: '#efefef', fontFamily: 'Source Sans Pro', fontSize: '1rem' }}>
              ⚙️ Designed by Rahim Aziz ⚙️
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
