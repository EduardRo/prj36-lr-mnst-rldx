import React, { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

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
        <h1>People Rolodex</h1>
        <header className='App-header'>
          <SearchBox placeholder='search' handleChange={this.handleChange} />
        </header>

        <div>
          <CardList monsters={filteredMonsters}></CardList>
        </div>
      </div>
    );
  }
}

export default App;
