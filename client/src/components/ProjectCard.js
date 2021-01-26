import React, { Fragment, useState } from "react";
import Popup from "./Popup";

const ProjectCard = (props) => {
  const project = props.project;

  const [state, setState] = useState({
    isOpen: false
  });

  let stackList = project.stack.map((item) => <li>{item}</li>);

  const toggle = () => {
    setState({ isOpen: !state.isOpen});
  }

  return (
    <Fragment>
      <Popup project={project} isOpen={state.isOpen} toggle={toggle} />
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            <div
              className={`card__picture card__picture--${project.name.replace(
                /\s+/g,
                ""
              )}`}
            >
              &nbsp;
            </div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                {project.name}
              </span>
            </h4>
            <p className="card__description">{project.description}</p>
            <div className="card__details">
              <ul>{stackList}</ul>
            </div>
          </div>
          <div
            className={`card__side card__side--back card__side--back-${project.name.replace(
              /\s+/g,
              ""
            )}`}
          >
            <div className="card__cta">
              <a href="#popup" className="btn btn--white" onClick={toggle}>
                See project
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectCard;
