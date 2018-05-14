import React from "react";
import "../styles/Section.css";

// By importing the Section.css file, it is added to the DOM whenever this component loads
const Section = props => (

  <div className="card" onClick={() => props.select(props.name)}>
    <div className="img-container">
      <img className="sea" alt={props.name} src={props.image} />
    </div>
  </div>



);

export default Section;
