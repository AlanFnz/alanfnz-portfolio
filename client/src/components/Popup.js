import React from "react";
// Video
import beatmonMp4 from '../img/beatmon-video.mp4';
import gearwavesMp4 from '../img/gearwaves-video.mp4';
import ixtlanMp4 from '../img/ixtlan-clothing-video.mp4';

const Popup = (props) => {
  const { project, isOpen, toggle } = props;
  const videoSrc = project.name === 'Beatmon' ? beatmonMp4 : project.name === 'Gearwaves' ? gearwavesMp4 : ixtlanMp4

  const EmbedVideo = function(props) {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
         <video
           loop
           muted
           autoplay
           playsinline
           src="${props.src}"
           class="${props.className}"
         />,
       ` }}></div>
    )
 }
  
  return (
    <div className={`popup ${isOpen ? 'popup--open' : ''}`} id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <EmbedVideo src={videoSrc} className="popup__video" />
        </div>
        <div className="popup__right">
          <div className="popup__close" onClick={toggle}>&times;</div>
          <h2 className="heading-secondary u-margin-bottom-small">{project.name}</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">{project.summary}</h3>
          <p className="popup__text">
            {project.description}
          </p>
          <a href="#" className="btn btn--primary btn--popup">Live Demo</a>
          <a href="#" className="btn btn--primary u-margin-left-small btn--popup">Source code</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;