import React from "react";

import { useForm } from "react-hook-form";

import axios from "axios";

const Contact = () => {
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
        <h5>Feel free to reach out.</h5>
        <div className="contact-form">
          {/* <h6>Name:</h6>
          <h6>Email:</h6>
          <h6>Message:</h6> */}
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
          <div className="references">
            <h5>References</h5>
            <p>
              “Clever rockstar of a coder with a magnetic personality and the
              strongest work ethic you will ever find in a candidate.”
            </p>
            <span>-Anthony K. (Team Lead)</span>
            <p>
              “Daniel is someone who always pushes for the best. He would be the
              first person I would think to partner with on any project and he
              is an ideal team mate.”
            </p>
            <span>-Vanshika P. (Peer/Colleague)</span>
            <p>
              “Daniel embraces challenges instead of avoiding them. When he
              worked on our team, he always insisted on doing things properly.
              He refused to take the easy way out. I admire his determination to
              maintain high standards and never compromise the project’s
              integrity.”
            </p>
            <span>-Zahid K. (Peer/Colleague)</span>
            <p>
              “Daniel is one of the strongest coders that I have met in my time
              at Lambda. I think he is a tremendously hard worker and an asset
              for any team.”
            </p>
            <span>-Mike C. (Peer/Colleague)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
