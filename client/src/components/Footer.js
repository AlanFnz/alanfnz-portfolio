import React from "react";
import logo from '../img/logo-blue.svg';
import { ReactComponent as Logo } from '../img/logo-blue.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">


          <Logo className="footer__logo"/>
     
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#section-contact" className="footer__link">
                  Email
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.linkedin.com/in/alanfernadez11/" className="footer__link">
                  LinkedIn
                </a>
              </li>
              <li className="footer__item">
                <a href="https://github.com/AlanFnz" className="footer__link">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built in React + Node.js by{" "}
            <a href="https://www.linkedin.com/in/alanfernadez11/" className="footer__link">
              Alan Fernandez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
