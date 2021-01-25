import React, {useState} from "react";

const Navigation = () => {

  const [state, setState] = useState({
    navOpen: false,
  });

  const toggle = () => {
    setState({ navOpen: !state.navOpen});
  }

  return (
    <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" checked={state.isOpen} id="navi-toggle" />

    <label for="navi-toggle" className="navigation__button" onClick={toggle}>
      <span className={`navigation__icon ${state.navOpen ? 'navigation__icon-checked' : null}`}>&nbsp;</span>
    </label>

    <div className={`navigation__background ${state.navOpen ? 'navigation__background-checked' : null}`}>&nbsp;</div>

    <nav className={`navigation__nav ${state.navOpen ? 'navigation__nav-checked' : null}`}>
      <ul className="navigation__list">
        <li className="navigation__item" onClick={toggle}><a href="#section-header" className="navigation__link">About</a></li>
        <li className="navigation__item" onClick={toggle}><a href="#section-projects" className="navigation__link">Projects</a></li>
        <li className="navigation__item" onClick={toggle}><a href="#section-contact" className="navigation__link">Contact</a></li>
      </ul>
    </nav>
  </div>
  );
};

export default Navigation;
