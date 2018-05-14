import React from "react";
import "../styles/Jumbo.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="head">Memory</h1>
    <p className="lead">Click every image, but dont click the same image twice!</p>
  </div>
</div>
);

export default Jumbotron;
