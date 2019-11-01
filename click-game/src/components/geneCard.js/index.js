import React from "react";
import "./style.css";




function geneCard(props) {
  return (
 
      <div className="img-container">
      <span onClick={() => props.clickedGene(props.clicked)}>
       <img src={props.image} className="img-fluid" alt="Responsive" style={{width: "300px", height: "250px"}}/>
      </span>
    </div>
  
  );
}

export default geneCard;