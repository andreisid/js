import React from "react";

//Stateless Functional Component

const NavBar = props => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
