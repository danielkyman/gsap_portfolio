import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

import { nodeFadeUp, nodeFadeDown, staggerIcons } from "./Animations";

//icons
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  let homeItemOne = useRef(null);
  let homeItemTwo = useRef(null);
  let homeItemThree = useRef(null);
  let homeItemFour = useRef(null);
  let homeItemPOne = useRef(null);
  let homeItemPTwo = useRef(null);
  let homeItemPThree = useRef(null);
  let homeItemPFour = useRef(null);
  let homeGroupOne = useRef(null);
  let iconOne = useRef(null);
  let iconTwo = useRef(null);
  let iconThree = useRef(null);
  let iconFour = useRef(null);

  // const handleEffectOn = (e) => {
  //   gsap.to(e, {
  //     duration: 0.5,
  //     y: -5,
  //     ease: "power1.inOut",
  //   });
  // };

  // const handleEffectOff = (e) => {
  //   gsap.to(e, {
  //     duration: 0.5,
  //     y: 5,
  //     ease: "power1.inOut",
  //   });
  // };

  useEffect(() => {
    nodeFadeUp(homeItemOne, homeItemTwo, homeItemThree, homeItemFour);
    nodeFadeDown(homeItemPOne, homeItemPTwo, homeItemPThree, homeItemPFour);
    staggerIcons(iconOne, iconTwo, iconThree, iconFour);
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="home-content">
          <div
            // onMouseEnter={() => handleEffectOn(iconOne)}
            // onMouseOut={() => handleEffectOff(iconOne)}
            className="home-item"
            ref={(e) => (homeGroupOne = e)}
          >
            <div className="home-icon" ref={(e) => (iconOne = e)}>
              <FontAwesomeIcon icon={faTools} size="3x" />
            </div>

            <h5 ref={(e) => (homeItemOne = e)}>Effective</h5>
            <p ref={(e) => (homeItemPOne = e)}>
              Solve complex problems with simple solutions
            </p>
          </div>
          <div className="home-item">
            <div className="home-icon" ref={(e) => (iconTwo = e)}>
              <FontAwesomeIcon icon={faBook} size="3x" />
            </div>

            <h5 ref={(e) => (homeItemTwo = e)}>Disciplined</h5>
            <p ref={(e) => (homeItemPTwo = e)}>
              Thrive in fast-paced multi-tasked environments
            </p>
          </div>
          <div className="home-item">
            <div className="home-icon" ref={(e) => (iconThree = e)}>
              <FontAwesomeIcon icon={faFire} size="3x" />
            </div>

            <h5 ref={(e) => (homeItemThree = e)}>Passionate</h5>
            <p ref={(e) => (homeItemPThree = e)}>
              Independently furthering knowledge with minimal direction and
              guidance
            </p>
          </div>
          <div className="home-item">
            <div className="home-icon" ref={(e) => (iconFour = e)}>
              <FontAwesomeIcon icon={faHandshake} size="3x" />
            </div>

            <h5 ref={(e) => (homeItemFour = e)}>Loyal</h5>
            <p ref={(e) => (homeItemPFour = e)}>
              Encouraging team members to grow while enhancing overall moral
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
