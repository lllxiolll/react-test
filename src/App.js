import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const URI = 'https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    fetch(URI)
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
      .catch(error => console.log('Parsing failed', error))
  }


  render() {
      const {data} = this.state;
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
          <ul>
            {
              data.map(
                data =>
                  <li key={data.key}>
                    <a>{data.city}</a>
                    <a>{data.rank}</a>
                  </li>
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
