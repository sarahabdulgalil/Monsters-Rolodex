
import React, {Component} from 'react'
import reactDom from 'react-dom';
import {CardList} from './components/card.list/card.list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx'
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state =
      { monsters :
        
        [],
        searchField :''
    
      }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState({monsters : users}))
  }
  render(){

    const {monsters, searchField} = this.state;
    
    const filteredMonesters = monsters.filter(monester => monester.name.toLowerCase().includes(searchField.toLowerCase()));
  
  
    
    return (
    <div className="App">

      <h1 className= 'header'>
        Monsters Rolodex
      </h1>

      <SearchBox
        placeholder = 'search monesters'
        handleChange = {e => this.setState({searchField: e.target.value })}
      />
      <CardList monsters = {filteredMonesters}/>

    </div>

  );
  }
}

export default App;
