import React, { Component } from "react";
import Header from "./Components/Header.js";
import Characters from "./Components/Characters.js";
import characters from "../src/Components/characters.json";
import "../src/Styles/App.css";

function shuffleChar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  //Set the state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    correctIncorrect:
      "Try to click each character without clicking any single one twice.",
    clicked: [],
  };

  handleClick = (id) => {
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
      correctIncorrect:
        "Try to click each character without clicking any single one twice.",
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 12) {
      this.setState({
        correctIncorrect:
          "You got all twelve! Click any character to play again.",
      });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You lost! Click any character to play again.",
      clicked: [],
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleChar(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
    return (
      <div className="wrapper">
        <Header
          title="Arrested Development Clicky Game"
          correctIncorrect={this.state.correctIncorrect}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className="charContainer">
          {this.state.characters.map((char) => (
            <Characters
              handleClick={this.handleClick}
              id={char.id}
              image={char.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
