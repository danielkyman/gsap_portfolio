import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  return (
    <header>
      <div className="logo">
        <Link to="/">Daniel Kyman</Link>
      </div>
      <div className="menu">
        <button>Open/Close</button>
      </div>
    </header>
  );
};

export default withRouter(Header);
