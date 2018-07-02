import React, { Component } from 'react';
import Nav from './Components/Nav';
import Characters from "./Components/Characters";
import characters from "./characters.json";


class App extends Component {
  //Set the state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  render() {
    return (
    <div>
        <Nav
        title='Clicky Game'
        score={this.state.currentScore}
        topScore={this.state.topScore}
        correctIncorrect={this.state.correctIncorrect}
        />

        {this.state.characters.map(char => (
          <Characters 
          id={char.id}
          image={char.image}
          />
        ))
      }
    </div>
    );
  }
}

export default App;
