import React, { Component } from 'react';
import Nav from './Components/Nav';
import Characters from "./Components/Characters";
import Title from "./Components/Title";
import characters from "./characters.json";
import './App.css';


function shuffleChar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  //Set the state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You lost!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleChar(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
    <div className='wrapper'>
        <Nav
        title='Arrested Development Clicky Game'
        score={this.state.currentScore}
        topScore={this.state.topScore}
        correctIncorrect={this.state.correctIncorrect}
        />

        <Title>Try to click each character without clicky any single one twice</Title>

      <div className='charContainer'>  
        {this.state.characters.map(char => (
            <Characters 
            handleClick={this.handleClick}
            id={char.id}
            image={char.image}
            />
          ))
        }
      </div>
    </div>
    );
  }
}

export default App;
