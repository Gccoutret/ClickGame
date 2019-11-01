import React from 'react';
import GeneCard from './components/geneCard.js'
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import genewilders from './genewilder.json';

class App extends React.Component {

  state= {
    genewilders,
    score:0,
    highScore:0,
    clicked: false
  }

  clickGene = (clicked) => {
    if(clicked){
      if(this.state.score > this.state.highScore){
        this.setState({highScore: this.state.score});
      }
    } else {
      var updateScore = this.state.score;
      this.setState({
        score: updateScore+1,
        genewilders: this.randomize(this.state.genewilders)
      });
      this.state.clicked = true;
    }console.log(this.state.clicked)
    console.log(this.state.score)
  }
  


  randomize = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
  }
  
  resetGame = () => {
    this.setState({
      score: 0,
      images: this.randomize(this.state.genewilders)
    })
  }



  render() {
    return (
      <Wrapper>
        <Title>Gene Wild!</Title>
        {
          this.randomize(this.state.genewilders).map(card => (
          <GeneCard
            clicked={this.state.clicked}
            clickedGene={this.clickGene}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
