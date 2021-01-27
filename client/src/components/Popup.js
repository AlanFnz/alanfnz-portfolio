import React, { Fragment } from "react";
// Video
import beatmonMp4 from "../img/beatmon-video.mp4";
import gearwavesMp4 from "../img/gearwaves-video.mp4";
import ixtlanMp4 from "../img/ixtlan-clothing-video.mp4";

const Popup = (props) => {
  const { project, isOpen, toggle } = props;
  const videoSrc =
    project.name === "Beatmon"
      ? beatmonMp4
      : project.name === "Gearwaves"
      ? gearwavesMp4
      : ixtlanMp4;

  const EmbedVideo = function (props) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
         <video
           loop
           muted
           autoplay
           playsinline
           src="${props.src}"
           class="${props.className}"
         />,
       `,
        }}
      ></div>
    );
  };

  const sourceButtonsMarkup = project.sourceClient ? (
    <Fragment>
      <a
        href={project.sourceClient}
        className="btn btn--primary u-margin-left-small btn--popup"
        target="_blank" rel="noreferrer"
      >
        Client Code
      </a>
      <a
        href={project.sourceAPI}
        className="btn btn--primary u-margin-left-small btn--popup"
        target="_blank" rel="noreferrer"
      >
        API Code
      </a>
    </Fragment>
  ) : (
    <a
      href={project.source}
      className="btn btn--primary u-margin-left-small btn--popup"
      target="_blank" rel="noreferrer"
    >
      Source code
    </a>
  );

  return (
    <div className={`popup ${isOpen ? "popup--open" : ""}`} id="popup">
      <div className="popup__content">
        <div className="popup__top">
          <EmbedVideo src={videoSrc} className="popup__video" />
        </div>
        <div className="popup__bottom">
          <div className="popup__close-background">&nbsp;</div>
          <div className="popup__close" onClick={toggle}>
            &times;
          </div>
          <h2 className="heading-secondary u-margin-bottom-small">
            {project.name}
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {project.summary}
          </h3>
          <p className="popup__text">{project.description}</p>
          <a href={project.live} className="btn btn--primary btn--popup" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          {sourceButtonsMarkup}
        </div>
      </div>
    </div>
  );
};

export default Popup;
