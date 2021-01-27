import React, { useState } from "react";
import axios from 'axios';

const Contact = () => {
  const initialState = {
    name: "",
    mail: "",
    message: "",
    buttonText: "Send",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = state; 
    setState((prevState) => ({ ...prevState, buttonText: "Sending..."}))

    axios({
      url: '/message',
      method: 'post',
      data: {
        name,
        email,
        message
      },
    })
      .then(res => {
        if (res.data.status === 'success') {
          setState((prevState) => ({ ...prevState, buttonText: "Success! :)"}))
          window.setTimeout(() => {
            setState(initialState);
          }, 2500);
        } else {
          setState((prevState) => ({ ...prevState, buttonText: "Error! :("}))
          window.setTimeout(() => {
            setState(initialState);
          }, 2500);
        }
      })
      .catch(error => {
        console.log(error);
        setState((prevState) => ({ ...prevState, buttonText: "Error! :("}))
        window.setTimeout(() => {
          setState(initialState);
        }, 2500);
      });
    };

  return (
    <div className="contact">
      <div className="contact__form">
        <form  onSubmit={handleSubmit} className="form">
          <div className="u-margin-bottom-medium">
            <h2 className="heading-secondary">Get in contact</h2>
          </div>

          <div className="form__group">
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Full Name"
              id="name"
              value={state.name}
              handleChange={handleChange}
              required
            />
            <label for="name" className="form__label">
              Full Name
            </label>
          </div>

          <div className="form__group">
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Email"
              id="email"
              value={state.email}
              handleChange={handleChange}
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
              name="message"
              className="form__input form__input--textarea"
              placeholder="Message"
              id="message"
              value={state.message}
              handleChange={handleChange}
              resize="none"
              required
            />
            <label for="message" className="form__label">
              Message
            </label>
          </div>
          <div className="form__group">
            <button className="btn btn--primary">{state.buttonText}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
