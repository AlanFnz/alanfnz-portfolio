import React, { useState } from "react";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    mail: "",
    message: "",
  });

  return (
    <div className="contact">
      <div className="contact__form">
        <form action="#" className="form">
          <div className="u-margin-bottom-medium">
            <h2 className="heading-secondary">Get in contact</h2>
          </div>

          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Full Name"
              id="name"
              required
            />
            <label for="name" className="form__label">
              Full Name
            </label>
          </div>

          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              id="email"
              required
            />
            <label for="email" className="form__label">
              Email
            </label>
          </div>

          <div className="form__group">
            <textarea
              style={{ resize: "none"}}
              type="textarea"
              className="form__input form__input--textarea"
              placeholder="Message"
              id="message"
              resize="none"
              required
            />
            <label for="message" className="form__label">
              Message
            </label>
          </div>
          <div className="form__group">
            <button className="btn btn--primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
