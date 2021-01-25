import React from "react";

const Popup = (props) => {
  const { project, isOpen, toggle } = props;

  return (
    <div class={`popup ${isOpen ? 'popup--open' : ''}`} id="popup">
      <div class="popup__content">
        <div class="popup__left">
          <div id="popup-img1" alt={`${project.name} photo`} class="popup__img"></div>
          <div id="popup-img2"  alt={`${project.name} photo`} class="popup__img"></div>
        </div>
        <div class="popup__right">
          <div class="popup__close" onClick={toggle}>&times;</div>
          <h2 class="heading-secondary u-margin-bottom-small">{project.name}</h2>
          <h3 class="heading-tertiary u-margin-bottom-small">{project.description}</h3>
          <p class="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus. Nunc sed blandit libero volutpat sed cras ornare. Scelerisque fermentum dui faucibus in ornare quam. Non quam lacus suspendisse faucibus. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
          </p>
          <a href="#" class="btn btn--primary btn--popup">Live Demo</a>
          <a href="#" class="btn btn--primary u-margin-left-small btn--popup">Source code</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;