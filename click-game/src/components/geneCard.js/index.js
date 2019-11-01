import React from "react";
import "./style.css";

function geneCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <span onClick={() => props.clicked()} className="update">
        <img alt={props.name} src={props.image} />
        
        </span>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default geneCard;