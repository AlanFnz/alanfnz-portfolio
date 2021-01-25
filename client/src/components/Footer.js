import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">

        <picture className="footer__logo">
          <source srcSet="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)" />
            <img srcSet="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png" />
        </picture>

      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item"><a href="#" className="footer__link">Email</a></li>
              <li className="footer__item"><a href="#" className="footer__link">LinkedIn</a></li>
              <li className="footer__item"><a href="#" className="footer__link">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built in React + Node.js by <a href="#" className="footer__link">Alan Fernandez</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
