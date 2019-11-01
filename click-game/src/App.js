import React from 'react';
import GeneCard from './components/geneCard.js'
import './App.css';
import genewilders from './genewilder.json';
import Wrapper from './components/Wrapper'


class App extends React.Component {

  state= {
    genewilders,
    score:0,
    highScore:0,
  }

  clickGene = (id) => {
    console.log(id);
    const genewilders = this.state.genewilders.map(genewilder => {
      if(genewilder.id === id && genewilder.clicked === true){
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.score });
        }
        this.resetGame();
      } else if (genewilder.id === id && genewilder.clicked === false){
        var currentScore = this.state.score;
        genewilder.clicked = true;
        this.setState({score: currentScore + 1});
      }
      console.log(currentScore)
      return genewilder;
    })
    this.setState({genewilders});
  }
  

  // clickGene = (id) => {
  //   const genewilders = this.state.genewilders.map(genewilders=> {

  //   })
  //   if(clicked){
  //     if(this.state.score > this.state.highScore){
  //       this.setState({highScore: this.state.score});
  //     }
  //   } else{
  //     var updateScore = this.state.score;
  //     this.setState({
  //       score: updateScore+1,

  //       genewilders: this.randomize(this.state.genewilders)
  //     });
  //   }console.log(this.state.clicked)
  //   console.log(this.state.score)
  // }
  


  randomize = () => {
    for (let i = this.state.genewilders.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.state.genewilders[i], this.state.genewilders[j]] = [this.state.genewilders[j], this.state.genewilders[i]];
    }
    this.setState({genewilders});
  }
  
  resetGame = () => {
    this.setState({
      score: 0,
      images: this.randomize(this.state.genewilders)
    })
  }

  render() {
    return (
      <div>
      <div className="scoreContainer">
      <h3 className="score">Score: {this.state.score}/12</h3>
      <h3 className="score">High Score: {this.state.highScore}</h3>
      </div>
      
      <Wrapper>
        {this.state.genewilders.map(image => (
          <GeneCard 
            image={image.image}
            clickCard={this.clickGene}
            clicked={this.state.genewilders.clicked}
            randomize={this.randomize}
            id={image.id}
            key={image.id}
          />
        ))
        }
        </Wrapper>
        </div>
        
    
      );
    };
      
    
    
  
}

  


export default App;
