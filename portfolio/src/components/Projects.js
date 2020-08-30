import React from "react";

import { gsap } from "gsap";

import contributions from "../images/contributions.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-content">
        <h5>Recent Contributions</h5>
        <a className="contribution-map" href="https://github.com/danielkyman">
          <img
            // className="contribution-map"
            src={contributions}
            alt="github-contributions"
          />
        </a>
        <div className="projects-actual">
          <div className="project-one">
            <h5>Key Conservation</h5>
            <ul>
              <li>
                Collaborated with a team of 5 full stack software developers
                with a goal of revamping out-dated functionality of an existing
                React Native code base.
              </li>
              <li>
                Boosted efficieny by 500% by reconstructing a new back end using
                Express and Postgres.
              </li>
              <li>
                Implemented additional React Native components to revise
                existing UI and improve end user experience.
              </li>
            </ul>
            <h6>Tech:</h6>
            <p>React Native, Express, Postgres, Knex, JSON Web Token</p>
          </div>
          <div className="project-two">
            <h5>React Blog / Portfolio</h5>
            <ul>
              <li>
                Individually constructed a blog in the form of a single-page web
                application using the 3rd party content management service
                Contentful.
              </li>
              <li>
                Incorporated state management with a redux store to ensure all
                blog articles are rendered upon launch.
              </li>
              <li>
                Utilized Axios for all requests to the Contentful API ensuring
                end user never has to touch the source code.
              </li>
            </ul>
            <h6>Tech:</h6>
            <p>React, Redux, Redux-Thunk, Axios, SASS, Contentful</p>
          </div>
          <div className="project-three">
            <h5>Conways Game Of Life</h5>
            <ul>
              <li>pointOne</li>
              <li>pointOne</li>
            </ul>
            <h6>Tech:</h6>
            <p>
              Connecting conservation organizations that need funding and
              volunteers
            </p>
          </div>
          <div className="project-four">
            <h5>8-Bit Python CPU</h5>
            <ul>
              <li>pointOne</li>
              <li>pointOne</li>
            </ul>
            <h6>Tech:</h6>
            <p>
              Connecting conservation organizations that need funding and
              volunteers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
