import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo-container">
              {state.clicked ? (
                <div className="logo-red">
                  <Link className="name-red" to="/">
                    Daniel Kyman
                  </Link>
                  <Link to="/">Software Engineer</Link>
                </div>
              ) : (
                <div className="logo-black">
                  <Link className="name-black" to="/">
                    Daniel Kyman
                  </Link>
                  <Link to="/">Software Engineer</Link>
                </div>
              )}
              {/* <Link to="/">Daniel Kyman</Link> */}
            </div>
            <a className="git-icon" href="https://github.com/danielkyman">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <div className="menu">
              {state.clicked ? (
                <button
                  className="button-red"
                  disabled={disabled}
                  onClick={handleMenu}
                >
                  {state.menuName}
                </button>
              ) : (
                <button
                  className="button-black"
                  disabled={disabled}
                  onClick={handleMenu}
                >
                  {state.menuName}
                </button>
              )}
              {/* <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);
