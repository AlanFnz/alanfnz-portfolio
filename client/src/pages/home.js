import React, { Fragment } from "react";
// Style
import "./home.css";
// Data
import projects from '../data/projects.json';
// Components
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {

  let projectsMarkup = projects.map((project) => (
    <ProjectCard project={project} />
  ))

  // let projectsMarkup = projects.map((project) => (
  //   <ProjectCard project={project} />
  // ))

  return (
    <Fragment>
      <Navigation />
      <header className="header" id="section-header">
        <div className="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Alan Fernandez</span>
            <span className="heading-primary--sub">Full Stack Developer</span>
          </h1>

          <a href="#section-projects" className="btn btn--white btn--animated">
            See projects
          </a>
        </div>
      </header>
      <main>
        <section className="section-projects" id="section-projects">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Projects</h2>
          </div>
          <div className="row">
            {projectsMarkup}
          </div>
        </section>
        <section className="section-contact" id="section-contact">
          <div className="row">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
