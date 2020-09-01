import React, { useRef, useEffect } from "react";

import { useForm } from "react-hook-form";

import axios from "axios";

import contactImg from "../img/contactImg.jpg";
import { fadeIn, classFadeUp, classFadeDown } from "./Animations";

const Contact = () => {
  let profileImage = useRef(null);

  useEffect(() => {
    fadeIn(profileImage);
    classFadeUp(".reference-quote");
    classFadeDown(".reference-name");
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(
      `Thank you ${data.name} for reaching out. I will do my best to get back to you as soon as possible!`
    );
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h5>Feel free to reach out</h5>
        <div className="contact-container">
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="name-input">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  ref={register({ required: true })}
                />
                <br />
                {errors.name && <span>Name is required</span>}
                <br />
              </div>
              <div className="email-input">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  ref={register({ required: true })}
                />
                <br />
                {errors.email && <span>Email is required</span>}
                <br />
              </div>
              <div className="message-input">
                <label htmlFor="message">Message</label>
                <br />
                <textarea name="message" ref={register({ required: true })} />
                <br />
                {errors.message && <span>Message is required</span>}
                <br />
              </div>
              <input type="submit" />
            </form>
          </div>
          <div
            className="contact-img"
            ref={(e) => {
              profileImage = e;
            }}
          >
            <img src={contactImg} alt="profile image" />
          </div>
        </div>
        <div className="references">
          <h5>References</h5>
          <p className="reference-quote">
            “Clever rockstar of a coder with a magnetic personality and the
            strongest work ethic you will ever find in a candidate.”
          </p>
          <p className="reference-name">-Anthony K. (Team Lead)</p>
          <p className="reference-quote">
            “Daniel is someone who always pushes for the best. He would be the
            first person I would think to partner with on any project and he is
            an ideal team mate.”
          </p>
          <p className="reference-name">-Vanshika P. (Peer/Colleague)</p>
          <p className="reference-quote">
            “Daniel embraces challenges instead of avoiding them. When he worked
            on our team, he always insisted on doing things properly. He refused
            to take the easy way out. I admire his determination to maintain
            high standards and never compromise the project’s integrity.”
          </p>
          <p className="reference-name">-Zahid K. (Peer/Colleague)</p>
          <p className="reference-quote">
            “Daniel is one of the strongest coders that I have met in my time at
            Lambda. I think he is a tremendously hard worker and an asset for
            any team.”
          </p>
          <p className="reference-name">-Mike C. (Peer/Colleague)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
