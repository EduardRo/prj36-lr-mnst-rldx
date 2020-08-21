import React, { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  state = {
    string: 'Hello Man',
    name: 'gigel',
    counter: 0,
    amici: ['Ionescu', 'Popescu', 'Andreescu', 'Marinescu'],
    txt: '',
    monsters: [],
    agenda: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  apasaButton = (e) => {
    //alert(this.state.string);
    this.setState({ name: 'vasile' });
    this.setState({ string: 'asta-i stringul functiei apasaButton' });
    this.setState({ counter: this.state.counter + 1 });
    const newTxt = this.arataText(this.state.amici);
    this.setState({ txt: newTxt });
    console.log(this.state.agenda);
  };
  arataText(am) {
    return am.map((person, index) => <p key={index}>{person}</p>);
  }

  render() {
    const { monsters, searchField } = this.state;
    /*const filteredMonsters = monsters.fielter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); */

    const filteredMonsters = monsters.filter((e) =>
      e.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <header className='App-header'>
          <input
            placeholder='search'
            onChange={(e) => this.setState({ searchField: e.target.value })}
          />
        </header>

        <div>
          <p>{this.state.string}</p>
          <p style={{ color: 'blue', fontFamily: 'arial', fontWeight: '100' }}>
            My Name is {this.state.name} counter {this.state.counter}
          </p>
          <div>{this.state.agenda}</div>
          <button onClick={this.apasaButton}>Press Button</button>
          <button
            onClick={() => {
              this.setState({ string: 'am schimbat stringul' });
              this.setState({ txt: '' });
            }}
          >
            Schimba
          </button>

          <div>{this.state.txt}</div>

          <CardList monsters={filteredMonsters}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
