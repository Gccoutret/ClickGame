import React from 'react';
import GeneCard from './components/geneCard.js'
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import genewilders from './genewilder.json';

class App extends React.Component {

  state= {
    genewilders
  }

  randomize = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
  }
  
  clicked = id => {
    alert("clicked!")
    this.setState({genewilders:this.randomize(this.state.genewilders)})
    // Filter this.state.friends for friends with an id not equal to the id being remo
    
  };


  render() {
    return (
      <Wrapper>
        <Title>Gene Wild!</Title>
        {
          this.randomize(this.state.genewilders).map(card => (
          <GeneCard
            clicked={this.clicked}
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
