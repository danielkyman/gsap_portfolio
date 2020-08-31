import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h5>Feel free to reach out.</h5>
        <div className="contact-form">
          <h6>Name:</h6>
          <h6>Email:</h6>
          <h6>Message:</h6>
        </div>
        <div className="references">
          <h5>References</h5>
          <p>
            “Clever rockstar of a coder with a magnetic personality and the
            strongest work ethic you will ever find in a candidate.”
          </p>
          <cite>-Anthony K. (Team Lead)</cite>
          <p>
            “Daniel is someone who always pushes for the best. He would be the
            first person I would think to partner with on any project and he is
            an ideal team mate.”
          </p>
          <cite>-Vanshika P. (Peer/Colleague)</cite>
          <p>
            “Daniel embraces challenges instead of avoiding them. When he worked
            on our team, he always insisted on doing things properly. He refused
            to take the easy way out. I admire his determination to maintain
            high standards and never compromise the project’s integrity.”
          </p>
          <cite>-Zahid K. (Peer/Colleague)</cite>
          <p>
            “Daniel is one of the strongest coders that I have met in my time at
            Lambda. I think he is a tremendously hard worker and an asset for
            any team.”
          </p>
          <cite>-Mike C. (Peer/Colleague)</cite>
        </div>
      </div>
    </div>
  );
};

export default Contact;
