import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = props => (
  <nav id="navbar-example2" className="navbar fixed-top navbar-light bg-dark ">
    <ul className="nav nav-pills nav-justified" id='nav-comp'>
      <li className="nav-item">
      Clicky Game
      </li>
      <li className="nav-item">
      Click an image to start!
      </li>
      <li className="nav-item">
      <div className='score'>Score: {props.score}</div>
      </li>
      <li className="nav-item">
      <div className='score'>High Score: {props.topScore}</div>
      </li>
    </ul>
  </nav>
);

export default Navbar;
