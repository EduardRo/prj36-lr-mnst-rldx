import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    string: 'Hello Man',
    name: 'gigel',
    counter: 0,
    amici: ['Ionescu', 'Popescu', 'Andreescu', 'Muiescu'],
    txt: '',
    monsters: [
      { name: 'Frankenstein' },
      { name: 'Dracula' },
      { name: 'Zombie' },
    ],
  };

  apasaButton = (e) => {
    //alert(this.state.string);
    this.setState({ name: 'vasile' });
    this.setState({ string: 'asta-i stringul functiei apasaButton' });
    this.setState({ counter: this.state.counter + 1 });
    const newTxt = this.arataText(this.state.amici);
    this.setState({ txt: newTxt });
  };
  arataText(am) {
    return am.map((person, index) => <p key={index}>{person}</p>);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>This is the Header</header>
        <div>
          <p>{this.state.string}</p>
          <p style={{ color: 'blue', fontFamily: 'arial', fontWeight: '100' }}>
            My Name is {this.state.name} counter {this.state.counter}
          </p>
          <button onClick={this.apasaButton}>Apasa bai tarane!</button>
          <button
            onClick={() => {
              this.setState({ string: 'am schimbat stringul' });
              this.setState({ txt: '' });
            }}
          >
            Schimba
          </button>
          <div>{this.state.txt}</div>

          {this.state.monsters.map((person, index) => {
            return (
              <h1 key={index}>
                {index}-{person.name}
              </h1>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
