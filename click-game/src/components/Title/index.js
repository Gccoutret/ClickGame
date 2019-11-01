import React from "react";
import "./style.css";

function Title(props) {
  return <div>
  <h1 className="title">{props.children}</h1>
  <div className="scoreContainer">
  <h3 className="score">Score: {this.state.score}/12</h3>
  <h3 className="score">High Score: {this.state.highScore}</h3>
  </div>
  </div>
}

export default Title;
