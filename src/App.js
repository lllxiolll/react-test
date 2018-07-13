import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      data: [
        {        }
      ]
    }
  }

  componentDidMount() {
    var url = 'https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json';
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.map(user =>({
      city: `${user.city}`,
      growth_from_2000_to_2013: `${user.growth_from_2000_to_2013}`,
      latitude: `${user.latitude}`,
      longitude:`${user.longitude}`,
      population: `${user.population}`,
      rank:`${user.rank}`,
      state: `${user.state}`
    })))) 
    .then(contacts => this.setState({
      contacts,
      isLoading: false
    }))
    .catch(error => console.log('Parsing failed', error))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Fetching Data 
          <button className="btn btn-danger">Fetch now</button>
          </h1>
        </header>
        <div className="loader">
          <div className="icon"></div>
        </div>
        <div >
          ##map
        </div>
      </div>
    );
  }
}

export default App;
