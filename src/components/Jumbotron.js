import React from "react";
import "../styles/Jumbo.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <p className="lead">Clicking an image once to score points, but click the same image more than once and you lose!</p>
  </div>
</div>
);

export default Jumbotron;
