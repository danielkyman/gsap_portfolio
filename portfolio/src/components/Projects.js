import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import contributions from "../img/contributions.png";
import { fadeIn } from "./Animations";

const Projects = () => {
  let contributionMap = useRef(null);
  let projectOne = useRef(null);
  let projectTwo = useRef(null);
  let projectThree = useRef(null);
  let projectFour = useRef(null);

  const handleHoverOn = (node) => {
    gsap.to(node, {
      duration: 0.3,
      x: -5,
      ease: "power1.inOut",
    });
  };

  const handleHoverOff = (node) => {
    gsap.to(node, {
      duration: 0.3,
      x: 5,
      ease: "power1.inOut",
    });
  };

  useEffect(() => {
    fadeIn(contributionMap);
  });

  return (
    <div className="projects">
      <div className="projects-content">
        <h5>Recent Contributions</h5>
        <a
          className="contribution-map"
          href="https://github.com/danielkyman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            ref={(e) => {
              contributionMap = e;
            }}
            src={contributions}
            alt="github-contributions"
          />
        </a>
        <div className="projects-actual">
          <div
            className="project-one"
            ref={(e) => {
              projectOne = e;
            }}
            onMouseEnter={(e) => handleHoverOn(projectOne)}
            onMouseLeave={(e) => handleHoverOff(projectOne)}
          >
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
          <div
            className="project-two"
            ref={(e) => {
              projectTwo = e;
            }}
            onMouseEnter={(e) => handleHoverOn(projectTwo)}
            onMouseLeave={(e) => handleHoverOff(projectTwo)}
          >
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
                end users never have to touch source code.
              </li>
            </ul>
            <h6>Tech:</h6>
            <p>React, Redux, Redux-Thunk, Axios, SASS, Contentful</p>
          </div>
          <div
            className="project-three"
            ref={(e) => {
              projectThree = e;
            }}
            onMouseEnter={(e) => handleHoverOn(projectThree)}
            onMouseLeave={(e) => handleHoverOff(projectThree)}
          >
            <h5>Conways Game Of Life</h5>
            <ul>
              <li>
                Recreated a React application based off the cellular automata
                computer science classic, Conways Game of Life.
              </li>
              <li>
                Integrated a JavaScript algorithm that computes the binary state
                of each cells 8 neighboring points during each iteration of the
                simulation life cycle.
              </li>
              <li>
                Extrapolated results are used to render the appropriate rows and
                columns at user defined intervals.
              </li>
            </ul>
            <h6>Tech:</h6>
            <p>React, Node-SASS</p>
          </div>
          <div
            className="project-four"
            ref={(e) => {
              projectFour = e;
            }}
            onMouseEnter={(e) => handleHoverOn(projectFour)}
            onMouseLeave={(e) => handleHoverOff(projectFour)}
          >
            <h5>Python 8-Bit CPU Emulator</h5>
            <ul>
              <li>
                Developed an 8-bit memory address CPU emulator with 256 bytes of
                RAM and 8 general purpose registers based on the von Neumann
                model.
              </li>
              <li>
                Incorporated decode functionality so that machine instructions
                are loaded from an external file.
              </li>
              <li>
                Built a standardized ALU which includes ADD, SUB, MUL, and DIV
                along with 11 other instructions modeling a general purpose
                reduced instruction set computer architecture.
              </li>
            </ul>
            <h6>Tech:</h6>
            <p>Python, Assembly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
