import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import ocean from "./seaLife.json";
import "./app.css";
// import Wrapper from "./components/Wrapper";


class App extends Component {
  // Setting this.state.oceanto the sealife json array
  state = {
    ocean,
    chosen: [],
    score: 0,
    topScore: 0
  };

  
// Using Durstenfeld shuffle algorithm to radomize array after a click
// The Fisher-Yates algorithm works by picking one random element for each original array element, 
// and then excluding it from the next draw. Just like randomly picking from a deck of cards.
// This exclusion is done in a clever way (invented by Durstenfeld for use by computers) by swapping 
// the picked element with the current element, and then picking the next random element from the 
// remainder. For optimal efficiency, the loop runs backwards so that the random pick is simplified 
// (it can always start at 0), and it skips the last element because there are no other choices anymore.
// The running time of this algorithm is O(n).
  
shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

select = name => {
  if(this.state.chosen.indexOf(name) === -1) {
   this.state.score ++;
    if(this.state.score > this.state.topScore) {
      this.state.topScore++
    }
    this.setState({chosen: this.state.chosen.concat(name),
                   score: this.state.score,
                   topScore: this.state.topScore
    });
   
  }
  else {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      chosen: []
    });
  }
        
    this.shuffleArray(ocean);
};


  render() {
    return (
      <div>
        
        <Navbar 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className= 'container'>
        {this.state.ocean.map(creature => (
          <Section 
          select={this.select}
          key={creature.id}
          image={creature.image}
          name={creature.name}
          />

        ))}
       </div>

      </div>
    );
  }
}



export default App;
